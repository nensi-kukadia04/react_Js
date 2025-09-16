import TodoNavbar from "./Components/Header/TodoNavbar";
import TodoSidebar from "./Components/SideBar/ToDoSideBar";
import TaskManagerPage from "./Components/TaskManager/TaskManagerPage";
import TodoFooter from "./Components/Footer/TodoFooter";

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <TodoSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64">
        <TodoNavbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="rounded-xl shadow-md p-6">
            <TaskManagerPage/>
          </div>
        </main>
        <TodoFooter/>
      </div>
    </div>
  );
}

export default App;
