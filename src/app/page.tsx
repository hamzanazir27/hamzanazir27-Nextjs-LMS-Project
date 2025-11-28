import Link from "next/link";

const Homepage = () => {
  return (
    <div className="text-lamaSky bg-slate-700 p-28 font-extrabold text-4xl flex flex-col gap-4">
      Homepage{" "}
      <Link href="/parent" className="underline">
        Go to parent page
      </Link>
      <Link href="/admin" className="underline">
        Go to admin page
      </Link>
      <Link href="/student" className="underline">
        Go to student page
      </Link>
      <Link href="/teacher" className="underline">
        Go to teacher page
      </Link>
    </div>
  );
};

export default Homepage;
