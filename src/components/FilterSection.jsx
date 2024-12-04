"use client";
import React, { useEffect, useState } from "react";
import { account } from "@/lib/appwriteClient";
import LogoutButton from "./LogoutButton";

function FilterSection() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await account.get();
      setUser(user);
    };

    getUser();
  }, []);
  return (
    <div>
      {user && (
        <div className="md:hidden block py-2">
          <span className="text-lg font-semibold">
            Welcome back, {user.name}🎊
          </span>
        </div>
      )}
      <div className="flex items-center justify-between py-1 shadow md:px-3 gap-4">
        {user && (
          <div className="hidden md:block">
            <span className="text-lg font-semibold">
              Welcome back, {user.name}
            </span>
          </div>
        )}
        <div className="flex-grow flex items-center justify-center">
          <input
            type="text"
            className="border border-gray-700 w-full lg:w-1/2 bg-stone-200 px-2 py-2 font-mono rounded outline-none text-lg"
            placeholder="Search User"
          />
        </div>
        <div className="">
         <LogoutButton/>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
