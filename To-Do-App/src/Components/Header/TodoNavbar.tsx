import { useEffect, useState } from "react";

function TodoNavbar() {

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-20">
      {/* Logo */}
      <div className="flex items-center gap-2 text-2xl font-bold">
        <span className="text-purple-600">Task</span>{" "}
        <span className="text-gray-700">Manager</span>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-lg mx-8">
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition shadow-sm">
          🔍
        </button>
        <button className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition shadow-sm">
          🔔
        </button>
        <button className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition shadow-sm">
          📅
        </button>
        <span className="text-sm text-gray-600 text-right">
          <div className="font-medium">{dateTime.toDateString()}</div>
          <div className="text-blue-600">{dateTime.toLocaleTimeString()}</div>
        </span>
      </div>
    </header>
  );
}

export default TodoNavbar;