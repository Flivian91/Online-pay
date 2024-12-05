"use client";
import React, { useEffect, useState } from "react";
import LogoutButton from "./LogoutButton";
import { FaUser } from "react-icons/fa6";
import { account } from "@/lib/appwriteClient";

function DashboardHeader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await account.get();
      setUser(user);
    };

    getUser();
  }, []);
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6 gap-4">
      <h1 className="text-base font-semibold flex items-center gap-2">
        {" "}
        <FaUser className="mb-1" />
        <span className="tracking-wide font-mono">{user?.name}</span>
      </h1>
      <div className="flex-grow bg-white  px-6 py-1 w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded border border-gray-300 caret-pink-600 outline-none focus:ring-0 focus:outline-none"
        />
      </div>
      <LogoutButton />
    </header>
  );
}

export default DashboardHeader;
