"use client";
import Image from "next/image";

export default function TableSearch() {
  return (
    <div className="flex items-center w-full md:w-auto bg-gray-100 rounded-md px-3 py-2">
      <Image
        src="/search.png"
        alt="Search"
        width={16}
        height={16}
        className="opacity-60"
      />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-sm ml-2 w-full"
      />
    </div>
  );
}
