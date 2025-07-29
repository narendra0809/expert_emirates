import React, { useState, useEffect } from "react";

// Icons
const PencilIcon = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: onClick ? "pointer" : "default" }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"
    />
  </svg>
);

const TrashIcon = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: onClick ? "pointer" : "default" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const PlusIcon = ({ className, onClick }) => (
  <svg
    onClick={onClick}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: onClick ? "pointer" : "default" }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const PaymentMethod = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [methodToDelete, setMethodToDelete] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    wallet_address: "",
    qr_code: null,
    qr_code_preview: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  // Fetch payment methods from API (simulated)
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPaymentMethods([
        {
          id: 1,
          name: "Bitcoin",
          wallet_address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
          qr_code: "/images/bitcoin-qr.png",
        },
        {
          id: 2,
          name: "Ethereum",
          wallet_address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
          qr_code: "/images/ethereum-qr.png",
        },
      ]);
      setIsLoading(false);
    }, 500);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        qr_code: file,
        qr_code_preview: URL.createObjectURL(file),
      }));
    }
  };

  const openAddModal = () => {
    setFormData({
      name: "",
      wallet_address: "",
      qr_code: null,
      qr_code_preview: "",
    });
    setEditIndex(null);
    setIsModalOpen(true);
  };

  const openEditModal = (index) => {
    const method = paymentMethods[index];
    setFormData({
      name: method.name,
      wallet_address: method.wallet_address,
      qr_code: null,
      qr_code_preview: method.qr_code,
    });
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedMethods = [...paymentMethods];
      updatedMethods[editIndex] = {
        ...updatedMethods[editIndex],
        name: formData.name,
        wallet_address: formData.wallet_address,
        qr_code: formData.qr_code_preview,
      };
      setPaymentMethods(updatedMethods);
    } else {
      const newMethod = {
        id: paymentMethods.length + 1,
        name: formData.name,
        wallet_address: formData.wallet_address,
        qr_code: formData.qr_code_preview,
      };
      setPaymentMethods([...paymentMethods, newMethod]);
    }
    setIsModalOpen(false);
  };

  const confirmDelete = (index) => {
    setMethodToDelete(index);
    setIsDeleteConfirmOpen(true);
  };

  const handleDelete = () => {
    const updatedMethods = paymentMethods.filter(
      (_, i) => i !== methodToDelete
    );
    setPaymentMethods(updatedMethods);
    setIsDeleteConfirmOpen(false);
  };

  return (
    <div className="h-full text-white p-4 sm:p-6 bg-[#121117] rounded-xl">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold gradient-text">
            Payment Methods
          </h2>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 bg-[#211f29] hover:bg-[#1b1921] px-4 py-2 rounded-md text-sm"
          >
            <PlusIcon className="w-4 h-4" />
            Add Payment Method
          </button>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : paymentMethods.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No payment methods found. Add your first payment method.
          </div>
        ) : (
          <div className="rounded-xl shadow-lg w-full overflow-x-auto bg-[#1a1a24]">
            {/* Header */}
            <div className="grid grid-cols-12 border-b border-gray-700 p-4 text-sm font-semibold text-gray-300 min-w-[800px]">
              <div className="col-span-3">Name</div>
              <div className="col-span-4">Wallet Address</div>
              <div className="col-span-3">QR Code</div>
              <div className="col-span-2 text-center">Actions</div>
            </div>

            {/* Rows */}
            {paymentMethods.map((method, index) => (
              <div
                key={method.id}
                className="grid grid-cols-12 items-center border-b border-gray-800 px-4 py-3 text-sm hover:bg-gray-900 transition-colors min-w-[800px]"
              >
                <div className="col-span-3 font-medium">{method.name}</div>
                <div className="col-span-4 truncate text-gray-300">
                  {method.wallet_address}
                </div>
                <div className="col-span-3">
                  {method.qr_code && (
                    <img
                      src={method.qr_code}
                      alt={`${method.name} QR Code`}
                      className="h-20 w-20 object-cover p-1 rounded"
                    />
                  )}
                </div>
                <div className="col-span-2 flex justify-center gap-3">
                  <button
                    onClick={() => openEditModal(index)}
                    className="text-blue-400 hover:text-blue-300"
                    aria-label="Edit"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => confirmDelete(index)}
                    className="text-red-400 hover:text-red-300"
                    aria-label="Delete"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-[#121117] p-6 rounded-md w-full max-w-md text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              {editIndex !== null
                ? "Edit Payment Method"
                : "Add Payment Method"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Bitcoin"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#201f28] rounded-md outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Wallet Address
                </label>
                <input
                  type="text"
                  name="wallet_address"
                  placeholder="Wallet address"
                  value={formData.wallet_address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#201f28] rounded-md outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  QR Code
                </label>
                {formData.qr_code_preview && (
                  <div className="mb-2">
                    <img
                      src={formData.qr_code_preview}
                      alt="QR Code Preview"
                      className="h-24 w-24 object-cover p-1 rounded mx-auto"
                    />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="cursor-pointer block w-full text-sm text-gray-400
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#201f28] file:text-white
                    hover:file:bg-[#1a1922]"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-md bg-[#201f28] hover:bg-[#1a1922] text-sm"
              >
                {editIndex !== null ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-[#121117] p-6 rounded-md w-full max-w-md text-white shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-6">
              Are you sure you want to delete this payment method? This action
              cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsDeleteConfirmOpen(false)}
                className="px-4 py-2 rounded-md bg-gray-600 hover:bg-gray-500 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
