import { ReactElement } from "react";

type Variants = "primary" | "secondary";

interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-royalBlue-400 text-white",
  secondary: "bg-royalBlue-300 text-white-400",
};


const sizeStyles = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-md",
  lg: "px-6 py-2 text-lg",
};

const defaultStyles = "rounded-lg p-2 m-1 flex items-center space-x-2 justify-center";

export const Button = (props: ButtonProps) => {
  const { variant, size, text, startIcon, endIcon, onClick } = props;
  return (
    <button
      className={`${defaultStyles} ${variantStyles[variant]} ${sizeStyles[size]} `}
    >
      
      {startIcon ? <div className="mr-2"> {startIcon} </div> : null}
      {text}{" "}
      {endIcon ? <div className="ml-2"> {endIcon} </div> : null}
    </button>
  );
};
