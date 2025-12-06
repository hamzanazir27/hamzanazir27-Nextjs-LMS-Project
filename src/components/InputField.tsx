// src/components/forms/InputField.tsx

import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

// --- 1. PROPS TYPE ---
interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>; // React Hook Form ka register function
  error?: FieldError; // Validation error object
  defaultValue?: string; // Add defaultValue to the props
}

// --- 2. INPUT FIELD COMPONENT ---
const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  register,
  error,
  defaultValue, // Accept defaultValue as a prop
}) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      {/* Label */}
      <label className="text-xs text-gray-500" htmlFor={name}>
        {label}
      </label>

      {/* Input */}
      <input
        id={name}
        type={type}
        defaultValue={defaultValue} // Pass defaultValue to the input element
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
      />

      {/* Error Display Logic */}
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
