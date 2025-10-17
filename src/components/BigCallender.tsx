"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import { createKey } from "next/dist/shared/lib/router/router";
const localizer = momentLocalizer(moment);

const BigCallender = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  function handleOnChangeView(selectedView: View) {
    // console.log("hey");
    setView(selectedView);
  }
  return (
    <div>
      <Calendar
        className="h-[98%]"
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        // view="work_week"
        style={{ height: "98%" }}
        view={view}
        onView={handleOnChangeView}
        min={new Date(2025, 1, 0, 8, 0, 0)}
        max={new Date(2025, 1, 0, 17, 0, 0)}
      />
    </div>
  );
};

export default BigCallender;
