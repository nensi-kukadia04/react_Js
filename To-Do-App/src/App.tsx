import { useEffect, useState } from "react";
import TodoNavbar from "./Components/Header/TodoNavbar";
import TodoSidebar from "./Components/SideBar/ToDoSideBar";
import TaskManagerPage from "./Components/TaskManager/TaskManagerPage";
import TodoFooter from "./Components/Footer/TodoFooter";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "#820eef" );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="flex min-h-screen"
      style={{ "--theme-color": theme } as any}
    >
      {/* Sidebar */}
      <TodoSidebar theme={theme}/>

      {/* Main */}
      <div className="flex-1 flex flex-col ml-64">
        <TodoNavbar theme={theme} />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="rounded-xl shadow-md p-6">
            <TaskManagerPage theme={theme} setTheme={setTheme} />
          </div>
        </main>
        <TodoFooter />
      </div>
    </div>
  );
}

export default App;
