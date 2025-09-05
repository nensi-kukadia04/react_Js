export default function StudentSideBar() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
                {/* User Info */}
                <div className="p-5 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://cdn-icons-png.freepik.com/512/6833/6833605.png"
                            alt="User"
                            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                        />
                        <div>
                            <p className="text-sm font-medium text-gray-900">Nensi Kukadiya</p>
                            <p className="text-xs text-gray-500">Admin</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
                    <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium cursor-pointer">
                        Dashboard
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        Add Students
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        My Courses
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        Assignments
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        Grades
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        Class
                    </div>
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        <span>Messages</span>
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                            3
                        </span>
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        Theme
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        Profile
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        Settings
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        Help & Support
                    </div>
                </nav>

                {/* Logout */}
                <div className="p-4 border-t border-gray-200">
                    <div className="px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700">
                        Logout
                    </div>
                </div>
            </div>
        </div>
    );
}
