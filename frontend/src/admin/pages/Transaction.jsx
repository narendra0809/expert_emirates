import { useState, useEffect } from "react";
import {
  FaSearch,
  FaDownload,
  FaFilter,
  FaTimes,
  FaEdit,
} from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Card from "../components/Card";
import totalUserIcon from "../assets/icon1.png";
import activeUserIcon from "../assets/icon2.png";
import totalAmountIcon from "../assets/icon3.png";

const generateDummyData = () => {
  const statuses = ["Active", "Pending", "Banned", "Rejected"];
  const methods = ["Credit Card", "PayPal", "Bank Transfer", "Crypto"];
  const actions = ["View", "Edit", "Delete"];

  return Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    amount: `$${(Math.random() * 1000).toFixed(2)}`,
    method: methods[Math.floor(Math.random() * methods.length)],
    created: new Date(
      Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)
    ).toLocaleDateString(),
    action: actions[Math.floor(Math.random() * actions.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
};

export default function Transaction() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [methodFilter, setMethodFilter] = useState("All");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [dummyData, setDummyData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window size for responsive behavior
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize data
  useEffect(() => {
    const data = generateDummyData();
    setDummyData(data);
    setFiltered(data);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...dummyData];

    if (search) {
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter !== "All") {
      result = result.filter((item) => item.status === statusFilter);
    }

    if (methodFilter !== "All") {
      result = result.filter((item) => item.method === methodFilter);
    }

    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    setFiltered(result);
    setCurrentPage(1);
  }, [search, statusFilter, methodFilter, dummyData, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Determine which columns to show based on screen size
  const showColumn = (column) => {
    if (windowWidth <= 768) {
      return !["id", "checkbox"].includes(column);
    }
    return true;
  };

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginatedData = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const toggleRowSelection = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map((row) => row.id));
    }
  };

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setMethodFilter("All");
    setSortConfig({ key: null, direction: "ascending" });
  };

  const statData = [
    {
      icon: totalUserIcon,
      value: dummyData.length.toString(),
      title: "Total Users",
    },
    {
      icon: activeUserIcon,
      value: dummyData.filter((u) => u.status === "Active").length.toString(),
      title: "Active Users",
    },
    {
      icon: totalAmountIcon,
      value: `$${dummyData
        .reduce(
          (sum, user) => sum + parseFloat(user.amount.replace("$", "")),
          0
        )
        .toFixed(2)}`,
      title: "Total Amount",
    },
  ];

  const statusCounts = {
    All: dummyData.length,
    Active: dummyData.filter((u) => u.status === "Active").length,
    Pending: dummyData.filter((u) => u.status === "Pending").length,
    Banned: dummyData.filter((u) => u.status === "Banned").length,
    Rejected: dummyData.filter((u) => u.status === "Rejected").length,
  };

  const methodOptions = [
    "All",
    ...new Set(dummyData.map((item) => item.method)),
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white sm:mr-10 sm:mb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Transaction</h2>
      </div>

      {/* Stats Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {statData.map((item, idx) => (
          <Card
            key={idx}
            number={item.value}
            img={item.icon}
            text={item.title}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-[#121117] rounded-xl shadow-md p-4 sm:p-6 border border-[#1c1c24] w-full overflow-hidden">
        {/* Status Filters - Horizontal Scroll on Mobile */}
        <div className="overflow-x-auto pb-2 mb-4">
          <div className="flex gap-2 text-sm w-max">
            {["All", "Active", "Pending", "Banned", "Rejected"].map((label) => (
              <button
                key={label}
                onClick={() => setStatusFilter(label)}
                className={`px-4 py-1 rounded flex items-center gap-2 ${
                  statusFilter === label
                    ? "bg-purple-600 text-white"
                    : "bg-[#1E1D24] text-gray-300"
                }`}
              >
                {label}
                <span className="bg-[#26242f] px-2 py-0.5 rounded-full text-xs">
                  {statusCounts[label]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search and Action Bar */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div className="relative w-full md:w-[400px]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email"
              className="bg-[#1e1d24] text-white pl-10 pr-4 py-3 rounded w-full border border-[#2c2a33] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-[#1e1d24] px-4 py-3 rounded border border-[#2c2a33] text-white text-sm flex items-center gap-2 hover:bg-[#2c2a33] transition"
            >
              <FaFilter className="text-base" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>

            <button className="bg-[#1e1d24] px-4 py-3 rounded border border-[#2c2a33] text-white text-sm flex items-center gap-2 hover:bg-[#2c2a33] transition">
              <FaDownload className="text-base" />
              <span>Download Excel</span>
            </button>

            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="bg-[#1e1d24] px-4 py-3 rounded border border-[#2c2a33] text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value={5}>Show 5</option>
              <option value={10}>Show 10</option>
              <option value={20}>Show 20</option>
              <option value={50}>Show 50</option>
            </select>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="bg-[#1a1a20] p-4 rounded-lg mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Payment Method
                </label>
                <select
                  value={methodFilter}
                  onChange={(e) => setMethodFilter(e.target.value)}
                  className="bg-[#1e1d24] w-full px-4 py-3 rounded border border-[#2c2a33] text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {methodOptions.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Date Range
                </label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    className="bg-[#1e1d24] px-4 py-3 rounded border border-[#2c2a33] text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <span className="flex items-center">to</span>
                  <input
                    type="date"
                    className="bg-[#1e1d24] px-4 py-3 rounded border border-[#2c2a33] text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="bg-red-600 hover:bg-red-700 px-4 py-3 rounded text-white text-sm flex items-center gap-2 transition"
                >
                  <FaTimes /> Clear All Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters */}
        <div className="text-sm text-gray-400 mb-3 flex flex-wrap items-center gap-2">
          {(search || statusFilter !== "All" || methodFilter !== "All") && (
            <>
              <span>Active filters:</span>
              {search && (
                <span className="bg-[#26242f] px-3 py-1 rounded-full flex items-center gap-1">
                  Search: {search}
                  <button
                    onClick={() => setSearch("")}
                    className="text-red-400"
                  >
                    <FaTimes size={10} />
                  </button>
                </span>
              )}
              {statusFilter !== "All" && (
                <span className="bg-[#26242f] px-3 py-1 rounded-full flex items-center gap-1">
                  Status: {statusFilter}
                  <button
                    onClick={() => setStatusFilter("All")}
                    className="text-red-400"
                  >
                    <FaTimes size={10} />
                  </button>
                </span>
              )}
              {methodFilter !== "All" && (
                <span className="bg-[#26242f] px-3 py-1 rounded-full flex items-center gap-1">
                  Method: {methodFilter}
                  <button
                    onClick={() => setMethodFilter("All")}
                    className="text-red-400"
                  >
                    <FaTimes size={10} />
                  </button>
                </span>
              )}
            </>
          )}
        </div>

        <p className="text-gray-500 text-sm mb-4">
          {filtered.length} {filtered.length === 1 ? "result" : "results"} found
          {filtered.length !== dummyData.length &&
            ` (of ${dummyData.length} total)`}
        </p>

        {/* Table with Horizontal Scroll on Mobile */}
        <div className="overflow-x-auto w-full">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-[#1E1D24] text-gray-400">
              <tr>
                {showColumn("checkbox") && (
                  <th className="px-4 py-2 sticky left-0 bg-[#1E1D24] z-10">
                    <input
                      type="checkbox"
                      checked={
                        selectedRows.length === paginatedData.length &&
                        paginatedData.length > 0
                      }
                      onChange={toggleSelectAll}
                    />
                  </th>
                )}
                {showColumn("id") && (
                  <th
                    className="px-4 py-2 cursor-pointer hover:text-white whitespace-nowrap"
                    onClick={() => requestSort("id")}
                  >
                    <div className="flex items-center gap-1">
                      #
                      {sortConfig.key === "id" &&
                        (sortConfig.direction === "ascending" ? (
                          <IoChevronUp />
                        ) : (
                          <IoChevronDown />
                        ))}
                    </div>
                  </th>
                )}
                <th
                  className="px-4 py-2 cursor-pointer hover:text-white whitespace-nowrap  bg-[#1E1D24]"
                  onClick={() => requestSort("name")}
                >
                  <div className="flex items-center gap-1">
                    Name
                    {sortConfig.key === "name" &&
                      (sortConfig.direction === "ascending" ? (
                        <IoChevronUp />
                      ) : (
                        <IoChevronDown />
                      ))}
                  </div>
                </th>
                {showColumn("amount") && (
                  <th
                    className="px-4 py-2 cursor-pointer hover:text-white whitespace-nowrap"
                    onClick={() => requestSort("amount")}
                  >
                    <div className="flex items-center gap-1">
                      Amount
                      {sortConfig.key === "amount" &&
                        (sortConfig.direction === "ascending" ? (
                          <IoChevronUp />
                        ) : (
                          <IoChevronDown />
                        ))}
                    </div>
                  </th>
                )}
                {showColumn("method") && (
                  <th
                    className="px-4 py-2 cursor-pointer hover:text-white whitespace-nowrap"
                    onClick={() => requestSort("method")}
                  >
                    <div className="flex items-center gap-1">
                      Method
                      {sortConfig.key === "method" &&
                        (sortConfig.direction === "ascending" ? (
                          <IoChevronUp />
                        ) : (
                          <IoChevronDown />
                        ))}
                    </div>
                  </th>
                )}
                {showColumn("created") && (
                  <th
                    className="px-4 py-2 cursor-pointer hover:text-white whitespace-nowrap"
                    onClick={() => requestSort("created")}
                  >
                    <div className="flex items-center gap-1">
                      Created
                      {sortConfig.key === "created" &&
                        (sortConfig.direction === "ascending" ? (
                          <IoChevronUp />
                        ) : (
                          <IoChevronDown />
                        ))}
                    </div>
                  </th>
                )}
                {showColumn("action") && (
                  <th className="px-4 py-2 whitespace-nowrap">Action</th>
                )}
                {showColumn("status") && (
                  <th
                    className="px-4 py-2 cursor-pointer hover:text-white whitespace-nowrap"
                    onClick={() => requestSort("status")}
                  >
                    <div className="flex items-center gap-1">
                      Status
                      {sortConfig.key === "status" &&
                        (sortConfig.direction === "ascending" ? (
                          <IoChevronUp />
                        ) : (
                          <IoChevronDown />
                        ))}
                    </div>
                  </th>
                )}
                {showColumn("edit") && (
                  <th className="px-4 py-2 whitespace-nowrap">Edit</th>
                )}
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((row) => (
                  <tr
                    key={row.id}
                    className={`border-b border-[#26242f] hover:bg-[#1a1a20] ${
                      selectedRows.includes(row.id) ? "bg-[#2a1a2a]" : ""
                    }`}
                  >
                    {showColumn("checkbox") && (
                      <td className="px-4 py-3 sticky left-0 bg-[#121117] z-10">
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(row.id)}
                          onChange={() => toggleRowSelection(row.id)}
                        />
                      </td>
                    )}
                    {showColumn("id") && (
                      <td className="px-4 py-3">#{row.id}</td>
                    )}
                    <td className="px-4 py-3 bg-[#121117]">
                      <div className="flex items-center gap-2">
                        <img
                          src={`https://i.pravatar.cc/32?img=${row.id}`}
                          alt="avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <p>{row.name}</p>
                          <p className="text-xs text-gray-500">{row.email}</p>
                        </div>
                      </div>
                    </td>
                    {showColumn("amount") && (
                      <td className="px-4 py-3 whitespace-nowrap">
                        {row.amount}
                      </td>
                    )}
                    {showColumn("method") && (
                      <td className="px-4 py-3 whitespace-nowrap">
                        {row.method}
                      </td>
                    )}
                    {showColumn("created") && (
                      <td className="px-4 py-3 whitespace-nowrap">
                        {row.created}
                      </td>
                    )}
                    {showColumn("action") && (
                      <td className="px-4 py-3 whitespace-nowrap">
                        <button className="text-purple-400 hover:text-purple-300">
                          {row.action}
                        </button>
                      </td>
                    )}
                    {showColumn("status") && (
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            row.status === "Active"
                              ? "bg-green-600 text-white"
                              : row.status === "Pending"
                              ? "bg-yellow-400 text-black"
                              : row.status === "Banned"
                              ? "bg-red-600 text-white"
                              : "bg-gray-600 text-white"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    )}
                    {showColumn("edit") && (
                      <td className="px-4 py-3 relative group whitespace-nowrap">
                        <button className="text-purple-400 hover:text-purple-300">
                          <FaEdit />
                        </button>
                        <div className="absolute top-[-30px] right-0 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                          Quick edit
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={
                      Object.keys(showColumn).filter((k) => showColumn(k))
                        .length + 1
                    }
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No transactions found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-gray-500 gap-4">
          <p className="whitespace-nowrap">
            Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
            {Math.min(currentPage * rowsPerPage, filtered.length)} of{" "}
            {filtered.length} entries
          </p>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded border border-[#2c2a33] whitespace-nowrap ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#2c2a33]"
              }`}
            >
              Previous
            </button>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded whitespace-nowrap ${
                    currentPage === pageNum
                      ? "bg-purple-600 text-white"
                      : "border border-[#2c2a33] hover:bg-[#2c2a33]"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <span className="px-1">...</span>
            )}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="px-3 py-1 rounded border border-[#2c2a33] hover:bg-[#2c2a33] whitespace-nowrap"
              >
                {totalPages}
              </button>
            )}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded border border-[#2c2a33] whitespace-nowrap ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#2c2a33]"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
