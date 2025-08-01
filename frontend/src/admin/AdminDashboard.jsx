import { useEffect, useState } from "react";
import totalUserIcon from "./assets/icon1.png";
import activeUserIcon from "./assets/icon2.png";
import totalAmountIcon from "./assets/icon3.png";
import Card from "./components/Card";
import MonthlyBarChart from "./components/MonthlyBarChart";
import StatsChart from "./components/StatsChart";
import StatusByProcessChart from "./components/StatusByProcessChart";
import LatestTransactions from "./pages/LatestTransactions";
import api from "../axios/api";

const statData = [
  { icon: totalUserIcon, value: "100", title: "Total Users" },
  { icon: activeUserIcon, value: "20", title: "Total Active User" },
  { icon: totalAmountIcon, value: "160,000", title: "Total Amount" },
];

const AdminDashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await api.get("/admin/transactions");
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTransactions();
  }, []);
  return (
    <div
      className={`overflow-x-hidden min-h-screen w-full bg-black text-white font-sans px-4`}
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mt-4 lg:mt-2 mb-6 lg:mb-8 tracking-wide select-none text-start">
        Admin Dashboard
      </h1>

      {/* Stats Cards - Responsive Layout */}
      <div className="flex flex-col sm:flex-row items-stretch justify-start gap-4 mb-6 lg:mb-10">
        {statData.map((item, idx) => (
          <Card
            key={idx}
            number={item.value}
            img={item.icon}
            text={item.title}
            className="flex-1 min-w-0" // Allow cards to grow and shrink properly
          />
        ))}
      </div>

      {/* Charts Section - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Bar Chart */}
        <section
          aria-labelledby="bar-chart-title"
          className="bg-[#0A090D] sm:p-3 lg:p-4 rounded-xl shadow-md"
        >
          <div className="w-full h-64 sm:h-72 lg:h-80">
            <StatsChart />
          </div>
        </section>

        {/* Donut Chart */}
        <section
          aria-labelledby="donut-chart-title"
          className="bg-[#0A090D] sm:p-3 lg:p-4 rounded-xl shadow-md"
        >
          <h2
            id="donut-chart-title"
            className="text-lg sm:text-xl font-semibold mb-3 lg:mb-4 tracking-wide select-none text-center"
          >
            Status By Process
          </h2>
          <div className="w-full h-64 sm:h-72 lg:h-80">
            <StatusByProcessChart />
          </div>
        </section>
      </div>

      {/* Monthly Bar Chart - Responsive Container */}
      <div className="mt-6 lg:mt-10 bg-[#0A090D] sm:p-3 lg:p-4 rounded-xl shadow-md w-full overflow-x-auto">
        <MonthlyBarChart />
      </div>

      {/* Latest Transactions - Scrollable on Mobile */}
      <div className="mt-6 lg:mt-10">
        <LatestTransactions
          transactions={transactions}
          fetchTransactions={fetchTransactions}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
