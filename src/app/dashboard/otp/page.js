"use client";

import { useEffect, useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import LoadingSpinner from "@/components/LoadinSpinner";
import { BiCopy, BiTrash } from "react-icons/bi";
import { useToast } from "@/context/ToastContext";

export default function OTPPage() {
  const [otps, setOtps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToast } = useToast();

  // Fetch OTPs from the backend API on The Initial Load
  useEffect(() => {
    const fetchOtps = async () => {
      try {
        const response = await fetch("/api/otp");
        const data = await response.json();
        if (data.otps) {
          setOtps(data.otps);
        } else {
          setError("Failed to load OTPs.");
        }
      } catch (err) {
        setError("Error fetching OTPs.");
      } finally {
        setLoading(false);
      }
    };

    fetchOtps();
  }, []);

  // Delete OTP
  const handleDelete = async (documentId) => {
    try {
      const response = await fetch("/api/otp/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ documentId }),
      });

      if (response.ok) {
        setOtps(otps.filter((otp) => otp.$id !== documentId)); // Remove OTP from UI
        addToast("OTP Deleted Successfuly!", "success", 3000);
      } else {
        addToast("Failed to Delete OTP!", "success", 3000);
      }
    } catch (error) {
      console.error("Error deleting OTP:", error);
    }
  };

  // Copy OTP to clipboard
  const handleCopy = (otp) => {
    navigator.clipboard.writeText(otp);
    // alert("OTP copied to clipboard");
    addToast("OTP copied to clipboard!", "success", 3000);
  };

  // Format date function for OTPs
  const formatTime = (date) => {
    const parsedDate = parseISO(date); // Parse the ISO string
    const timeDistance = formatDistanceToNow(parsedDate, { addSuffix: true });

    // If the OTP was created more than 1 week ago, show the actual date
    const isMoreThanWeek = new Date() - parsedDate > 7 * 24 * 60 * 60 * 1000;
    if (isMoreThanWeek) {
      return parsedDate.toLocaleDateString(); // Show actual date (localized format)
    } else {
      return timeDistance; // Show relative time (e.g., "2 minutes ago")
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return addToast(`${error.message}`, "error", 3000);

  return (
    <div className="px-2">
      <h2 className="text-2xl font-bold tracking-wide mb-4">OTP List</h2>
      {/* Scrollable table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white shadow rounded">
          <thead className="py-4">
            <tr className="font-bold text-xl">
              <th className="border-b py-4 px-4 text-left">OTP</th>
              <th className="border-b py-4 px-4 text-left">Time Added</th>
              <th className="border-b py-4 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {otps.map((otp) => (
              <tr key={otp.$id} className="hover:bg-gray-100/40">
                <td className="border-b py-2 px-4 ">
                  <button
                    onClick={() => handleCopy(otp.otp)}
                    className="group px-6 py-2 bg-gray-200 rounded text-black font-bold tracking-wider font-mono text-xl flex items-center gap-2"
                  >
                    <span>{otp.otp}</span>
                    <BiCopy className="invisible group-hover:visible" />
                  </button>
                </td>
                <td className="border-b py-2 px-4">
                  {formatTime(otp.$createdAt)}
                </td>
                <td className="border-b py-2 px-4 flex space-x-2">
                  <button
                    onClick={() => handleCopy(otp.otp)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    <BiCopy />
                  </button>
                  <button
                    onClick={() => handleDelete(otp.$id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    <BiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
