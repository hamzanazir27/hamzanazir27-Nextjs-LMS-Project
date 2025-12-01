"use client";

const ModelForm = ({
  table,
  type,
  date,
  id,
}: {
  table: "result" | "attendance" | "event" | "announcement";
  type: "create" | "update" | "delete";
  date?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
      >
        <Image src="" />
      </button>
    </>
  );
};

export default ModelForm;
