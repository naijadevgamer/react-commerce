import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "@/components/FormButton";
import AuthSwitchLink from "@/components/AutoSwitchLink";
import FormInput from "@/components/FormInput";
import FormBgImage from "@/components/FormBgImage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserProfileDocument } from "@/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

// Schema for Register Form Validation
const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .min(1, "Email is Required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(1, "Password is Required")
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: z.string().min(1, "Confirm Password must match Password"),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        path: ["confirmPassword"],
        message: "Confirm Password must match Password",
      });
    }
  });

type RegisterFields = z.infer<typeof registerSchema>;

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFields>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();
  // const onSubmit: SubmitHandler<RegisterFields> = (data: RegisterFields) => {
  //   console.log(data);
  // };

  const onSubmit: SubmitHandler<RegisterFields> = async (data) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      await createUserProfileDocument(user, { displayName: data.name });
      console.log("User registered successfully", user);

      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error("Error creating user", error);
    }
  };

  return (
    <div className="mx-auto my-14 flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 md:my-20 lg:max-w-4xl">
      <FormBgImage />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-6 py-8 md:px-8 lg:w-1/2"
      >
        <div className="mx-auto flex justify-center">
          <img
            className="h-7 w-auto sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt="Logo"
          />
        </div>
        <p className="mb-4 mt-3 text-center text-xl text-gray-600 dark:text-gray-200">
          Create your account
        </p>

        <FormButton
          label="Sign up with Google"
          variant="google"
          onClick={() => console.log("Google Login Clicked")}
        />
        <AuthSwitchLink text="Or register here" />
        <div className="mt-4">
          <FormInput
            id="name"
            label="Name"
            {...register("name")}
            error={errors.name?.message}
          />
          <FormInput
            id="email"
            label="Email Address"
            {...register("email")}
            error={errors.email?.message}
          />
          <FormInput
            id="password"
            label="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <FormInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        </div>
        <div className="mt-6">
          <FormButton label="Sign Up" type="submit" />
        </div>

        <AuthSwitchLink text="Or Sign in here" href={"/login"} />
      </form>
    </div>
  );
};

export default RegisterPage;
