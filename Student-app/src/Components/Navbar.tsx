type NavbarProps = {
  theme: string;
  setTheme: () => void;
};

function Navbar({ theme, setTheme }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-18 z-20 border-b shadow-sm transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span
            className={`self-center text-2xl font-semibold whitespace-nowrap ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Student App
          </span>
        </a>

        {/* Right Side */}
        <div className="flex items-center gap-4 md:order-2">
          {/* Theme Toggle */}
          <button
            onClick={setTheme}
            className={`p-2 rounded-lg transition ${
              theme === "dark"
                ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            {theme === "dark" ? (
              // ☀️ Light Icon
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 
                  8a4 4 0 11-8 0 4 4 0 018 0zm-.464 
                  4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 
                  1 0 00-1.414 1.414zM17 11a1 1 0 
                  100-2h-1a1 1 0 100 2h1zM10 
                  17a1 1 0 011 1v1a1 1 0 
                  11-2 0v-1a1 1 0 011-1z"
                />
              </svg>
            ) : (
              // 🌙 Dark Icon
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 
                8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* User Profile */}
          <button
            type="button"
            className="flex text-sm rounded-full focus:ring-2 focus:ring-blue-500"
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://cdn-icons-png.freepik.com/512/6833/6833605.png"
              alt="user"
            />
          </button>
        </div>

        {/* Links */}
        <div className="hidden w-full md:flex md:w-auto md:order-1">
          <ul
            className={`flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 rounded-lg 
              ${theme === "dark" ? "bg-gray-900 md:bg-transparent" : "bg-white md:bg-transparent"}`}
          >
            {["Home", "About", "Services", "Pricing", "Contact"].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded-md transition ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-gray-800 md:hover:bg-transparent"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
