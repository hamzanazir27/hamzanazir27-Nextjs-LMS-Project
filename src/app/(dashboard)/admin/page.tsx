import Announcement from "@/components/Announcement";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCallander from "@/components/EventCallander";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-5 flex flex-col md:flex-row items-center justify-between ">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="stuff" />
        </div>
        {/* Middle Charts  */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count  Chart  */}
          <div className="w-full lg:w-1/3 h-[450px] ">
            <CountChart />
          </div>

          {/* Attendance  Chart  */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom Chart  */}
        <div className="w-full h-[400px]">
          <FinanceChart />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 h-full ml-4 flex flex-col gap-4">
        <EventCallander />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
