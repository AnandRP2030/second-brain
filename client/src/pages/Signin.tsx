import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { userSignin } from "../apis/authService";
import { toast } from "react-hot-toast";
type InputTypes = {
  email: string;
  password: string;
};
export const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();

  const { mutate } = useMutation({
    mutationFn: userSignin,
    onSuccess: (data) => {
      toast.success("Sign in successful.");
      console.log(data.token);
      localStorage.setItem("second-brain-token", data.token)
      navigate("/");
    },
    onError: (error: any) => {
      const errorMsg = error?.response?.data?.message || "Signin failed";
      toast.error(errorMsg);
      console.error("Signin failed: ", error.response?.data || error?.message);
    },
  });
  const Signin: SubmitHandler<InputTypes> = (data) => {
    const { email, password } = data;
    if (!email || !password) {
      return;
    }
    mutate({ email, password });
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="h-screen bg-gray-200 w-screen  flex justify-center items-center ">
      <div className="px-10 py-5 bg-white shadow border-red-100 rounded-md">
        <h1 className="text-center font-medium text-lg"> Sign In</h1>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(Signin)}
        >
          <div>
            <Input
              name="email"
              size="lg"
              placeholder="Enter your email"
              type="email"
              register={register}
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
            />
            {errors?.email && (
              <p className="text-red-500 ">{errors?.email?.message}</p>
            )}
          </div>
          <div>
            <Input
              name="password"
              size="lg"
              placeholder="Enter your password"
              type="password"
              register={register}
              validation={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be min 6 characters",
                },
                maxLength: {
                  value: 30,
                  message: "Password can't exceed more than 30 characters",
                },
              }}
            />
            {errors?.password && (
              <p className="text-red-500">{errors?.password?.message}</p>
            )}
          </div>

          <p className="text-sm">
            Create new account{" "}
            <span
              onClick={navigateToSignup}
              className="font-medium cursor-pointer"
            >
              Sign Up
            </span>
          </p>

          <div className="flex justify-center">
            <Button
              loading={isLoading}
              size="md"
              variant="dark"
              text="Sign In"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
