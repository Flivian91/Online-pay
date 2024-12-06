"use client";
import React from "react";
import EmailInput from "./EmailInput";
import { supabase } from "@/lib/supabaseClient";
import { useToast } from "@/context/ToastContext";
function UserModel({ onClose, data }) {
  const { email, password, $id, status } = data;
  const { addToast } = useToast();

  async function handleToogleStatus() {
    const status = true;
    updateStatus($id, status);
  }
  const updateStatus = async (documentId, newStatus) => {
    const response = await fetch("/api/clients/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ documentId, status: newStatus }),
    });

    const data = await response.json();
    if (response.ok) {
      addToast("Status updated Successfully", "success", 3000);
      onClose();
    } else {
      console.log("Error:", data.error);
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 mx-auto w-full md:w-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white shadow-2xl rounded px-4 py-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-center">
          <h1 className="md:text-2xl text-xl font-bold tracking-wide uppercase">
            Client Credentials
          </h1>
        </div>
        <EmailInput label="Client Email" value={email} />
        <EmailInput label="Client Password" value={password} />
        <div className="flex flex-row gap-4 items-center justify-center mt-6 transition-all duration-300">
          <button
            onClick={handleToogleStatus}
            disabled={status}
            className="px-3 bg-green-600 hover:bg-green-600/80 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-black py-2 rounded tracking-wide text-white font-bold"
          >
            {status ? "Status Updated" : "Update Status"}
          </button>
          <button
            onClick={onClose}
            className="border border-gray-400 px-3 hover:border-gray-700 tracking-wide py-2 text-base font-bold rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserModel;
