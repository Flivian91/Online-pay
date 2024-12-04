"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import UserData from "./UserData";
import { supabase } from "@/lib/supabaseClient";
import LoadingSpinner from "./LoadinSpinner";
import { toast } from "react-toastify";
function UsersDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    const { data, error } = await supabase.from("clients").select("*");

    if (error) {
      setError(error.message);
    } else {
      setData(data);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return toast.error(error);

  async function handleDelete(clientID) {
    const { error } = await supabase
      .from("clients")
      .delete()
      .eq("id", clientID);
    if (error) {
      toast.error(error.message);
    } else {
      fetchData();
      toast.success("Client Data Deleted Successfully");
    }
  }

  return (
    <div className="flex flex-col gap-2 px-3 border rounded shadow  min-w-full overflow-hidden ">
      <div>
        <Header />
        <div className="flex flex-col divide-y divide-gray-300 py-3 ">
          {data.map((item) => (
            <UserData key={item.id} data={item} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UsersDisplay;
