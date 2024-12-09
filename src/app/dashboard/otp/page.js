"use client";

import { useEffect, useState } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import LoadingSpinner from "@/components/LoadinSpinner";
import { BiCopy, BiTrash } from "react-icons/bi";
import { useToast } from "@/context/ToastContext";
import MiniLoadingSpinner from "@/components/MiniLoadingSpiner";

export default function OTPPage() {
  const [otps, setOtps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { addToast } = useToast();

  // Fetch OTPs from the backend API on page load or page change
  useEffect(() => {
    const fetchOtps = async () => {
      try {
        const response = await fetch(`/api/otp?page=${currentPage}&limit=10`);
        const data = await response.json();
        if (data.otps) {
          setOtps(data.otps);
          setTotalPages(data.totalPages); // Set total pages for pagination
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
  }, [currentPage]);

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
        addToast("OTP Deleted Successfully!", "success", 3000);
      } else {
        addToast("Failed to Delete OTP!", "error", 3000);
      }
    } catch (error) {
      console.error("Error deleting OTP:", error);
    }
  };

  // Copy OTP to clipboard
  const handleCopy = (otp) => {
    navigator.clipboard.writeText(otp);
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

  if (loading) return <MiniLoadingSpinner />;
  if (error) return addToast(`${error.message}`, "error", 3000);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent invalid pages
    setCurrentPage(newPage);
  };

  return (
    <div className="px-0">
      <h2 className="text-2xl font-bold tracking-wide my-4">OTP List</h2>

      {/* Scrollable table */}
      <div className="overflow-x-auto">
        <table className="min-w-full py-2 table-auto border-collapse bg-white shadow rounded">
          <thead className="py-2">
            <div className="font-bold text-sm md:text-xl grid grid-cols-[1fr_1.5fr_0.8fr] gap-2  border-b  px-2 w-full py-4">
              <th className="place-self-start">OTP</th>
              <th className="place-self-start">Time Added</th>
              <th className="place-self-start">Actions</th>
            </div>
          </thead>
          <tbody className="w-full">
            {otps.length === 0 ? (
              <p className="font-semibold text-xl tracking-wide  flex items-center justify-center py-6 w-full">
                <span>No OTP code available☠️☠️☠️</span>
              </p>
            ) : (
              otps.map((otp) => (
                <tr key={otp.$id} className="hover:bg-gray-100/40 grid grid-cols-[1fr_1.5fr_0.8fr] gap-2 items-center border-b px-1 py-2">
                  <td className=" ">
                    <button
                      onClick={() => handleCopy(otp.otp)}
                      className="place-self-start group py-2 px-3 md:px-6  bg-gray-200 rounded text-black font-bold tracking-wider font-mono text-base md:text-xl flex items-center gap-2"
                    >
                      <span>{otp.otp}</span>
                      <BiCopy className="invisible group-hover:visible" />
                    </button>
                  </td>
                  <td className="place-self-start text-xs py-2 sm:text-sm font-bold md:text-base">
                    {formatTime(otp.$createdAt)}
                  </td>
                  <td className="place-self-start  md:px-4 flex space-x-2 items-center justify-center">
                    <button
                      onClick={() => handleCopy(otp.otp)}
                      className="bg-blue-500 text-white px-2 md:px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      <BiCopy />
                    </button>
                    <button
                      onClick={() => handleDelete(otp.$id)}
                      className="bg-red-500 text-white px-2 md:px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      <BiTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-blue-600 text-white rounded-full disabled:text-gray-300 tracking-wide font-mono disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <span className="font-mono tracking-wide font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-blue-600 text-white rounded-full disabled:text-gray-300 tracking-wide font-mono disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
