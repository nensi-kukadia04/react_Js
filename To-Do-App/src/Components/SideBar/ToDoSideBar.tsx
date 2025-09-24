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
        style={{ borderColor: theme + "66" }} // lighter border using opacity
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
        {[
          { icon: "📊", label: "Dashboard" },
          { icon: "❗", label: "Vital Task" },
          { icon: "✅", label: "My Task", active: true },
          { icon: "📂", label: "Task Categories" },
          { icon: "⚙️", label: "Settings" },
          { icon: "❓", label: "Help" },
        ].map(({ icon, label, active }) => (
          <a
            key={label}
            href="#"
            className={`flex items-center gap-3 px-6 py-3 rounded-r-full transition-all duration-200 ${
              active
                ? "bg-white text-gray-900 shadow-sm"
                : "hover:bg-white/10"
            }`}
            style={
              active
                ? { borderLeft: `4px solid ${theme}`, color: theme }
                : {}
            }
          >
            <span className="text-lg">{icon}</span> {label}
          </a>
        ))}
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