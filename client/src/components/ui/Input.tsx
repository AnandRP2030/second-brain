import { useState } from "react";
import { HidePasswordIcon } from "../icon/ShowHideIcon";
import { ShowPasswordIcon } from "../icon/ShowPasswordIcon";

interface InputProps {
  placeholder?: string;
  type?: string;
  onChange?: () => void;
  size: "sm" | "md" | "lg";
}

export const Input = (props: InputProps) => {
  const { placeholder = "", type = "text", onChange, size } = props;
  const [inputType, setInputType] = useState(type);
  const sizes = {
    sm: "text-md w-48",
    md: "text-md w-64",
    lg: "text-md w-96",
  };
  const inputSize = sizes[size];
  const setPasswordVisible = () => {
    setInputType("text");
  };
  const setPasswordHide = () => {
    setInputType("password");
  };

  return (
    <div className="mt-5 flex relative items-center">
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        className={`${inputSize} rounded-md px-4 py-2 border`}
      />
      {type === "password" && (
        <div className="absolute right-2 cursor-pointer">
          {inputType === "password" ? (
            <span onClick={setPasswordVisible}>
              <ShowPasswordIcon />
            </span>
          ) : (
            <span onClick={setPasswordHide}>
              <HidePasswordIcon />
            </span>
          )}
        </div>
      )}
    </div>
  );
};
