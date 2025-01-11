import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const Signin = () => {
    console.log("test");
  };
  return (
    <div className="h-screen bg-gray-200 w-screen  flex justify-center items-center ">
      <div className="px-10 py-5 bg-blue-400 shadow border-red-100 rounded-md">
        <h1 className="text-center font-medium text-lg"> Sign Up</h1>
        <div className="flex flex-col space-y-4">
          <Input size="lg" placeholder="Enter your email" type="email" />
          <Input size="lg" placeholder="Enter your password" type="password" />

          <div className="flex justify-center">
            <Button
              loading={isLoading}
              size="md"
              variant="dark"
              text="Sign In"
              onClick={Signin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
