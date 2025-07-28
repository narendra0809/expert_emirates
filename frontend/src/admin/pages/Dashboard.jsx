import React, { useContext } from "react";
import LatestTransactions from "./LatestTransactions";
import Card from "../components/Card";
import StatsChart from "../components/StatsChart";
import MonthlyBarChart from "../components/MonthlyBarChart";
import StatusByProcessChart from "../components/StatusByProcessChart";

import totalUserIcon from "../assets/icon1.png";
import activeUserIcon from "../assets/icon2.png";
import totalAmountIcon from "../assets/icon3.png";
import { SidebarContext } from "../context/SidebarContext";

const statData = [
  { icon: totalUserIcon, value: "100", title: "Total Users" },
  { icon: activeUserIcon, value: "20", title: "Total Active User" },
  { icon: totalAmountIcon, value: "160,000", title: "Total Amount" },
];

const Dashboard = () => {
  const {isOpen}=useContext(SidebarContext);
  return (
    <div className={`${isOpen?"left-20":"left-0"} min-h-screen bg-black  py-6 text-white font-sans`}>
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 tracking-wide select-none text-start">
        Admin Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="flex items-center justify-start flex-wrap gap-6 mb-10">
        {statData.map((item, idx) => (
          <Card key={idx} number={item.value} img={item.icon} text={item.title} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <section aria-labelledby="bar-chart-title" className="bg-[#0A090D] p-4 rounded-xl shadow-md">
          {/* <h2
            id="bar-chart-title"
            className="text-lg sm:text-xl font-semibold mb-4 tracking-wide select-none text-center"
          >
            Monthly Sales
          </h2> */}
          <div className="w-full h-64 sm:h-72 md:h-80">
            <StatsChart />
          </div>
        </section>

        {/* Donut Chart */}
        <section aria-labelledby="donut-chart-title" className="bg-[#0A090D] p-4 rounded-xl shadow-md">
          <h2
            id="donut-chart-title"
            className="text-lg sm:text-xl font-semibold mb-4 tracking-wide select-none text-center"
          >
            Status By Process
          </h2>
          <div className="w-full h-64 sm:h-72 md:h-80">
            <StatusByProcessChart />
          </div>
        </section>
      </div>

      {/* Monthly Bar Chart */}
      <div className="mt-10 bg-[#0A090D] p-4 rounded-xl shadow-md w-full overflow-x-auto">
        <MonthlyBarChart />
      </div>

      {/* Latest Transactions */}
      <div className="mt-10">
        <LatestTransactions />
      </div>
    </div>
  );
};

export default Dashboard;