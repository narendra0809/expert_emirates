import { useState } from "react";

export default function TransactionHistory() {
  const [activeFilter, setActiveFilter] = useState("All");
  const dummyData = [
    {
      id: 4567,
      name: "Jayvion Simon",
      email: "nannie.abernathy70@yahoo.com",
      amount: "$1000",
      method: "365-374-4961",
      created: "$1000",
      action: "Lueilwitz and Sons",
      status: "Active",
    },
    {
      id: 4568,
      name: "Lucien Obrien",
      email: "ashlynn.ohara62@gmail.com",
      amount: "$1900",
      method: "904-986-2836",
      created: "$1900",
      action: "Gleichner, Mueller and Tromp",
      status: "Pending",
    },
    {
      id: 4569,
      name: "Deja Brady",
      email: "milo.farrell@hotmail.com",
      amount: "$1200",
      method: "399-757-9909",
      created: "$1200",
      action: "Nikolaus – Leuschke",
      status: "Banned",
    },
    {
      id: 4570,
      name: "Harrison Stein",
      email: "violet.strake86@yahoo.com",
      amount: "$500",
      method: "692-767-2903",
      created: "$500",
      action: "Hegmann, Kreiger and Bayer",
      status: "Rejected",
    },
    {
      id: 4571,
      name: "Reece Chung",
      email: "letha.lubowitz24@yahoo.com",
      amount: "$1600",
      method: "990-588-5716",
      created: "$1600",
      action: "Grimes Inc",
      status: "Active",
    },
  ];
  const filtered = dummyData.filter((item) => {
    return activeFilter === "All" || item.status === activeFilter;
  });

  const statusFilters = [
    { label: "All", bgColor: "bg-[#1C252E]", textColor: "text-[#FFFFFF]" },
    { label: "Active", bgColor: "bg-[#22C55E29]", textColor: "text-[#118D57]" },
    {
      label: "Pending",
      bgColor: "bg-[#FFAB0029]",
      textColor: "text-[#B76E00]",
    },
    { label: "Banned", bgColor: "bg-[#FF563029]", textColor: "text-[#B71D18]" },
    {
      label: "Rejected",
      bgColor: "bg-[#919EAB29]",
      textColor: "text-[#637381]",
    },
  ];

  return (
    <div className="mx-4 sm:mx-16 mt-4 sm:mt-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
        <h2 className="text-lg sm:text-2xl font-bold text-white w-full sm:w-auto text-center sm:text-left">
          Transaction History
        </h2>
        <button className="bg-[#121117] hover:bg-[#ffffff1f] text-white text-sm font-medium px-4 py-2 rounded-lg border border-[#ffffff22] w-full sm:w-auto">
          + Add Payment
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-[#121117] rounded-xl shadow-md p-3 sm:p-6 border border-[#1c1c24]">
        <div className="mb-4 sm:mb-6 overflow-x-auto hide-scrollbar">
          <div className="flex w-max gap-2 mb-2">
            {statusFilters.map(({ label, bgColor, textColor }) => (
              <button
                key={label}
                onClick={() => setActiveFilter(label)}
                className={`px-3 sm:px-4 py-1.5 rounded-lg ${
                  activeFilter === label
                    ? "bg-[#1E1D24] text-white"
                    : "bg-[#1C1A22] text-gray-300"
                }`}
              >
                <span>{label}</span>
                <span
                  className={`ml-1 ${bgColor} ${textColor} px-2 py-0.5 rounded-md text-xs`}
                >
                  {
                    dummyData.filter(
                      (item) => label === "All" || item.status === label
                    ).length
                  }
                </span>
                <div
                  hidden={activeFilter != label}
                  className="w-full mt-2 h-[1px] bg-gray-600"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="sm:hidden space-y-3">
          {filtered.map((row, i) => (
            <div
              key={row.id}
              className="bg-[#1A1920] p-4 rounded-lg border border-[#26242f]"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/40?img=${i + 1}`}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-white font-medium">{row.name}</p>
                    <p className="text-xs text-gray-400">{row.email}</p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    row.status === "Active"
                      ? "bg-[#22C55E29] text-[#118D57]"
                      : row.status === "Pending"
                      ? "bg-[#FFAB0029] text-[#B76E00]"
                      : row.status === "Banned"
                      ? "bg-[#FF563029] text-[#B71D18]"
                      : "bg-[#919EAB29] text-[#637381]"
                  }`}
                >
                  {row.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-400">Amount</p>
                  <p className="text-white">{row.amount}</p>
                </div>
                <div>
                  <p className="text-gray-400">Method</p>
                  <p className="text-white">{row.method}</p>
                </div>
                <div>
                  <p className="text-gray-400">Date</p>
                  <p className="text-white">{row.created}</p>
                </div>
                <div>
                  <p className="text-gray-400">Action</p>
                  <p className="text-white">{row.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto hide-scrollbar">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#1E1D24] text-gray-400">
              <tr>
                <th className="px-4 py-3 rounded-l-lg">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3 hidden md:table-cell">Method</th>
                <th className="px-4 py-3 hidden lg:table-cell">Date</th>
                <th className="px-4 py-3 hidden xl:table-cell">Action</th>
                <th className="px-4 py-3 rounded-r-lg">Status</th>
              </tr>
            </thead>
            <tbody className="text-[#919EAB]">
              {filtered.map((row, i) => (
                <tr
                  key={row.id}
                  className="border-b border-[#26242f] hover:bg-[#1a1a20]"
                >
                  <td className="px-4 py-3">#{row.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://i.pravatar.cc/40?img=${i + 1}`}
                        alt="avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-white">{row.name}</p>
                        <p className="text-xs text-gray-400">{row.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{row.amount}</td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    {row.method}
                  </td>
                  <td className="px-4 py-3 hidden lg:table-cell">
                    {row.created}
                  </td>
                  <td className="px-4 py-3 hidden xl:table-cell">
                    {row.action}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        row.status === "Active"
                          ? "bg-[#22C55E29] text-[#118D57]"
                          : row.status === "Pending"
                          ? "bg-[#FFAB0029] text-[#B76E00]"
                          : row.status === "Banned"
                          ? "bg-[#FF563029] text-[#B71D18]"
                          : "bg-[#919EAB29] text-[#637381]"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-gray-400">
          <p className="mb-3 sm:mb-0">
            Showing 1 to {filtered.length} of {filtered.length} entries
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-[#2c2a33] rounded-lg hover:bg-[#1e1d24]">
              Previous
            </button>
            <button className="px-3 py-1.5 bg-[#1e1d24] rounded-lg text-white">
              1
            </button>
            <button className="px-3 py-1.5 border border-[#2c2a33] rounded-lg hover:bg-[#1e1d24]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
