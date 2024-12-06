"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "@/components/Dashboard";
import { account } from "@/lib/appwriteClient";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Try fetching the user
        await account.get();
      } catch (error) {
        // Redirect to login if not authenticated
        router.push("/admin");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="mt-2">
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
