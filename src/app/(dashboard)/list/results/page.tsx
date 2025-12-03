//

"use client";

import Image from "next/image";
import TableSearch from "@/components/TableSearch";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import FormModel from "@/components/FormModel";
import Link from "next/link";
import { role, resultsData } from "@/lib/data";
// Define columns
const columns = [
  {
    header: "Subject",
    accessor: "subject",
  },

  {
    header: "class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },
  {
    header: "Student",
    accessor: "student",
    className: "hidden lg:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden lg:table-cell",
  },
  {
    header: "Type",
    accessor: "type",
    className: "hidden lg:table-cell",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden lg:table-cell",
  },

  {
    header: "Actions",
    accessor: "actions",
  },
];

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
};

export default function ResultsPage() {
  const renderRow = (item: Result) => (
    <>
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.class}</td>

      <td className="hidden lg:table-cell">{item.teacher}</td>
      <td className="hidden lg:table-cell">{item.student}</td>
      <td className="hidden lg:table-cell">{item.date}</td>
      <td className="hidden lg:table-cell">{item.type}</td>
      <td className="hidden lg:table-cell">{item.score}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="flex items-center justify-center rounded-full bg-lamaSky w-7 h-7">
              <Image src="/view.png" alt="view" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <FormModel table="result" type="delete" id={item.id} />
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
        <h1 className="text-lg font-semibold hidden md:block">All Results</h1>

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

            <FormModel table="result" type="create" />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />

      {/* Pagination */}
      <div className="mt-6">
        <Pagination />
      </div>
    </div>
  );
}
