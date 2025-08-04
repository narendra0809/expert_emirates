import { useState, useEffect } from "react";
import { FaSearch, FaDownload } from "react-icons/fa";
import api from "../../axios/api";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [methodFilter, setMethodFilter] = useState("All");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusDropdown, setStatusDropdown] = useState({
    open: false,
    rowId: null,
  });
  const [imageModal, setImageModal] = useState({
    open: false,
    imgSrc: null,
  });
  const [confirmModal, setConfirmModal] = useState({
    open: false,
    newStatus: null,
    row: null,
  });
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filters and search applied to transactions
  useEffect(() => {
    let result = [...transactions];

    if (search) {
      result = result.filter(
        (item) =>
          item.user.name.toLowerCase().includes(search.toLowerCase()) ||
          item.user.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (statusFilter !== "All") {
      result = result.filter(
        (item) => item.status === statusFilter.toLowerCase()
      );
    }
    if (methodFilter !== "All") {
      result = result.filter(
        (item) => item.payment_gateway.name === methodFilter
      );
    }
    setFiltered(result);
    setCurrentPage(1); // Reset page on new filter/search
  }, [transactions, search, statusFilter, methodFilter]);

  const fetchTransactions = async () => {
    try {
      const res = await api.get("/admin/transactions");
      setTransactions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showColumn = (column) => {
    if (windowWidth <= 768) return !["id", "checkbox"].includes(column);
    return true;
  };

  // Methods from actual data
  const methodOptions = [
    "All",
    ...Array.from(
      new Set(transactions.map((item) => item.payment_gateway.name))
    ),
  ];

  // Excel/CSV Download
  const handleDownload = () => {
    const headers = [
      "ID",
      "Name",
      "Email",
      "Plan",
      "Amount",
      "Method",
      "Created",
      "Status",
    ];
    const rows = filtered.map((row) => [
      row.id,
      row.user.name,
      row.user.email,
      row.plan.category,
      row.plan.price,
      row.payment_gateway.name,
      new Date(row.created_at).toLocaleDateString(),
      row.status,
    ]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((r) => r.join(",")).join("\n");
    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Pagination
  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const paginatedData = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleShowImage = (imgSrc) => {
    setImageModal({ open: true, imgSrc });
  };

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
    <div className="flex flex-col min-h-screen  text-white sm:mb-10">
      <h1 className="text-2xl my-8">Manage Transactions</h1>
      <div className="overflow-x-auto w-full bg-[#121117] p-4 rounded-2xl">
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
        <div className="overflow-x-auto pb-2 mb-4 ">
          <div className="flex gap-2 text-sm">
            {["All", "approved", "pending", "reject"].map((label) => (
              <button
                key={label}
                onClick={() => setStatusFilter(label === "All" ? "All" : label)}
                className={`px-4 py-1 rounded flex items-center gap-2 ${
                  statusFilter === label
                    ? "bg-purple-600 text-white"
                    : "bg-[#1E1D24] text-gray-300"
                }`}
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Top Bar: Search, Method Filter, Download, Page Size */}
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
            <select
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
              className="bg-[#1e1d24] px-4 py-3 rounded border border-[#2c2a33] text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {methodOptions.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
            <button
              onClick={handleDownload}
              className="bg-[#1e1d24] px-4 py-3 rounded border border-[#2c2a33] text-white text-sm flex items-center gap-2 hover:bg-[#2c2a33] transition"
            >
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
        <table className="min-w-full text-sm text-left ">
          <thead className="bg-[#1E1D24] text-gray-400">
            <tr>
              {showColumn("id") && (
                <th className="px-4 py-2 whitespace-nowrap">#</th>
              )}
              <th className="px-4 py-2 whitespace-nowrap">Name</th>
              {showColumn("plan_category") && (
                <th className="px-4 py-2 whitespace-nowrap">Plan Name</th>
              )}
              {showColumn("amount") && (
                <th className="px-4 py-2 whitespace-nowrap">Amount</th>
              )}
              {showColumn("method") && (
                <th className="px-4 py-2 whitespace-nowrap">Method</th>
              )}
              {showColumn("payment_proof") && (
                <th className="px-4 py-2 whitespace-nowrap">Proof</th>
              )}
              {showColumn("created") && (
                <th className="px-4 py-2 whitespace-nowrap">Created At</th>
              )}
              {showColumn("status") && (
                <th className="px-4 py-2 whitespace-nowrap">Status</th>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row) => (
                <tr
                  key={row.id}
                  className={`border-b border-[#26242f] hover:bg-[#1a1a20]`}
                >
                  {showColumn("id") && <td className="px-4 py-3">#{row.id}</td>}
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
                  {showColumn("created") && (
                    <td className="px-4 py-3 whitespace-nowrap">
                      {new Date(row.created_at).toLocaleDateString()}
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
  );
}
