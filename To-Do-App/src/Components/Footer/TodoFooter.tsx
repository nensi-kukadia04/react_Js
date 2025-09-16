function TodoFooter() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 shadow-sm py-3 px-6 flex items-center justify-between text-sm text-gray-600 mt-6">
      {/* Left side */}
      <p>
        © {new Date().getFullYear()} <span className="font-semibold text-blue-600">Task Manager</span>. 
        All rights reserved.
      </p>

      {/* Right side */}
      <div className="flex gap-4">
        <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
        <a href="#" className="hover:text-blue-600 transition">Terms</a>
        <a href="#" className="hover:text-blue-600 transition">Support</a>
      </div>
    </footer>
  );
}

export default TodoFooter;
