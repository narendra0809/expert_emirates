import { useState, useEffect } from "react";
import DashboardHeader from "./components/DashboardHeader";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import api from "../axios/api";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [plans, setPlans] = useState();

  const fetchPlans = async () => {
    try {
      const response = await api.get("/plans");
      if (response.data.length !== 0) {
        const plansData = convertPlansToDisplay(response.data);
        setPlans(plansData);
        return;
      }
      setPlans({});
    } catch (error) {
      console.log(error);
    }
  };

  const convertPlansToDisplay = (data) => {
    const convertedPlans = {
      Forex: [],
      Gold: [],
      "Crypto Currency": [],
      "Portfolio Managment": [],
    };
    data.forEach((plan) => {
      plan.features = JSON.parse(plan.features);
      convertedPlans[plan.category].push(plan);
    });
    return convertedPlans;
  };
  useEffect(() => {
    fetchPlans();
  }, []);
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
          <Outlet context={{ plans: plans }} />
        </div>
      </div>
    </div>
  );
}
