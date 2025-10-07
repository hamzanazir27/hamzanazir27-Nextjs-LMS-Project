import React from "react";
import Image from "next/image";

export default function UserCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl min-w-[130px] flex-1 p-4 even:bg-lamaYellow odd:bg-lamaPurple">
      <div className="flex justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image alt="" src="/more.png" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="text-sm font-medium text-gray-500 capitalize">{type}s</h2>
    </div>
  );
}
