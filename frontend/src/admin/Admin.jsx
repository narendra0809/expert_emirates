import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/components/Sidebar";
import DashboardHeader from "../dashboard/components/DashboardHeader";

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setSidebarOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-black relative overflow-hidden">
      {/* Sidebar - Always visible on desktop, fixed position */}
      <div
        className={`${
          isMobile ? (sidebarOpen ? "fixed inset-0 z-40" : "hidden") : "block"
        }`}
      >
        <Sidebar
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          mobileOpen={sidebarOpen}
          setMobileOpen={setSidebarOpen}
          isMobile={isMobile}
          isAdmin={true}
        />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content Area - Scrollable */}
      <div
        className={`flex-1 flex flex-col h-screen overflow-y-auto ${
          !isMobile && isCollapsed ? "ml-[70px]" : "ml-0 md:ml-52"
        }`}
      >
        <DashboardHeader
          onMenuClick={() => setSidebarOpen(true)}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
          sidebarOpen={sidebarOpen}
        />
        <div className="flex-1 overflow-y-auto p-3 md:ml-16 md:pr-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
