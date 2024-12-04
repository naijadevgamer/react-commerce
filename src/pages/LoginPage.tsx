import { BsGoogle } from "react-icons/bs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import AuthSwitchLink from "@/components/AutoSwitchLink";
import FormBgImage from "@/components/FormBgImage";

// Schema for Login Form Validation
const loginSchema = z.object({
  email: z.string().min(1, "Email is Required").email(),
  password: z
    .string()
    .min(1, "Password is Required")
    .min(8, "Password must be at least 8 characters long"),
});

type LoginFields = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFields> = (data: LoginFields) => {
    console.log(data);
  };

  return (
    <div className="mx-auto mt-20 flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 lg:max-w-4xl">
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
          Welcome back!
        </p>

        <FormButton
          label="Sign in with Google"
          variant="google"
          iconSrc={<BsGoogle className="mr-2" />}
          onClick={() => console.log("Google Sign-In Clicked")}
        />

        <AuthSwitchLink text="Or Sign in here" />

        <div className="mt-4">
          <FormInput
            id="email"
            {...register("email")}
            label="Email Address"
            error={errors.email?.message}
          />
          <FormInput
            id="password"
            {...register("password")}
            label="Password"
            type="password"
            error={errors.password?.message}
          />
        </div>
        <div className="mt-6">
          <FormButton label="Sign In" type="submit" />
        </div>

        <AuthSwitchLink text="Or register here" href={"/signup"} />
      </form>
    </div>
  );
};

export default LoginPage;
