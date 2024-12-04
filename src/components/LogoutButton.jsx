"use client";

import { account } from "@/lib/appwriteClient";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Delete the current session
      await account.deleteSession("current");
      toast.success("Logout successful!");

      // Redirect to the login page
      router.push("/admin");
    } catch (error) {
      toast.error(`Logout failed: ${error.message}`);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="py-2 px-4 bg-red-500 text-white font-bold rounded shadow hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
