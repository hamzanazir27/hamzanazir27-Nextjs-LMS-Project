"use client";

import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Value = Date | [Date, Date];

export default function EventCallander() {
  const [value, onChange] = useState<Value>(new Date());
  // temprary data
  const events = [
    {
      id: 1,
      title: "dwweekends",
      time: "12:00PM - 2:00PM",
      discription: "fnjs sndfj jgioks pfnekjwnb  nfjsnf sndfolks",
    },
    {
      id: 2,
      title: "mern stack",
      time: "12:00PM - 2:00PM",
      discription: "fnjs sndfj jgioks pfnekjwnb  nfjsnf sndfolks",
    },
    {
      id: 3,
      title: "dsa leetcode",
      time: "12:00PM - 2:00PM",
      discription: "fnjs sndfj jgioks pfnekjwnb  nfjsnf sndfolks",
    },
  ];

  return (
    <div className="p-4 bg-white rounded-md ite">
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-col gap-4 mt-4">
        {/* Title */}
        <div className="flex justify-between items-center p-4 ">
          <div className="text-lg font-semibold">Events</div>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {events.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaYellow"
          >
            <div className="flex justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
