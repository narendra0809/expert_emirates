import { useState, useEffect } from "react";
import {
  FaSearch,
  FaDownload,
  FaFilter,
  FaTimes,
  FaEdit,
} from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import api from "../../axios/api";

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

export default function LatestTransactions({
  transactions,
  fetchTransactions,
}) {
  const [search, setSearch] = useState("");
  const [imageModal, setImageModal] = useState({
    open: false,
    imgSrc: null,
  });

  const [filtered, setFiltered] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [methodFilter, setMethodFilter] = useState("All");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const [statusDropdown, setStatusDropdown] = useState({
    open: false,
    rowId: null,
  });
  const [confirmModal, setConfirmModal] = useState({
    open: false,
    newStatus: null,
    row: null,
  });
  const [updatingStatus, setUpdatingStatus] = useState(false);

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
      // Medium screens
      return !["id", "checkbox"].includes(column);
    }
    return true;
  };

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginatedData = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setMethodFilter("All");
    setSortConfig({ key: null, direction: "ascending" });
  };

  const handleShowImage = (imgSrc) => {
    setImageModal({ open: true, imgSrc });
  };

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

  const handleStatusChange = async () => {
    setUpdatingStatus(true);
    try {
      const url =
        confirmModal.newStatus === "approved"
          ? `/admin/transaction-update/${confirmModal.row.id}`
          : `/admin/transaction-reject/${confirmModal.row.id}`;
      await api.post(url);
      fetchTransactions();
    } catch (err) {
      console.log(err);
    } finally {
      setUpdatingStatus(false);
      setConfirmModal({
        open: false,
        newStatus: null,
        row: null,
      });
    }
  };

  return (
    <div className="flex flex-col  bg-black text-white pb-5">
      {confirmModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-[#1a1a20] border-2 border-yellow-400 rounded-2xl shadow-xl px-8 py-7 max-w-xs text-center">
            <h4 className="text-lg font-bold mb-4 text-yellow-300">
              Change Status
            </h4>
            <p className="text-white font-medium mb-4">
              Are you sure you want to set this transaction status to
              <span
                className={`ml-2 font-bold ${
                  confirmModal.newStatus === "approved"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {confirmModal.newStatus.toUpperCase()}
              </span>
              ?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleStatusChange}
                disabled={updatingStatus}
                className={`px-4 py-2 rounded-full font-bold uppercase text-sm
            bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-600 text-black border border-yellow-300
            hover:from-yellow-600 hover:to-yellow-800 hover:text-[#231F19]
            transition-all`}
              >
                {updatingStatus ? "Updating..." : "Yes, Change"}
              </button>
              <button
                onClick={() =>
                  setConfirmModal({ open: false, newStatus: null, row: null })
                }
                className="px-4 py-2 rounded-full font-bold uppercase text-sm bg-gray-700 text-gray-200 hover:bg-gray-800 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Transaction</h2>
      </div>

      <div className="overflow-x-auto pb-2 mb-4">
        <div className="flex gap-2 text-sm">
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
      {/* Main Content */}
      <div className="bg-[#121117] rounded-xl shadow-md p-4 sm:p-6 border border-[#1c1c24] w-full hide-scrollbar">
        {/* Status Filters - Horizontal Scroll on Mobile */}

        {imageModal.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="relative bg-[#18181e] rounded-2xl shadow-2xl border-2 border-yellow-500 max-w-lg w-[97vw] p-6 sm:p-8 flex flex-col items-center">
              <button
                onClick={() => setImageModal({ open: false, imgSrc: null })}
                className="absolute top-3 right-4 text-white text-3xl hover:text-yellow-400 transition"
                aria-label="Close"
                type="button"
              >
                &times;
              </button>
              <div className="mb-4 text-center text-yellow-300 font-bold text-lg uppercase tracking-widest">
                Payment Proof
              </div>
              {imageModal.imgSrc ? (
                <img
                  src={imageModal.imgSrc}
                  alt="Payment Proof"
                  className="rounded-lg border border-yellow-700 max-h-[70vh] object-contain bg-black"
                  style={{ maxWidth: "100%" }}
                />
              ) : (
                <div className="text-gray-400 py-16 text-lg">
                  No image available
                </div>
              )}
              {imageModal.imgSrc && (
                <a
                  href={imageModal.imgSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-yellow-700 hover:bg-yellow-800 text-white text-sm font-bold rounded px-5 py-2 shadow transition"
                >
                  Open Full Size
                </a>
              )}
            </div>
          </div>
        )}

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
              <span className="hidden sm:inline">Download Excel</span>
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
          <table className="min-w-full text-sm text-left ">
            <thead className="bg-[#1E1D24] text-gray-400">
              <tr>
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
                  className="px-4 py-2 cursor-pointer hover:text-white  bg-[#1E1D24]"
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
                {showColumn("plan_category") && (
                  <th className="px-4 py-2 cursor-pointer hover:text-white whitespace-nowrap">
                    <div className="flex items-center gap-1">Plan Name</div>
                  </th>
                )}
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
                {showColumn("Payment Proof") && (
                  <th className="px-4 py-2 whitespace-nowrap">Payment Proof</th>
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
              </tr>
            </thead>
            <tbody>
              {paginatedData.length > 0 ? (
                transactions.map((row) => (
                  <tr
                    key={row.id}
                    className={`border-b border-[#26242f] hover:bg-[#1a1a20] ${
                      selectedRows.includes(row.id) ? "bg-[#2a1a2a]" : ""
                    }`}
                  >
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
                          <p>{row.user.name}</p>
                          <p className="text-xs text-gray-500">
                            {row.user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    {showColumn("plan_category") && (
                      <td className="px-4 py-3 whitespace-nowrap">
                        {row.plan.category}
                      </td>
                    )}
                    {showColumn("amount") && (
                      <td className="px-4 py-3 whitespace-nowrap">
                        $ {row.plan.price}
                      </td>
                    )}
                    {showColumn("method") && (
                      <td className="px-4 py-3 whitespace-nowrap">
                        {row.payment_gateway.name}
                      </td>
                    )}
                    {showColumn("created") && (
                      <td className="px-4 py-3 whitespace-nowrap">
                        {new Date(row.created_at).toLocaleDateString()}
                      </td>
                    )}
                    {showColumn("Payment Proof") && (
                      <td className="px-4 py-3 whitespace-nowrap">
                        <button
                          onClick={() => handleShowImage(row.payment_image)}
                          className="text-purple-400 hover:text-purple-300"
                        >
                          View
                        </button>
                      </td>
                    )}
                    {showColumn("status") && (
                      <td className="px-4 py-3 whitespace-nowrap relative">
                        {["approved", "reject"].includes(row.status) ? (
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              row.status === "approved"
                                ? "bg-green-600 text-white"
                                : row.status === "reject"
                                ? "bg-red-600 text-white"
                                : "bg-gray-600 text-white"
                            }`}
                          >
                            {row.status.toUpperCase()}
                          </span>
                        ) : (
                          <div className="relative inline-block w-full">
                            <button
                              className={`flex justify-between items-center px-2 py-1 rounded text-xs font-medium w-full text-left ${
                                row.status === "pending"
                                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                                  : "bg-gray-600 text-white"
                              }`}
                              onClick={() =>
                                setStatusDropdown((prev) =>
                                  prev.open && prev.rowId === row.id
                                    ? { open: false, rowId: null }
                                    : { open: true, rowId: row.id }
                                )
                              }
                            >
                              {row.status.toUpperCase()}

                              <IoChevronDown className="inline ml-1 text-xs" />
                            </button>
                            {/* Dropdown list */}
                            {statusDropdown.open &&
                              statusDropdown.rowId === row.id && (
                                <div className="absolute left-0 z-30 mt-1 bg-[#111010] border border-yellow-400  w-full rounded shadow-lg">
                                  <button
                                    onClick={() => {
                                      setStatusDropdown({
                                        open: false,
                                        rowId: null,
                                      });
                                      setConfirmModal({
                                        open: true,
                                        newStatus: "approved",
                                        row,
                                      });
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-green-300 hover:text-green-900 text-sm"
                                  >
                                    Approve
                                  </button>
                                  <button
                                    onClick={() => {
                                      setStatusDropdown({
                                        open: false,
                                        rowId: null,
                                      });
                                      setConfirmModal({
                                        open: true,
                                        newStatus: "reject",
                                        row,
                                      });
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-red-200 hover:text-red-900 text-sm"
                                  >
                                    Reject
                                  </button>
                                </div>
                              )}
                          </div>
                        )}
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
