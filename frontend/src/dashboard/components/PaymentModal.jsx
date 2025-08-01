import { useState } from "react";
import toast from "react-hot-toast";

const PaymentModal = ({ isOpen, onClose, payment, setPaymentDone }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !payment) return null;

  const { name, qr_code, wallet_address } = payment || {};

  const handleCopy = () => {
    if (!wallet_address) return;
    navigator.clipboard.writeText(wallet_address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 z-50
        max-w-xl w-[95vw] sm:w-[32rem]
        bg-[#18181e] border border-[#FFD70088]
        rounded-2xl shadow-2xl
        py-6 px-4 sm:py-10 sm:px-8
        flex flex-col gap-3
        animate-fade-in
        overflow-auto
      "
      style={{ top: "-430px" }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition"
        aria-label="Close"
        type="button"
      >
        &times;
      </button>

      <div className="mb-4 text-2xl font-bold text-yellow-300 text-center">
        Pay With {name || "Selected Method"}
      </div>

      {/* Show QR if available */}
      {qr_code && (
        <div className="flex flex-col items-center my-4">
          <img
            src={qr_code}
            alt="QR Code"
            className="w-44 h-44 sm:w-56 sm:h-56 rounded-xl border border-gray-700 mb-4 bg-white object-contain"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}

      {/* Show wallet if available */}
      {wallet_address && (
        <>
          <div className="text-center text-base sm:text-lg mb-1 font-semibold">
            Wallet Address:
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center mb-4 gap-2 w-full">
            <div className="w-full sm:w-auto bg-gray-900 px-3 py-2 rounded-md font-mono text-sm sm:text-base text-white break-all select-all">
              {wallet_address}
            </div>
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium focus:outline-none transition-colors"
              type="button"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </>
      )}

      {/* If no wallet/QR info, show a gentle info block */}
      {!qr_code && !wallet_address && (
        <div className="text-center text-lg text-gray-300 my-6">
          No wallet details to show for this payment method.
        </div>
      )}

      <div className="w-full text-center mt-2">
        <button
          onClick={() => {
            setPaymentDone(true);
            onClose();
            toast.success("Please upload payment screenshot then submit", {
              duration: 5000,
              style: {
                backgroundColor: "#121117",
                color: "white",
                width: "100%",
              },
            });
          }}
          className="
            w-full px-5 py-3 mt-2 rounded-full font-bold text-lg shadow-md
            bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-600
            text-black
            border border-yellow-300
            hover:from-yellow-600 hover:via-yellow-300 hover:to-yellow-800
            hover:text-[#1a170f]
            hover:border-yellow-400
            focus:outline-none focus:ring-2 focus:ring-yellow-400
            transition-all
            uppercase tracking-widest
          "
          type="button"
        >
          Payment Done
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
