import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../apis/authService";
import { SignupData } from "../types/auth";
import { toast } from "react-hot-toast";

export const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>();

  const { mutate } = useMutation({
    mutationFn: userSignup,
    onSuccess: () => {
      toast.success("Signup success");
      navigate("/signin");
    },
    onError: (error: any) => {
      const errorMsg = error?.response?.data?.message || "Signup failed";
      toast.error(errorMsg);
      console.error("Signup failed: ", error.response?.data || error?.message);
    },
  });

  const navigateToLogin = () => {
    navigate("/signin");
  };
  const onSubmit: SubmitHandler<SignupData> = (data) => {
    const { username, email, password } = data;
    if (!username || !email || !password) {
      return;
    }

    mutate({ username, email, password });
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
            {errors?.email && (
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
          <p>
            Already have an account?{" "}
            <span
              className="cursor-pointer font-medium"
              onClick={navigateToLogin}
            >
              {" "}
              Sign In
            </span>
          </p>
          <div className="flex justify-center">
            <Button loading={false} size="md" variant="dark" text="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};
