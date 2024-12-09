"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import UserData from "./UserData";
import LoadingSpinner from "./LoadinSpinner";
import MiniLoadingSpinner from "./MiniLoadingSpiner";

function UsersDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentItemOffset, setCurrentItemOffset] = useState(0);

  const fetchData = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/clients?page=${page}&limit=10`);
      if (!response.ok) throw new Error("Failed to load Client Info");

      const { clients, total, totalPages, currentItemOffset } =
        await response.json();
      setData(clients);
      setTotalItems(total);
      setTotalPages(totalPages);
      setCurrentItemOffset(currentItemOffset);
    } catch (error) {
      setError("Error loading data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleDelete = async (documentId) => {
    try {
      const response = await fetch("/api/clients/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ documentId }),
      });

      if (response.ok) {
        setData(data.filter((data) => data.$id !== documentId));
        addToast("Client Deleted Successfully!", "success", 3000);
      } else {
        addToast("Failed to Delete Client!", "error", 3000);
      }
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      fetchData(newPage);
    }
  };

  if (loading) return <LoadingSpinner/>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col gap-2 px-3 border rounded shadow bg-white min-w-full overflow-hidden">
      <Header />
      <div className="flex flex-col divide-y divide-gray-300 py-3">
        {data.length === 0 ? (
          <p className="font-semibold text-xl tracking-wide text-center">
            No clients available☠️☠️☠️
          </p>
        ) : (
          data.map((item, i) => (
            <UserData
              key={item.$id}
              data={item}
              index={currentItemOffset + i + 1} // Continuous numbering
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between py-3 border-t border-gray-400/40">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 bg-blue-600 text-white rounded-full disabled:text-gray-300 tracking-wide font-mono disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="font-mono tracking-wide font-semibold">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 bg-blue-600 text-white rounded-full disabled:text-gray-300 tracking-wide font-mono disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UsersDisplay;
