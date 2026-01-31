import { Link } from "react-router-dom";

export const SideBar = ({ open, setOpen }) => {
  return (
    <>
      {/* Overlay Mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-30 md:hidden"
          
        />
      )}

      <div
        className={`fixed md:static z-40 bg-gray-900 text-white w-64  p-5 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-8">Blog Admin</h2>

        <ul className="space-y-4" onClick={()=>setOpen(false)}>

          <Link to="/admin/create-blog">
            <li className="hover:bg-gray-700 p-2 rounded">➕ Create Blog</li>
          </Link>

          <Link to="/admin/blogs">
            <li className="hover:bg-gray-700 p-2 rounded">📚 All Blogs</li>
          </Link>

          <Link to="/admin/users">
            <li className="hover:bg-gray-700 p-2 rounded">👤 Users</li>
          </Link>

          <Link to="/admin/contact">
            <li className="hover:bg-gray-700 p-2 rounded">📩 Contact</li>
          </Link>

        </ul>
      </div>
    </>
  );
};

