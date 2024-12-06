"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import UserData from "./UserData";
import { supabase } from "@/lib/supabaseClient";
import LoadingSpinner from "./LoadinSpinner";
function UsersDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      // const { data, error } = await supabase.from("clients").select("*");
      const response = await fetch("/api/clients");
      if (!response.ok) throw new Error("Failed to load Client Info");
      // setData(response.clients);
      const { clients } = await response.json();
      setData(clients);
    } catch (error) {}
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return console.log(error);

  async function handleDelete(documentId) {
    try {
      const response = await fetch("/api/clients/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ documentId }),
      });

      if (response.ok) {
        setData(data.filter((data) => data.$id !== documentId)); // Remove client from UI
        addToast("Client Deleted Successfuly!", "success", 3000);
      } else {
        addToast("Failed to Delete OTP!", "success", 3000);
      }
    } catch (error) {
      console.error("Error deleting OTP:", error);
    }
  }

  return (
    <div className="flex flex-col gap-2 px-3 border rounded shadow  bg-white min-w-full overflow-hidden ">
      <div>
        <Header />
        <div className="flex flex-col divide-y divide-gray-300 py-3 ">
          {data.map((item) => (
            <UserData key={item.$id} data={item} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UsersDisplay;
