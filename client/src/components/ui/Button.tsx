import { ReactElement } from "react";

type Variants = "primary" | "secondary" | "dark";

interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  loading?: boolean;
}

const variantStyles = {
  primary: "bg-royalBlue-400 text-white",
  secondary: "bg-royalBlue-300 text-white-400",
  dark: "bg-black text-white"
};

const sizeStyles = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-md",
  lg: "px-6 py-2 text-lg",
};

const defaultStyles =
  "rounded-lg p-2 m-1 flex items-center space-x-2 justify-center hover:opacity-80  transition duration-300 ease-in-out";

export const Button = (props: ButtonProps) => {
  const { variant, size, text, startIcon, endIcon, onClick, loading } = props;
  const loadingStyles = loading ? `cursor-not-allowed` : "";
  return (
    <button
      disabled={loading}
      className={`${defaultStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${loadingStyles}`}
      onClick={onClick}
    >
      {startIcon ? <div className="mr-2"> {startIcon} </div> : null}
      {text} {endIcon ? <div className="ml-2"> {endIcon} </div> : null}
    </button>
  );
};
