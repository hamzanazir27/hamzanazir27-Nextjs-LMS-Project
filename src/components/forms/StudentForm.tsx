// src/components/forms/StudentForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../InputField"; // Assuming correct relative path

// --- 1. ZOD SCHEMA (Validation Rules) ---
const schema = z.object({
  // Authentication Information
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),

  email: z.string().email({ message: "Invalid email address!" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),

  // Personal Information
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),

  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),

  sex: z.enum(["male", "female"], { message: "Sex is required" }),

  // Date type input ke liye string sahi hai
  birthday: z.string().min(1, { message: "Birthday is required!" }),

  img: z.any().optional(),
  bloodType: z.string().optional(),
});

type StudentFormData = z.infer<typeof schema>;

// --- 2. COMPONENT PROPS ---
interface StudentFormProps {
  type: "create" | "update";
  data?: StudentFormData;
}

// --- 3. STUDENT FORM COMPONENT ---
const StudentForm = ({ type, data }: StudentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormData>({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  const onSubmit = (formData: StudentFormData) => {
    console.log(`Submitting form in ${type} mode:`, formData);
    // Submit logic yahan aayegi
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 p-4">
      {/* 4. Form Header (Create/Update Teacher Dialog Title) */}
      {/* <h1 className="text-xl font-semibold">
        {type === "create" ? "Create Student" : "Update Student"}
      </h1> */}

      {/* --- AUTHENTICATION INFORMATION --- */}
      <span className="text-xs text-gray-400 font-medium border-b pb-1">
        Authentication Information
      </span>

      <div className="flex flex-wrap gap-4 w-full">
        {/* Username Field */}
        <InputField
          label="Username"
          name="username"
          register={register}
          error={errors.username}
          defaultValue={data?.username}
        />

        {/* Email Field */}
        <InputField
          label="Email"
          name="email"
          register={register}
          error={errors.email}
          defaultValue={data?.email}
        />

        {/* Password Field */}
        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
          // Default value password ke liye set nahi karte hain for security
        />
      </div>

      {/* --- PERSONAL INFORMATION --- */}
      <span className="text-xs text-gray-400 font-medium border-b pb-1">
        Personal Information
      </span>

      <div className="flex flex-wrap gap-4 w-full">
        {/* First Name Field */}
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
          defaultValue={data?.firstName}
        />

        {/* Last Name Field */}
        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
          defaultValue={data?.lastName}
        />

        {/* Phone Field */}
        <InputField
          label="Phone"
          name="phone"
          register={register}
          error={errors.phone}
          defaultValue={data?.phone}
        />

        {/* Address Field */}
        <InputField
          label="Address"
          name="address"
          register={register}
          error={errors.address}
          defaultValue={data?.address}
        />

        {/* Blood Type (Optional) */}
        <InputField
          label="Blood Type"
          name="bloodType"
          register={register}
          error={errors.bloodType}
          defaultValue={data?.bloodType}
        />

        {/* Birthday Field */}
        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          register={register}
          error={errors.birthday}
          defaultValue={data?.birthday}
        />

        {/* Sex Field - Dropdown */}
        <div className="flex flex-col gap-2 w-full sm:w-[calc(33.33%-1rem)] min-w-[200px]">
          <label className="text-xs text-gray-500" htmlFor="sex">
            Sex
          </label>
          <select
            id="sex"
            {...register("sex")}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full focus:ring-blue-500 focus:border-blue-500"
            defaultValue={data?.sex}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>

        {/* Image Upload Placeholder */}
        <div className="flex flex-col gap-2 w-full sm:w-[calc(33.33%-1rem)] min-w-[200px] justify-end">
          <span className="text-center border border-dashed border-gray-400 p-2 rounded-md h-full flex items-center justify-center text-sm text-gray-500">
            Upload a photo
          </span>
        </div>
      </div>

      {/* 5. Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md mt-4 transition duration-200"
      >
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
