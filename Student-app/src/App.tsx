import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import StudentSideBar from "./Components/StudentSideBar";
import StudentForm from "./Components/StudentForm";

export default function App() {
  const [isOffline, setIsOffline] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  if (isOffline) {
    return (
      <>
        <Navbar theme={theme} setTheme={toggleTheme} />
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            You Are Offline
          </h1>
        </div>
      </>
    );
  }

  return (
    <div className="w-full h-screen bg-white  transition-colors duration-300">
      {/* Navbar */}
      <Navbar theme={theme} setTheme={toggleTheme} />

      {/* Main Layout */}
      <div className="flex pt-16">
        {/* Sidebar */}
        <div className="w-64">
          <StudentSideBar theme={theme} />
        </div>

        {/* Student Data */}
        <div className="flex-1 p-6 overflow-auto bg-gray-200">
          <StudentForm />
        </div>
      </div>
    </div>
  );
}
