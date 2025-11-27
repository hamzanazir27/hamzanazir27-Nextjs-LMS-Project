import Announcement from "@/components/Announcement";
import BigCallender from "@/components/BigCallender";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 flex p-4 flex-col gap-4 xl:flex-row">
      {/* Left  */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* user info card  */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2589650/pexels-photo-2589650.jpeg"
                width={144}
                height={144}
                alt=""
                className="rounded-full object-cover h-36 w-36"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Hamza Nazir</h1>
              <p className="text-sm text-gray-500">
                loream ipsum dolor sit amet, consectetur
              </p>
              <div className="flex  items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" height={14} width={14} />
                  <span className="ml-2">A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" height={14} width={14} />
                  <span className="ml-2">January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" height={14} width={14} />
                  <span className="ml-2">abc@gmail.componey</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" height={14} width={14} />
                  <span className="ml-2">+32 232 232</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Cards top right  */}
          <div className="flex-1 flex flex-wrap gap-2">
            {/* card  */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h3 className="font-semibold">95%</h3>
                <span className="text-sm tex-gray-400">Attendance</span>
              </div>
            </div>
            {/* card  */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4  w-full md:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h3 className="font-semibold">7</h3>
                <span className="text-sm tex-gray-400">Lessons</span>
              </div>
            </div>
            {/* card  */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h3 className="font-semibold">9</h3>
                <span className="text-sm tex-gray-400">Classes</span>
              </div>
            </div>
            {/* card  */}
            <div className="bg-white p-4 rounded-md flex items-center gap-4 w-full md:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h3 className="font-semibold">4</h3>
                <span className="text-sm tex-gray-400">Branches</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schdeule</h1>
          <BigCallender />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        {/* Shortcus */}
        <div className="bg-white p-4 rounded-md">
          <h1 className="font-semibold text-xs mb-4">Shortcuts</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-4">
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
              Teacher&apos;s Classes
            </Link>
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
              Teacher&apos;s Students
            </Link>
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
              Teacher&apos;s Lessons
            </Link>
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
              Teacher&apos;s Exams
            </Link>
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        {/* Chart */}
        <Performance />
        {/* annoucements  */}
        <Announcement />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
