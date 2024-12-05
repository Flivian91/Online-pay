"use client";

import { useEffect, useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";

export default function OTPPage() {
  const [otps, setOtps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch OTPs from the backend API
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
      } else {
        alert("Failed to delete OTP.");
      }
    } catch (error) {
      console.error("Error deleting OTP:", error);
    }
  };

  // Copy OTP to clipboard
  const handleCopy = (otp) => {
    navigator.clipboard.writeText(otp);
    alert("OTP copied to clipboard");
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

  if (loading) return <div>Loading OTPs...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">OTP List</h2>
      {/* Scrollable table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border-b py-2 px-4 text-left">OTP</th>
              <th className="border-b py-2 px-4 text-left">Time Added</th>
              <th className="border-b py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {otps.map((otp) => (
              <tr key={otp.$id}>
                <td className="border-b py-2 px-4">{otp.otp}</td>
                <td className="border-b py-2 px-4">
                  {formatTime(otp.$createdAt)}
                </td>
                <td className="border-b py-2 px-4 flex space-x-2">
                  <button
                    onClick={() => handleCopy(otp.otp)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleDelete(otp.$id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
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
