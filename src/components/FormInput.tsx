import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type = "text", placeholder = "", error, ...props }, ref) => (
    <div className="mt-4">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
      >
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...props}
        className={`block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:outline-none ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring focus:ring-red-300 focus:ring-opacity-40"
            : "focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        }`}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  ),
);

export default FormInput;
