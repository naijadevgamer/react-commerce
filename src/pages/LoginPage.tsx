import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import AuthSwitchLink from "@/components/AutoSwitchLink";
import FormBgImage from "@/components/FormBgImage";
import { auth, signInWithGoogle } from "@/firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    formState: { errors, isSubmitting },
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
  });

  const [isGoogleSigningIn, setGoogleSigningIn] = useState(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log("User logged in successfully");
      navigate("/"); // Redirect to homepage
    } catch (error) {
      console.error("Error logging in", error);
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
          Welcome back!
        </p>

        <FormButton
          label="Sign in with Google"
          variant="google"
          onClick={() => {
            setGoogleSigningIn(true);
            signInWithGoogle()
              .then((result) => {
                navigate("/");
                console.log(result);
              })
              .catch((error) => {
                console.log(error);
              })
              .finally(() => {
                setGoogleSigningIn(false); // Stop loading
              });
          }}
          isSubmitting={isGoogleSigningIn}
        />
        {/* <FormButton
          label="Sign in with Google"
          variant="google"
          onClick={signInWithGoogleMobile}
          className="flex xl:hidden"
        /> */}

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
          <FormButton
            label="Sign In"
            type="submit"
            isSubmitting={isSubmitting}
          />
        </div>

        <AuthSwitchLink text="Or register here" href={"/signup"} />
      </form>
    </div>
  );
};

export default LoginPage;
