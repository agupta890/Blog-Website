import { useState } from "react";
import { Outlet } from "react-router-dom";
import {SideBar} from "./SideBar";

export const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      <SideBar open={open} setOpen={setOpen} />

      <div className="flex-1">

        {/* Top Navbar */}
        <div className="bg-white p-4 shadow flex justify-between">

          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <h2 className="font-semibold">Admin Dashboard</h2>

        </div>

        {/* Page Content */}
        <div className="p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};


