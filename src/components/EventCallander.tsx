"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Value = Date | [Date, Date];

export default function EventCallander() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="p-4 bg-white rounded-md ite">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
