// src/components/forms/TeacherForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../InputField";
// import InputField from "../InputField";
// --- 1. ZOD SCHEMA (Validation Rules) ---
// Screenshots se li gayi fields aur unke rules
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

  // Note: Phone aur Address strings hain jinko required banaya gaya hai.
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),

  // Sex: Enum value se validation
  sex: z.enum(["male", "female"], { message: "Sex is required" }),

  // Birthday: Screenshot mein date.min(1) hai, yahan string.min(1) use kiya gaya hai.
  birthday: z.string().min(1, { message: "Birthday is required!" }),

  // Image: File upload validation ko simple rakha gaya hai
  img: z.any().optional(),

  // Screenshot mein 'Blood Type' field dikh raha hai, jisko optional rakha gaya hai
  bloodType: z.string().optional(),
});

// Zod se Type Inference
type TeacherFormData = z.infer<typeof schema>;

// --- 2. COMPONENT PROPS ---
interface TeacherFormProps {
  type: "create" | "update";
  data?: TeacherFormData;
}

// --- 3. TEACHER FORM COMPONENT ---
const TeacherForm = ({ type, data }: TeacherFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Errors object yahan se aata hai
  } = useForm<TeacherFormData>({
    resolver: zodResolver(schema), // Zod Resolver Integration
    defaultValues: data,
  });

  const onSubmit = (formData: TeacherFormData) => {
    // Ye function sirf tab run hoga jab validation successful hogi
    console.log(`Submitting form in ${type} mode:`, formData);
    // Yahan Server Action/API call hoga
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new Teacher" : "Update Teacher"}
      </h1>

      {/* --- AUTHENTICATION INFORMATION --- */}
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>

      {/* Username Field */}
      <InputField
        label="Username"
        name="username"
        register={register}
        error={errors.username}
        defaultValue={data?.username} // data se default value
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
      />

      {/* --- PERSONAL INFORMATION --- */}
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>

      <div className="flex flex-wrap gap-4">
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

        {/* Birthday Field (type="date" ke liye string ya date object use hota hai) */}
        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          register={register}
          error={errors.birthday}
          defaultValue={data?.birthday}
        />

        {/* Sex Field - Dropdown */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500" htmlFor="sex">
            Sex
          </label>
          <select
            id="sex"
            {...register("sex")}
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
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
      </div>

      {/* 5. Submit Button */}
      <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
