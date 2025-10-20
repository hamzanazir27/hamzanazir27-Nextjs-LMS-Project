import React from "react";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

type TableProps = {
  columns: Column[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
};

const Table = ({ columns, renderRow, data }: TableProps) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className={
              "border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight" +
              `${item?.className}`
            }
          >
            {renderRow(item)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
