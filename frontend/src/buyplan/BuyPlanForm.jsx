import React from "react";
import { useState } from "react";
import { FaUpload } from "react-icons/fa"; // Optional, you can use inline SVG if avoiding libraries

const BuyPlanForm = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const paymentMethods = [
    "ETH ERC20",
    "Bank Transfer",
    "USDT TRC20",
    "BTC",
    "Card Payment",
  ];

  return (
    <div className="w-full max-w-lg mx-auto bg-[#1A1A1F] text-white rounded-xl p-6 shadow-lg">
      <h2 className="text-yellow-400 text-sm font-semibold mb-1">BUY NEW PLAN</h2>
      <p className="text-sm text-gray-400 mb-6">Choose a plan that suits your trading needs.</p>

      {/* Plan Type */}
      <div className="mb-4">
        <label className="block text-sm mb-1 text-gray-300">Plan Type</label>
        <select className="w-full bg-[#121215] border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none">
          <option>Standard</option>
          <option>Premium</option>
        </select>
      </div>

      {/* Plan */}
      <div className="mb-4">
        <label className="block text-sm mb-1 text-gray-300">Plan</label>
        <select className="w-full bg-[#121215] border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none">
          <option>Funded $ 50,000</option>
          <option>Funded $ 100,000</option>
        </select>
      </div>

      {/* Payment Methods */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 text-gray-300">
          Choose Payment Method from the list below <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {paymentMethods.map((method) => (
            <button
              key={method}
              onClick={() => setSelectedMethod(method)}
              className={`border rounded-md px-3 py-2 text-sm transition ${
                selectedMethod === method
                  ? "bg-yellow-600 text-black font-semibold"
                  : "bg-[#121215] border-gray-600 text-white hover:border-yellow-500"
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Upload Box */}
      <div className="mb-6">
        <div className="border border-dashed border-gray-600 rounded-md py-6 flex flex-col items-center text-sm bg-[#121215]">
          <FaUpload className="text-yellow-500 text-xl mb-2" />
          <span className="text-yellow-500">Click to upload</span>
          <p className="text-gray-400 text-xs mt-1">
            or drag and drop <br />
            SVG, PNG, JPG or GIF (max. 800 × 400px)
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="w-full bg-gradient-to-br from-[#FFD700] to-[#a67c00] text-black font-semibold py-2 rounded-full shadow-md hover:opacity-90 transition">
        PROCEED TO PAYMENT
      </button>
    </div>
  );
};

export default BuyPlanForm;
