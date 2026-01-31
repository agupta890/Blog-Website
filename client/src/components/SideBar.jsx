import { useState } from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-900 text-white">
        <h2 className="text-lg font-semibold">Blog App</h2>

        <button onClick={() => setIsOpen(true)}>
          ☰
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-900 text-white p-5 z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Close Button (Mobile) */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setIsOpen(false)}>✖</button>
        </div>

        <h2 className="text-xl font-bold mb-8">Dashboard</h2>

        <ul className="space-y-4">

          <li>
            <Link 
              to="/blog" 
              onClick={() => setIsOpen(false)}
              className="block p-2 rounded hover:bg-gray-700"
            >
              ➕ Create Blog
            </Link>
          </li>

          <li>
            <Link 
              to="/blogs" 
              onClick={() => setIsOpen(false)}
              className="block p-2 rounded hover:bg-gray-700"
            >
              📚 All Blogs
            </Link>
          </li>

          <li>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block p-2 rounded hover:bg-gray-700"
            >
              📞 Contact
            </Link>
          </li>

          <li>
            <Link 
              to="/profile" 
              onClick={() => setIsOpen(false)}
              className="block p-2 rounded hover:bg-gray-700"
            >
              👤 User
            </Link>
          </li>

        </ul>
      </div>
    </>
  );
};


