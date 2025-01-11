import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
type InputTypes = {
  email: string;
  password: string;
};
export const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<InputTypes>();
  const Signin: SubmitHandler<InputTypes> = () => {
    console.log("test");
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="h-screen bg-gray-200 w-screen  flex justify-center items-center ">
      <div className="px-10 py-5 bg-blue-400 shadow border-red-100 rounded-md">
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
            <p className="text-red-500">{errors?.email?.message}</p>
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
            <p className="text-red-500">{errors?.password?.message}</p>
          </div>

          <p>
            Create new account{" "}
            <span onClick={navigateToSignup} className="font-medium cursor-pointer">
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
