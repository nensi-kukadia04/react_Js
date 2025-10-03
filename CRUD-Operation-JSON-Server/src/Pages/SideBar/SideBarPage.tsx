import { PlusCircle, List, Settings, User, LogOut } from "lucide-react";

export default function SideBarPage() {
  return (
    <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col sticky top-16 h-[calc(100vh-4rem)]">
      
      {/* Profile Section */}
      <div className="flex flex-col items-center py-6 border-b border-gray-300">
        <img
          src="https://i.pravatar.cc/100"
          alt="User Avatar"
          className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-sm"
        />
        <h3 className="mt-3 text-gray-800 font-semibold">John Doe</h3>
        <p className="text-sm text-gray-500">Admin</p>
      </div>

      {/* Management Section */}
      <div className="mt-4">
        <h4 className="px-6 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Management
        </h4>
        <ul className="space-y-2 px-2">
          <li>
            <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all text-sm font-medium">
              <PlusCircle size={20} />
              <span>Add Product</span>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-white bg-blue-600 shadow-md text-sm font-medium">
              <List size={20} />
              <span>View Products</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Account Section */}
      <div className="mt-6">
        <h4 className="px-6 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Account
        </h4>
        <ul className="space-y-2 px-2">
          <li>
            <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all text-sm font-medium">
              <User size={20} />
              <span>Profile</span>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all text-sm font-medium">
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Bottom Logout */}
      <div className="mt-auto px-4 py-4 border-t">
        <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-all text-sm font-medium">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
