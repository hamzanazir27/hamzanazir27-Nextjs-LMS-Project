import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-5 flex flex-col md:flex-row items-center justify-between ">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="stuff" />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3">Right</div>
    </div>
  );
};

export default AdminPage;
