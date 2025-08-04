import { useState } from "react";

export default function LatestTransactions({ transactions }) {
  const [imageModal, setImageModal] = useState({
    open: false,
    imgSrc: null,
  });

  const latestTransactions = transactions.slice(0, 5);

  const handleShowImage = (imgSrc) => {
    setImageModal({ open: true, imgSrc });
  };

  return (
    <div className="flex flex-col bg-black text-white pb-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Latest Transactions
        </h2>
      </div>

      <div className="bg-[#121117] rounded-xl shadow-md p-4 sm:p-6 border border-[#1c1c24] w-full">
        {/* Image Modal */}
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
                <>
                  <img
                    src={imageModal.imgSrc}
                    alt="Payment Proof"
                    className="rounded-lg border border-yellow-700 max-h-[70vh] object-contain bg-black"
                    style={{ maxWidth: "100%" }}
                  />
                  <a
                    href={imageModal.imgSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-yellow-700 hover:bg-yellow-800 text-white text-sm font-bold rounded px-5 py-2 shadow transition"
                  >
                    Open Full Size
                  </a>
                </>
              ) : (
                <div className="text-gray-400 py-16 text-lg">
                  No image available
                </div>
              )}
            </div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className="min-w-full text-sm text-left ">
            <thead className="bg-[#1E1D24] text-gray-400">
              <tr>
                <th className="px-4 py-2 whitespace-nowrap">#</th>
                <th className="px-4 py-2 whitespace-nowrap">Name</th>
                <th className="px-4 py-2 whitespace-nowrap">Plan Name</th>
                <th className="px-4 py-2 whitespace-nowrap">Amount</th>
                <th className="px-4 py-2 whitespace-nowrap">Method</th>
                <th className="px-4 py-2 whitespace-nowrap">Created</th>
                <th className="px-4 py-2 whitespace-nowrap">Payment Proof</th>
                <th className="px-4 py-2 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {latestTransactions.length > 0 ? (
                latestTransactions.map((row) => (
                  <tr
                    key={row.id}
                    className={`border-b border-[#26242f] hover:bg-[#1a1a20]`}
                  >
                    <td className="px-4 py-3">#{row.id}</td>
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
                    <td className="px-4 py-3 whitespace-nowrap">
                      {row.plan.category}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      $ {row.plan.price}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {row.payment_gateway.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {new Date(row.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <button
                        onClick={() => handleShowImage(row.payment_image)}
                        className="text-purple-400 hover:text-purple-300"
                      >
                        View
                      </button>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          row.status === "approved"
                            ? "bg-green-600 text-white"
                            : row.status === "reject"
                            ? "bg-red-600 text-white"
                            : row.status === "pending"
                            ? "bg-yellow-400 text-black"
                            : "bg-gray-600 text-white"
                        }`}
                      >
                        {row.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
