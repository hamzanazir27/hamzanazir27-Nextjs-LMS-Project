"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 2000,
  },
  {
    name: "Mar",
    income: 3500,
    expense: 2400,
  },
  {
    name: "Apr",
    income: 2222,
    expense: 3000,
  },
  {
    name: "May",
    income: 4500,
    expense: 2400,
  },
  {
    name: "Jun",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Jul",
    income: 3900,
    expense: 2400,
  },
  {
    name: "Aug",
    income: 4000,
    expense: 3000,
  },
  {
    name: "Sep",
    income: 2300,
    expense: 2400,
  },
  {
    name: "Oct",
    income: 2444,
    expense: 2222,
  },
  {
    name: "Nov",
    income: 2332,
    expense: 2400,
  },
  {
    name: "Dec",
    income: 4000,
    expense: 2323,
  },
];

export default function FinanceChart() {
  return (
    <div className=" relative bg-white rounded-xl w-full h-full pb-8">
      {/* Title */}
      <div className="flex justify-between items-center p-4 !pb-1 ">
        <div className="text-lg font-semibold">Finance Chart</div>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis axisLine={false} tickLine={false} tickMargin={10} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "10px" }}
          />{" "}
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            activeDot={{ r: 8 }}
            strokeWidth={5}
          />
          <Line
            strokeWidth={5}
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
