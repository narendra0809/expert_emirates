import { useState } from "react";
import toast from "react-hot-toast";

const PaymentModal = ({
  isOpen,
  onClose,
  payment: { name, qr_code, wallet_address },
  setPaymentDone,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(wallet_address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative bg-[#121117] rounded-xl px-8 py-10 min-w-[340px] shadow-xl text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="mb-4 text-2xl font-semibold text-white">
          Pay With {name}
        </div>

        <div className="flex flex-col items-center my-6">
          <img
            src={qr_code}
            alt="QR Code"
            className="w-44 h-44 rounded-lg border border-gray-700 mb-6"
          />
        </div>

        <div className="text-center text-lg mb-3 font-medium">
          Wallet Address:
        </div>

        <div className="flex items-center justify-center mb-5">
          <span className="bg-gray-900 px-3 py-2 rounded-md font-mono text-base mr-2 text-white break-all">
            {wallet_address}
          </span>
          <button
            onClick={handleCopy}
            className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium focus:outline-none transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="w-full text-center">
          <button
            onClick={() => {
              setPaymentDone(true);
              onClose();
              toast.success("Please upload payment screenshot then submit", {
                duration: 5000,
                style: {
                  backgroundColor: "#121117",
                  color: "white",
                },
              });
            }}
            className="px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium focus:outline-none transition-colors"
          >
            Payment Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
