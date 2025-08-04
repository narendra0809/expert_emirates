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

const AdminDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [users, setUsers] = useState([]);
  const [userStats, setUserStats] = useState([
    {
      icon: totalUserIcon,
      value: 0,
      name: "Total Users",
      fill: "#E56A54",
    },
    {
      icon: activeUserIcon,
      value: 0,
      name: "Total Active User",
      fill: "#DEB250",
    },
    {
      icon: totalAmountIcon,
      value: 0,
      name: "Total Amount",
      fill: "#EA4D2D",
    },
  ]);
  const [usersPerMonth, setUsersPerMonth] = useState([]);

  const fetchTransactions = async () => {
    try {
      const res = await api.get("/admin/transactions");
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await api.get("/admin/users");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserStats = () => {
    let totalUsers = 0,
      activeUsers = 0,
      totalAmount = 0;
    const usersPerMonth = [
      { name: "Jan", value: 0 },
      { name: "Feb", value: 0 },
      { name: "Mar", value: 0 },
      { name: "Apr", value: 0 },
      { name: "May", value: 0 },
      { name: "Jun", value: 0 },
      { name: "Jul", value: 0 },
      { name: "Aug", value: 0 },
      { name: "Sep", value: 0 },
      { name: "Oct", value: 0 },
      { name: "Nov", value: 0 },
      { name: "Dec", value: 0 },
    ];
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      totalUsers += user.role !== "admin" ? 1 : 0;
      const month = new Date(user.created_at).getMonth();
      usersPerMonth.forEach((obj, idx) => {
        if (idx === month) {
          obj.value += 1;
        }
      });
      const userTransactions = transactions.filter(
        ({ user_id }) => user_id === user.id
      );
      let activePlanFound = false;
      for (let i = 0; i < userTransactions.length; i++) {
        if (!activePlanFound && userTransactions[i].status === "approved") {
          activeUsers += 1;
          activePlanFound = true;
        }
        if (userTransactions[i].status === "approved") {
          totalAmount += userTransactions[i].plan.price;
        }
      }
    }
    setUserStats([
      {
        icon: totalUserIcon,
        value: totalUsers,
        name: "Total Users",
        fill: "#E56A54",
      },
      {
        icon: activeUserIcon,
        value: activeUsers,
        name: "Total Active User",
        fill: "#DEB250",
      },
      {
        icon: totalAmountIcon,
        value: totalAmount,
        name: "Total Amount",
        fill: "#EA4D2D",
      },
    ]);
    setUsersPerMonth(usersPerMonth);
  };

  useEffect(() => {
    fetchTransactions();
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      getUserStats();
    }
  }, [transactions, users]);

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
        {userStats.map((item, idx) => (
          <Card
            key={idx}
            number={item.value}
            img={item.icon}
            text={item.name}
            className="flex-1 min-w-0"
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
            <StatsChart userStats={userStats} />
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
            <StatusByProcessChart userStats={userStats} />
          </div>
        </section>
      </div>

      {/* Monthly Bar Chart - Responsive Container */}
      <div className="mt-6 lg:mt-10 bg-[#0A090D] sm:p-3 lg:p-4 rounded-xl shadow-md w-full overflow-x-auto">
        <MonthlyBarChart usersPerMonth={usersPerMonth} />
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
