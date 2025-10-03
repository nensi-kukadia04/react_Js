import { NavLink } from "react-router"; 
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Base</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/team"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              Team
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav (toggle) */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 animate-slideUp">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink to="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Home</NavLink>
              <NavLink to="/features" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Features</NavLink>
              <NavLink to="/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">About</NavLink>
              <NavLink to="/portfolio" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Portfolio</NavLink>
              <NavLink to="/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Blog</NavLink>
              <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Contact</NavLink>
              <NavLink to="/support" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Support</NavLink>
              <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
                <button className="text-left text-base font-medium text-gray-700 hover:text-blue-600">Sign In</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium text-center">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
