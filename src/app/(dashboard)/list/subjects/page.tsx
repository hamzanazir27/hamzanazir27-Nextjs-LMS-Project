//

"use client";

import Image from "next/image";
import TableSearch from "@/components/TableSearch";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, subjectsData } from "@/lib/data";
import FormModel from "@/components/FormModel";
// Define columns
const columns = [
  {
    header: "Subject Name",
    accessor: "subjectname",
  },

  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden lg:table-cell",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

type Subjects = {
  id: number;
  name: string;
  teachers: string[];
};

export default function ParentsPage() {
  // Get role from your auth system (e.g., session, context, etc.)

  // Define how each row should be rendered
  const renderRow = (item: Subjects) => (
    <>
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teachers.join(", ")}</td>

      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModel
                table="subject"
                type="update"
                id={item.id}
                data={item}
              />
              <FormModel table="subject" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 mt-4 mx-2">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left: Title */}
        <h1 className="text-lg font-semibold hidden md:block">All Subjects</h1>

        {/* Right: Search + Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto">
          <TableSearch />

          {/* Buttons */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-lamaYellow hover:bg-yellow-500">
              <Image src="/filter.png" alt="Filter" width={18} height={18} />
            </button>

            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-lamaYellow hover:bg-yellow-500">
              <Image src="/sort.png" alt="Sort" width={18} height={18} />
            </button>

            <FormModel table="subject" type="create" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />

      {/* Pagination */}
      <div className="mt-6">
        <Pagination />
      </div>
    </div>
  );
}
