import { useEffect, useState } from "react";

function TaskManagerPage() {
    type priority = "Extreme" | "Moderate" | "Low";

    type ToDo = {
        addTask: string;
        status: "pending" | "completed";
        priority: priority;
    };

    const [addTask, setAddTask] = useState<string>("");
    const [displayTask, setDisplayTask] = useState<ToDo[]>(JSON.parse(localStorage.getItem("tasks") || "[]"));
    const [priority, setPriority] = useState<priority>("Moderate");
    const [editId, setEditId] = useState< number>();

    // useEffect(() => {
    //     const data = localStorage.getItem("Tasks");
    //     if (data !== null) {
    //         setDisplayTask(JSON.parse(data));
    //     }
    //     console.log(data)
    // }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(displayTask));
    }, [displayTask]);

    const priorities: priority[] = ["Extreme", "Moderate", "Low"];

    const changeStatus = (i: number) => {
        const showTasks = [...displayTask];
        showTasks[i].status =
            showTasks[i].status === "pending" ? "completed" : "pending";
        setDisplayTask(showTasks);
    };

    const pendingTasks = displayTask.filter((task) => task.status === "pending");
    const completedTasks = displayTask.filter((task) => task.status === "completed");

    const submitTask = (event: any) => {
        event.preventDefault();

        if (!addTask.trim()) return;

        const newTask: ToDo = {
            addTask: addTask,
            status: "pending",
            priority: priority,
        };

        if (editId === undefined) {
            const addNewTasks = [...displayTask, newTask];
            setDisplayTask(addNewTasks);
            // console.log(addNewTasks);
        }
        else {
            const data = displayTask.map((task, index) => (editId === index) ? newTask : task)
            setDisplayTask(data);
        }

        setAddTask("");
        setPriority("Moderate");
        setEditId(undefined);
    };

    const deleteTasks = (i: number) => {
        const data = displayTask.filter((_, index) => i !== index);
        setDisplayTask(data);
    };

    const editTask = (i: number) => {
        setEditId(i);

        setAddTask(displayTask[i].addTask);
        setPriority(displayTask[i].priority);
    };

    return (
        <div className="min-h-screen">
            {/* Add / Update Task */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    ➕ {editId === undefined ? "Add New Task" : "Update Task"}
                </h2>
                <form onSubmit={submitTask}>
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                        <input
                            type="text"
                            placeholder="Write your task here..."
                            value={addTask}
                            onChange={(e) => setAddTask(e.target.value)}
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm bg-gray-50"
                        />

                        <div className="w-full sm:w-48">
                            <select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value as priority)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm bg-gray-50"
                            >
                                {priorities.map((data, index) => (
                                    <option key={index} value={data}>
                                        {data}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className={`${editId === undefined ? "bg-purple-600 hover:bg-purple-700" : "bg-yellow-500 hover:bg-yellow-600"
                                } text-white px-6 py-2 rounded-md transition-colors text-sm font-medium`}
                        >
                            {editId === undefined ? "Add Task" : "Update Task"}
                        </button>
                    </div>
                </form>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pending Tasks */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        🕗 Pending Tasks
                    </h3>
                    {pendingTasks.length === 0 ? (
                        <p className="text-sm text-gray-500 italic">
                            No pending tasks available.
                        </p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto border border-collapse border-gray-300 rounded-lg">
                                <thead className="bg-purple-100 text-gray-700 text-sm">
                                    <tr>
                                        <th className="px-4 py-2 text-left border-b border-gray-300">
                                            Mark
                                        </th>
                                        <th className="px-4 py-2 text-left border-b border-gray-300">
                                            Task
                                        </th>
                                        <th className="px-4 py-2 text-left border-b border-gray-300">
                                            Priority
                                        </th>
                                        <th className="px-4 py-2 text-center border-b border-gray-300">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pendingTasks.map((tasks, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className="border-t hover:bg-gray-50 transition"
                                            >
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    <input
                                                        type="checkbox"
                                                        className="rounded-full"
                                                        onChange={() => changeStatus(displayTask.indexOf(tasks))}
                                                        checked={false}
                                                    />
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {tasks.addTask}
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-semibold 
                                                            ${tasks.priority === "Extreme"
                                                                ? "bg-red-100 text-red-700"
                                                                : tasks.priority === "Moderate"
                                                                    ? "bg-yellow-100 text-yellow-700"
                                                                    : "bg-green-100 text-green-700"
                                                            }`}
                                                    >
                                                        {tasks.priority}
                                                    </span>
                                                </td>
                                                <td className="py-2 border-b border-gray-200">
                                                    <div className="flex justify-center gap-2">
                                                        {/* Edit */}
                                                        <button
                                                            onClick={() => editTask(displayTask.indexOf(tasks))}
                                                            className="flex items-center justify-center w-6 h-6 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-colors"
                                                        >
                                                            ✏️
                                                        </button>
                                                        {/* Delete */}
                                                        <button
                                                            onClick={() => deleteTasks(displayTask.indexOf(tasks))}
                                                            className="flex items-center justify-center w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                                                        >
                                                            ❌
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Completed Tasks */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        ✅ Completed Tasks
                    </h3>
                    {completedTasks.length === 0 ? (
                        <p className="text-sm text-gray-500 italic">
                            No completed tasks yet.
                        </p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto border border-collapse border-gray-200 rounded-lg">
                                <thead className="bg-purple-100 text-gray-700 text-sm">
                                    <tr>
                                        <th className="px-4 py-2 text-left border-b border-gray-300">
                                            Unmark
                                        </th>
                                        <th className="px-4 py-2 text-left border-b border-gray-300">
                                            Task
                                        </th>
                                        <th className="px-4 py-2 text-center border-b border-gray-300">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {completedTasks.map((tasks, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className="hover:bg-gray-50 transition"
                                            >
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    <input
                                                        type="checkbox"
                                                        className="rounded-full"
                                                        checked
                                                        onChange={() => changeStatus(displayTask.indexOf(tasks))}
                                                    />
                                                </td>
                                                <td className="px-4 py-2 line-through text-gray-600 border-b border-gray-200">
                                                    {tasks.addTask}
                                                </td>
                                                <td className="px-4 py-2 gap-2 flex justify-center border-b border-gray-200">
                                                    <button
                                                        onClick={() => deleteTasks(displayTask.indexOf(tasks))}
                                                        className="flex items-center justify-center w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
                                                    >
                                                        ❌
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TaskManagerPage;
