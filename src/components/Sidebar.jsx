import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-blue-400">
        Admin Dashboard
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded font-semibold tracking-wide text-xl hover:bg-blue-400"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/otp"
              className="block px-4 py-2 rounded font-semibold tracking-wide text-xl hover:bg-blue-400"
            >
              OTP
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t w-full border-blue-400 flex items-center justify-center">
        <LogoutButton />
      </div>
    </aside>
  );
}

export default Sidebar;
