import Announcement from "@/components/Announcement";
import BigCallender from "@/components/BigCallender";
import EventCallander from "@/components/EventCallander";

const TeacherPage = () => {
  return (
    <div className="p-4 h-full flex gap-4 flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3 ">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold"> Schdule</h1>
          <BigCallender />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
};

export default TeacherPage;
