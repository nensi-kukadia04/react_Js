type StudentSideBarProps = {
    theme: string;
};

function StudentSideBar({ theme }: StudentSideBarProps) {
    return (
        <div
            className={`flex h-full w-64 flex-col transition-colors duration-300 shadow-lg ${theme === "dark"
                    ? "bg-gray-950 text-gray-200 border-r border-gray-800"
                    : "bg-gray-50 text-gray-800 border-r border-gray-200"
                }`}
        >
            {/* User Info */}
            <div
                className={`flex items-center gap-4 px-6 py-8 border-b ${theme === "dark" ? "border-gray-800" : "border-gray-200"
                    }`}
            >
                <img
                    src="https://cdn-icons-png.freepik.com/512/6833/6833605.png"
                    alt="User"
                    className="w-14 h-14 rounded-full border-2 border-blue-500 shadow-md"
                />
                <div>
                    <p className="font-semibold text-base">Nensi Kukadiya</p>
                    <p className="text-xs opacity-70">Admin</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {[
                    "Dashboard",
                    "Add Students",
                    "My Courses",
                    "Assignments",
                    "Grades",
                    "Class",
                    "Messages",
                    "Profile",
                    "Settings",
                    "Help & Support",
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`flex justify-between items-center px-4 py-2 rounded-xl cursor-pointer transition ${theme === "dark"
                                ? "hover:bg-gray-800 hover:text-white"
                                : "hover:bg-blue-100 hover:text-blue-700"
                            } ${index === 0 ? "font-semibold bg-blue-500 text-white" : ""}`}
                    >
                        <span>{item}</span>
                        {item === "Messages" && (
                            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                3
                            </span>
                        )}
                    </div>
                ))}

            </nav>

            {/* Logout */}
            <div
                className={`px-6 py-4 border-t font-medium cursor-pointer transition ${theme === "dark"
                        ? "border-gray-800 hover:bg-gray-800 hover:text-red-400"
                        : "border-gray-200 hover:bg-red-50 hover:text-red-600"
                    }`}
            >
                Logout
            </div>
        </div>
    );
}

export default StudentSideBar;