import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Search Bar */}
      <div className="flex items-center gap-2 border rounded-md px-2 py-1 bg-transparent">
        <Image src="/search.png" alt="Search icon" width={16} height={16} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] outline-none text-sm"
        />
      </div>

      {/* Icon User */}
      <div className="text-gray-700 font-medium">Hello User</div>
    </nav>
  );
}
