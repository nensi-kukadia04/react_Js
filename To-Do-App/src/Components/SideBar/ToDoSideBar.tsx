type Props = {
  theme: string;
};

function TodoSidebar({ theme }: Props) {
  return (
    <aside
      className="w-64 h-screen text-white flex flex-col fixed shadow-lg"
      style={{ backgroundColor: theme }}
    >
      {/* Profile */}
      <div
        className="flex flex-col items-center text-center py-8 border-b"
        style={{ borderColor: theme }} 
      >
        <img
          src="https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.png"
          alt="user"
          className="w-20 h-20 rounded-full border-4 border-white shadow-md"
        />
        <h2 className="mt-3 font-semibold text-lg">Nensi Kukadia</h2>
        <p className="text-sm text-gray-200">kukadiyanensi04@gmail.com</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-6 space-y-1">
        {/* Dashboard */}
        <a
          href="#"
          className="flex items-center gap-3 px-6 py-3 rounded-r-full transition-all duration-200 hover:bg-white/10"
        >
          <span className="text-lg">📊</span> Dashboard
        </a>

        {/* Vital Task */}
        <a
          href="#"
          className="flex items-center gap-3 px-6 py-3 rounded-r-full transition-all duration-200 hover:bg-white/10"
        >
          <span className="text-lg">❗</span> Vital Task
        </a>

        {/* My Task (active) */}
        <a
          href="#"
          className="flex items-center gap-3 px-6 py-3 rounded-r-full transition-all duration-200 bg-white text-gray-900 shadow-sm"
          style={{ borderLeft: `4px solid ${theme}`, color: theme }}
        >
          <span className="text-lg">✅</span> My Task
        </a>

        {/* Task Categories */}
        <a
          href="#"
          className="flex items-center gap-3 px-6 py-3 rounded-r-full transition-all duration-200 hover:bg-white/10"
        >
          <span className="text-lg">📂</span> Task Categories
        </a>

        {/* Settings */}
        <a
          href="#"
          className="flex items-center gap-3 px-6 py-3 rounded-r-full transition-all duration-200 hover:bg-white/10"
        >
          <span className="text-lg">⚙️</span> Settings
        </a>

        {/* Help */}
        <a
          href="#"
          className="flex items-center gap-3 px-6 py-3 rounded-r-full transition-all duration-200 hover:bg-white/10"
        >
          <span className="text-lg">❓</span> Help
        </a>
      </nav>

      {/* Logout */}
      <div className="mt-auto mb-6 px-6">
        <a
          href="#"
          className="flex items-center gap-3 py-3 px-4 rounded-lg transition text-sm font-medium"
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          ↩️ Logout
        </a>
      </div>
    </aside>
  );
}

export default TodoSidebar;