"use client";

import Image from "next/image";
import TableSearch from "@/components/TableSearch";
import Pagination from "@/components/Pagination";

export default function TeachersPage() {
  return (
    <div className="bg-white p-4 rounded-md flex-1 mt-4 mx-2">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Title */}
        <h1 className="text-lg font-semibold hidden md:block">Teachers List</h1>

        {/* Right: Search + Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
          <TableSearch />

          {/* Buttons */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500">
              <Image src="/filter.png" alt="Filter" width={18} height={18} />
            </button>

            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500">
              <Image src="/sort.png" alt="Sort" width={18} height={18} />
            </button>

            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 hover:bg-yellow-500">
              <Image src="/plus.png" alt="Add" width={18} height={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Table Section (placeholder for now) */}
      <div className="mt-6 border rounded-md p-4 text-gray-500 text-sm text-center">
        Table data will appear here...
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <Pagination />
      </div>
    </div>
  );
}
