import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
type Inputs = {
  username: string;
  email: string;
  password: string;
};

export const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const navigateToLogin = () => {
    navigate('/signin')
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("data", data);
  };
  const Signup = () => {
    console.log("test");
  };
  return (
    <div className="h-screen bg-gray-200 w-screen  flex justify-center items-center ">
      <div className="px-10 py-5 bg-blue-400 shadow border-red-100 rounded-md">
        <h1 className="text-center font-medium text-lg"> Sign Up</h1>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              register={register}
              name="username"
              size="lg"
              placeholder="Enter your username"
              type="text"
              validation={{
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username should be min 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username can't exceed more than 20 characters",
                },
              }}
            />
            {errors?.username && (
              <p className="text-red-500">{errors?.username?.message} </p>
            )}
          </div>

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
            {errors?.username && (
              <p className="text-red-500">{errors?.email?.message} </p>
            )}
          </div>

          <div>
            <Input
              register={register}
              name="password"
              size="lg"
              placeholder="Enter your password"
              type="password"
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
              <p className="text-red-500">{errors?.password?.message} </p>
            )}
          </div>
            <p>Already have an account? <span className="cursor-pointer font-medium" onClick={navigateToLogin}> Sign In</span></p>
          <div className="flex justify-center">
            <Button
              loading={isLoading}
              size="md"
              variant="dark"
              text="Sign Up"
              onClick={Signup}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
