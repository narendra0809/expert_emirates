import React from "react";
import { FaFilter } from "react-icons/fa"; // Optional

const plans = [
  {
    type: "Standard Plan",
    amount: "$199",
    cycle: "MONTHLY",
    market: "Forex",
    purchaseDate: "01-01-2024",
    expiryDate: "29-06-2024",
    status: "Plan Active",
  },
  // You can duplicate this to show more cards
];

const CurrentPlans = () => {
  return (
    <div className="w-full max-w-lg mx-auto bg-[#1A1A1F] text-white rounded-xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-yellow-400 text-sm font-semibold">CURRENT PLAN</h2>
        <button className="flex items-center gap-1 text-sm bg-[#121215] border border-gray-700 px-3 py-1 rounded-md hover:border-yellow-500 transition">
          Filter <FaFilter className="h-3 w-3 text-gray-400" />
        </button>
      </div>

      {/* Plan Cards */}
      <div className="space-y-4">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-[#121215] border border-gray-700 rounded-lg p-4"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-medium text-white mb-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500 inline-block" />
                  {plan.type}
                </h3>
                <p className="text-2xl font-bold">{plan.amount}</p>
                <p className="text-sm text-gray-400 -mt-1">{plan.cycle}</p>
              </div>
              <div className="text-sm text-yellow-500">{plan.status}</div>
            </div>

            {/* Bottom Row */}
            <div className="mt-4 flex justify-between text-xs text-gray-400">
              <div>
                <p>Purchase Date: {plan.purchaseDate}</p>
              </div>
              <div>
                <span className="bg-gradient-to-br from-[#FFD700] to-[#a67c00] text-black font-semibold px-3 py-1 rounded-full shadow text-xs">
                  Expire: {plan.expiryDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentPlans;
