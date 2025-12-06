// ModelForm.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentForm";

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
  // Add other forms dynamically here
};

const ModelForm = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";

  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const [isOpen, setOpen] = useState(false);
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table]?.(type, data) || <span>Form not found!</span>
    ) : (
      <span>Form not found!</span>
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>

      {isOpen && (
        <div className="h-screen w-screen fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          {/* SCROLL FIX: max-h aur overflow-y-auto add kiye */}
          <div className="bg-white relative rounded-lg p-6 w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-xl font-semibold capitalize">
                {type} {table}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="hover:opacity-70"
              >
                <Image src="/close.png" alt="Close" width={20} height={20} />
              </button>
            </div>

            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default ModelForm;
