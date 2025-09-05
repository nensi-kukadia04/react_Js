import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import StudentSideBar from "./Components/StudentSidebar";
import StudentForm from "./Components/StudentForm";

export default function App() {
  const [isOffline, setIsOffline] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme => (theme === "light" ? 'dark' : 'light'))
  }

  if (isOffline) {
    return (
      <>
        <Navbar theme={theme} setTheme={toggleTheme} />
        <div className="text-center mt-5 text-3xl">
          <h1>You Are Offline</h1>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="w-full h-screen" style={{ background: theme === "light" ? "white" : "black" }}>
        <Navbar theme={theme} setTheme={toggleTheme} />
        <div className="flex h-screen">
          {/* Sidebar */}
          <StudentSideBar />

          {/* Student Data */}
          <div className="flex-1 p-6 overflow-auto bg-gray-50">
            <StudentForm />
          </div>
        </div>
      </div>
    </>
  )
}
