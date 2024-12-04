import React, { ReactNode } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "default" | "google";
  iconSrc?: ReactNode; // Optional icon source for the Google button
}

const FormButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
  variant = "default",
  iconSrc,
}) => {
  const isGoogle = variant === "google";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex w-full transform items-center justify-center rounded-lg px-6 py-3 text-sm font-medium capitalize tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-opacity-50 ${
        isGoogle
          ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-300"
          : "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-300"
      } ${className}`}
    >
      {isGoogle && iconSrc}
      {label}
    </button>
  );
};
export default FormButton;
