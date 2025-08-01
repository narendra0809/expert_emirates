import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios/api";
import toast from "react-hot-toast";

export default function TransactionHistory() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  const fetchTransactions = async () => {
    try {
      const res = await api.get("/transactions");
      if (res.status !== 200) throw new Error("Unable to fetch transactions");
      setTransactions(res.data);
      fetchTransactions();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      const res = await api.delete(`/transactions/${id}`);
      if (res.status !== 200) {
        toast.error("Unable to delete transaction. Please try again", {
          duration: 3000,
        });
        return;
      }
      toast.success(res.data.message, { duration: 3000 });
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteId(null);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return "bg-[#22C55E29] text-[#118D57]";
      case "pending":
        return "bg-[#FFAB0029] text-[#B76E00]";
      case "reject":
        return "bg-[#919EAB29] text-[#637381]";
      default:
        return "bg-[#E2E8F029] text-[#565B63]";
    }
  };

  return (
    <>
      {deleteId && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-[#18181e] p-6 rounded-xl max-w-xs w-full shadow-lg flex flex-col gap-4 border border-[#FFD700]">
            <h3 className="text-lg font-bold text-yellow-300 text-center">
              Delete Transaction?
            </h3>
            <p className="text-gray-200 text-center text-sm">
              Are you sure you want to delete this transaction?
              <br />
              This action cannot be undone.
            </p>
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => {
                  handleDeleteTransaction(deleteId);
                  setDeleteId(null);
                }}
                className="flex-1 bg-gradient-to-r from-[#6C1C1C] to-[#B92828] text-white px-4 py-2 rounded-full font-semibold shadow hover:from-[#B92828] hover:to-[#6C1C1C] hover:text-yellow-300 border border-transparent hover:border-[#FFD700] transition-all uppercase text-xs"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 bg-[#222227] border border-[#FFD70080] text-yellow-300 px-4 py-2 rounded-full font-semibold shadow hover:bg-[#23222c] hover:text-white transition-all uppercase text-xs"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="text-[#B76E00] flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
        <h2 className="text-lg sm:text-2xl font-bold text-white w-full sm:w-auto text-center sm:text-left">
          Transaction History
        </h2>
        <button
          onClick={() => navigate("/dashboard/buy-plan")}
          className="bg-gradient-to-r from-[#191817] to-[#231F19] hover:from-yellow-900/50 hover:to-yellow-800/60 border border-[#B89F5A30] text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg w-full sm:w-auto transition"
        >
          Buy Plan
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-[#121117] rounded-2xl shadow-xl p-3 sm:p-6 border border-[#18181e] max-w-full overflow-x-auto">
        {/* Mobile Card View */}
        <div className="sm:hidden space-y-4">
          {transactions.map((row) => (
            <div
              key={row.id}
              className="bg-[#18181e] p-4 rounded-xl border border-[#24222d] shadow-lg flex flex-col gap-3"
            >
              <div className="flex justify-between items-center mb-2  gap-2">
                <span className="font-bold text-white text-lg">
                  {row.plan.category}
                </span>
                <span className="ml-2 text-xs text-yellow-300 bg-yellow-900/50 px-2 py-0.5 rounded-lg">
                  {row.plan.type}
                </span>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${getStatusBadge(
                    row.status
                  )}`}
                >
                  {row.status.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400">Amount</p>
                    <p className="text-white font-semibold">{row.plan.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Method</p>
                    <p className="text-white">{row.payment_gateway.name}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-400">Payment Date</p>
                    <p className="text-white">
                      {new Date(row.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="">
                    <button
                      disabled={row.status != "pending"}
                      onClick={() => setDeleteId(row.id)}
                      className="disabled:opacity-75 bg-gradient-to-r from-[#6C1C1C] to-[#B92828] text-white px-4 py-1 rounded-full font-semibold text-sm shadow hover:from-[#B92828] hover:to-[#6C1C1C] hover:text-yellow-300 border border-transparent hover:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition-all duration-150"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden sm:block overflow-x-auto hide-scrollbar">
          <table className="w-full text-base text-left rounded-lg border-separate border-spacing-y-1.5">
            <thead className="bg-[#18181e] text-gray-400 font-semibold rounded-t-lg">
              <tr>
                <th className="px-4 py-3 rounded-l-xl">#</th>
                <th className="px-4 py-3">Plan Category</th>
                <th className="px-4 py-3">Plan Type</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">Payment Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 rounded-r-xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((row) => (
                <tr
                  key={row.id}
                  className="bg-[#18181e] text-[#d8dee9] border rounded-xl shadow hover:bg-[#222230] transition"
                >
                  <td className="px-4 py-3 font-semibold text-sm text-gray-300">
                    #{row.id}
                  </td>
                  <td className="px-4 py-3">{row.plan.category}</td>
                  <td className="px-4 py-3">
                    <span className="bg-yellow-900/60 text-yellow-200 px-3 py-1 rounded font-medium text-xs">
                      {row.plan.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">$ {row.plan.price}</td>
                  <td className="px-4 py-3">{row.payment_gateway.name}</td>
                  <td className="px-4 py-3">
                    {new Date(row.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2.5 py-1.5 rounded-full text-xs font-semibold ${getStatusBadge(
                        row.status
                      )}`}
                    >
                      {row.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      disabled={row.status != "pending"}
                      onClick={() => setDeleteId(row.id)}
                      className="disabled:opacity-60 disabled:cursor-not-allowed bg-gradient-to-r from-[#6C1C1C] to-[#B92828] text-white px-3 py-1.5 rounded-full font-medium shadow hover:from-[#B92828] hover:to-[#6C1C1C] border border-transparent hover:border-[#FFD700] hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition-all duration-150 uppercase text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm text-gray-400">
          <p className="mb-3 sm:mb-0">
            Showing 1 to {transactions.length} of {transactions.length} entries
          </p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 border border-[#252429] rounded-lg hover:bg-[#23222c]">
              Previous
            </button>
            <button className="px-3 py-1.5 bg-[#1d1d22] rounded-lg text-white border border-yellow-500 font-bold shadow">
              1
            </button>
            <button className="px-3 py-1.5 border border-[#252429] rounded-lg hover:bg-[#23222c]">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
