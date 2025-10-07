import Image from "next/image";
import React from "react";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 border rounded-2xl px-2 py-1 bg-transparent">
        <Image src="/search.png" alt="Search icon" width={16} height={16} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] outline-none text-sm bg-transparent"
        />
      </div>

      {/* Icon & Users */}
      <div className="flex gap-6 items-center justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium leading-3">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          alt=""
          src="/avatar.png"
          className="rounded-full"
          width={24}
          height={24}
        />
      </div>
    </nav>
  );
}
