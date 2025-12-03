//

"use client";

import Image from "next/image";
import TableSearch from "@/components/TableSearch";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, studentsData } from "@/lib/data";
import FormModel from "@/components/FormModel";
// Define columns
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grades",
    accessor: "grades",
    className: "hidden md:table-cell",
  },

  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

type Student = {
  id: number;
  studentId: string;
  name: string;
  photo: string;
  phone?: string; // Optional because primary school students
  grade: number;
  class: string;
  address: string;
};
export default function StudentPage() {
  // Get role from your auth system (e.g., session, context, etc.)

  // Define how each row should be rendered
  const renderRow = (item: Student) => (
    <>
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt={item.name}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button className="flex items-center justify-center rounded-full bg-lamaSky w-7 h-7">
              <Image src="/view.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <FormModel table="student" type="delete" id={item.id} />
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
        <h1 className="text-lg font-semibold hidden md:block">Student List</h1>

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

            <FormModel table="student" type="create" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />

      {/* Pagination */}
      <div className="mt-6">
        <Pagination />
      </div>
    </div>
  );
}
