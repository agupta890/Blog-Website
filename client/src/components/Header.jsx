import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const  Header= () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const closeMenu = () => setIsOpen(false);
  // const location = useLocation();

  // ✅ Check login on refresh
  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   // setIsLoggedIn(!!user);
  // }, [location.pathname]);

  // ✅ Logout handler
  // const handleLogout = async () => {
  //   try {
  //     await fetch("http://localhost:3000/api/auth/logout", {
  //       method: "DELETE",
  //       credentials: "include",
  //     });

  //     localStorage.removeItem("user");
  //     setIsLoggedIn(false);
  //     closeMenu();
  //     window.location.href = "/login";
  //   } catch (error) {
  //     console.error("Logout failed", error);
  //   }
  // };

  return (
    <nav className="bg-zinc-900 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-white"
        >
          Gain<span className="text-blue-500">Knowledge</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-zinc-200">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/blogs" className="hover:text-blue-400 transition">Blogs</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:text-blue-400 transition">
                Login
              </Link>

              <Link to="/register">
                <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <button
             
              className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <div className="px-6 py-6 space-y-4 text-zinc-200">

            <Link
              to="/"
              onClick={closeMenu}
              className="block text-lg hover:text-blue-400 transition"
            >
              Home
            </Link>

            <Link
              to="/blogs"
              onClick={closeMenu}
              className="block text-lg hover:text-blue-400 transition"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="block text-lg hover:text-blue-400 transition"
            >
              Contact
            </Link>

            {/* Divider */}
            <div className="border-t border-zinc-700 pt-4 space-y-3">

              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="block w-full text-center py-3 rounded-lg border border-zinc-700 hover:border-blue-400 hover:text-blue-400 transition"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="block w-full text-center py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <button
                  
                  className="w-full py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              )}

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
