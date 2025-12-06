// src/components/forms/TeacherForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../InputField";

// --- 1. ZOD SCHEMA (Image Fix) ---
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
  birthday: z.string().min(1, { message: "Birthday is required!" }),

  // FIX: File validation ko simple rakha gaya hai kyunki upload logic yahan nahi hai.
  // Agar file required ho toh: img: z.any().refine((file) => file?.length > 0, "Image is required"),
  img: z.any().optional(),
  bloodType: z.string().optional(),
});

type TeacherFormData = z.infer<typeof schema>;

// --- 3. TEACHER FORM COMPONENT ---
const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: TeacherFormData;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeacherFormData>({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  const onSubmit = (formData: TeacherFormData) => {
    console.log(`Submitting form in ${type} mode:`, formData);

    // FIX: Image data ko access karne ka tareeqa:
    const file = formData.img && formData.img[0];
    if (file) {
      console.log("File detected:", file.name, file.size);
    }
    // Yahan API call ya Server Action use karein (file ko FormData mein wrap karke)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 p-0">
      {/* <h1 className="text-xl font-semibold">
        {type === "create" ? "Create Teacher" : "Update Teacher"}
      </h1> */}

      {/* --- AUTHENTICATION INFORMATION --- */}
      <span className="text-xs text-gray-400 font-medium border-b pb-1">
        Authentication Information
      </span>

      {/* UI FIX: flex-wrap container */}
      <div className="flex flex-wrap gap-4 w-full">
        <InputField
          label="Username"
          name="username"
          register={register}
          error={errors.username}
          defaultValue={data?.username}
        />
        <InputField
          label="Email"
          name="email"
          register={register}
          error={errors.email}
          defaultValue={data?.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          error={errors.password}
        />
      </div>

      {/* --- PERSONAL INFORMATION --- */}
      <span className="text-xs text-gray-400 font-medium border-b pb-1">
        Personal Information
      </span>

      {/* UI FIX: flex-wrap container */}
      <div className="flex flex-wrap gap-4 w-full">
        <InputField
          label="First Name"
          name="firstName"
          register={register}
          error={errors.firstName}
          defaultValue={data?.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          register={register}
          error={errors.lastName}
          defaultValue={data?.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          register={register}
          error={errors.phone}
          defaultValue={data?.phone}
        />

        <InputField
          label="Address"
          name="address"
          register={register}
          error={errors.address}
          defaultValue={data?.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          register={register}
          error={errors.bloodType}
          defaultValue={data?.bloodType}
        />
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

        {/* Image Upload FIX: Hidden input ko label ke andar wrap kiya */}
        <div className="flex flex-col gap-2 w-full sm:w-[calc(33.33%-1rem)] min-w-[200px] justify-end">
          <label className="text-xs text-gray-500 block">Upload Photo</label>
          <label
            htmlFor="img-upload"
            className="text-center border border-dashed border-gray-400 p-2 rounded-md h-full flex items-center justify-center text-sm text-gray-500 cursor-pointer"
          >
            <input
              type="file"
              id="img-upload"
              {...register("img")}
              className="hidden"
            />
            Upload a photo
          </label>
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
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

export default TeacherForm;
