import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children, userName }) {
  return (
    <div className="h-screen w-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHeader />
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Main content (passed as children) */}
          {children}
        </main>
      </div>
    </div>
  );
}
