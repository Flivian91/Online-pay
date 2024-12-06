"use client";
import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa6";
import Overlay from "./Overlay";
import UserModel from "./UserModel";

function UserData({ data, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const { email, status, $id } = data;

  return (
    <div>
      {isOpen && <Overlay onClose={() => setIsOpen(false)} />}
      {isOpen && <UserModel data={data} onClose={() => setIsOpen(false)} />}
      <div className="grid grid-cols-[0.1fr_2fr_0.5fr_1fr] gap-2 cursor-pointer hover:bg-gray-200/50 transition-all duration-300 py-2 md:px-2 hover:rounded hover:shadow">
        <div className="flex items-center gap-2">
          <span className="font-mono text-base md:text-lg font-bold">1</span>
        </div>
        <h2
          onClick={() => setIsOpen(true)}
          className="md:text-lg text-sm font-semibold tracking-wide hover:underline"
        >
          {email}
        </h2>
        <div className="md:text-lg text-sm font-semibold flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-green-600"></div>
          <span>{status ? "Done" : "Pending"}</span>
        </div>
        <div className=" flex items-center gap-4 transition-all duration-300 justify-center">
          <button
            onClick={() => setIsOpen(true)}
            title="View"
            className="text-xl p-1 rounded hover:bg-pink-300"
          >
            <FaEye />
          </button>
          <button
            onClick={() => onDelete($id)}
            title="Delete"
            className="text-xl p-1 rounded hover:bg-red-500 hover:text-white"
          >
            <FaRegTrashCan />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserData;
