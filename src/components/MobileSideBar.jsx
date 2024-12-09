import Link from "next/link";
import React, { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";
import { FaUser } from "react-icons/fa6";
import { account } from "@/lib/appwriteClient";

export default function MobileSideBar({ onOpenSidebar }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await account.get();
      setUser(user);
    };
    getUser();
  }, []);
  return (
    <aside className="w-64 flex h-screen top-0 left-0 lg:hidden bg-gradient-to-r fixed from-blue-500 to-purple-600 text-white  flex-col z-40">
      <div className="p-4 text-xl font-bold border-b border-blue-400 flex items-center justify-between">
        <h1 className="text-base font-semibold flex sm:hidden  items-center gap-2">
          <FaUser className="mb-1" />
          <span className="tracking-wide text-xl font-mono">{user?.name || "Username"} 🎊</span>
        </h1>
        <button
          onClick={() => onOpenSidebar(false)}
          className="text-3xl cursor-pointer p-2 hover:to-blue-500"
        >
          &times;
        </button>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li onClick={() => onOpenSidebar(false)}>
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded font-semibold tracking-wide text-xl hover:bg-blue-400"
            >
              Clients
            </Link>
          </li>
          <li onClick={() => onOpenSidebar(false)}>
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
