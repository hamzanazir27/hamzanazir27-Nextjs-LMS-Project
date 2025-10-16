export default function Announcement() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center ">
        <h1 className="font-semibold  text-xl">Announcement</h1>
        <span className="text-xs text-gray-400">view all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4 ">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Nihil aliquid repellat</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              20-20-12
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-400">
            dolor sit amet consectetur adipisicing elit. Mollitia, autem maxime!
            Nihil aliquid repellat beatae sit amet consectetur adipisicing
            elit.?
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Nihil aliquid repellat</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              20-20-12
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-400">
            dolor sit amet consectetur adipisicing elit. Mollitia, autem maxime!
            Nihil aliquid repellat beatae sit amet consectetur adipisicing
            elit.?
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Nihil aliquid repellat</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              20-20-12
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-400">
            dolor sit amet consectetur adipisicing elit. Mollitia, autem maxime!
            Nihil aliquid repellat beatae sit amet consectetur adipisicing
            elit.?
          </p>
        </div>
      </div>
    </div>
  );
}
