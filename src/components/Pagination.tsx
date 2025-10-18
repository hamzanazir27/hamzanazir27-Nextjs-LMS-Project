"use client";

export default function Pagination() {
  return (
    <div className="flex justify-between items-center text-gray-700 text-sm">
      {/* Prev Button */}
      <button
        disabled
        className="px-3 py-1 rounded-md bg-gray-200 text-gray-500 font-semibold opacity-50 cursor-not-allowed"
      >
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className={`px-3 py-1 rounded-md ${
              num === 1
                ? "bg-sky-500 text-white"
                : "bg-transparent text-gray-700"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button className="px-3 py-1 rounded-md bg-gray-200 font-semibold hover:bg-gray-300">
        Next
      </button>
    </div>
  );
}
