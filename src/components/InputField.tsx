// src/components/forms/InputField.tsx

import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

// --- 1. PROPS TYPE ---
interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  defaultValue?: string | number | readonly string[] | undefined;
}

// --- 2. INPUT FIELD COMPONENT ---
const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  register,
  error,
  defaultValue,
}) => {
  return (
    // FINAL FIX: w-full sm:w-[calc(33.33%-1rem)] min-w-[200px] ensures 3-column layout
    <div className="flex flex-col gap-2 w-full sm:w-[calc(33.33%-1rem)] min-w-[200px]">
      {/* Label */}
      <label className="text-xs text-gray-500" htmlFor={name}>
        {label}
      </label>

      {/* Input */}
      <input
        id={name}
        type={type}
        defaultValue={defaultValue}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full focus:ring-blue-500 focus:border-blue-500"
      />

      {/* Error Display Logic */}
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
