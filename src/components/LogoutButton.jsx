"use client";

import { useToast } from "@/context/ToastContext";
import { account } from "@/lib/appwriteClient";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const { addToast } = useToast();

  const handleLogout = async () => {
    try {
      // Delete the current session
      await account.deleteSession("current");
      addToast("Logout successful!", "success", 3000);

      // Redirect to the login page
      router.push("/admin");
    } catch (error) {
      console.log(`Logout failed: ${error.message}`);
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
