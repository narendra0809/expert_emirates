

import React from "react";
import { MdDiscount, MdDiamond } from "react-icons/md";
import { BiSolidCrown } from "react-icons/bi";

const plans = [
  {
    name: "Standard Plan",
    price: "$199",
    duration: "/MONTHLY",
    icon: <MdDiscount className="text-white text-lg rotate-90" />,
    features: [
      "📈 Consistent Weekly Returns of 20–30%",
      "📉 Max Daily Drawdown of 10%",
      "💰 Minimum Account Size: $1,000",
      "⚖ Leverage of 1:500 or Higher Recommended",
      " 🛡 Smart Risk Management Tips",
      " 🤝 Dedicated VIP Support",
      " 🚀 Crypto Elite Access",
      " ⚙ First to New Features & Tools",
    ],
    description: "Perfect for small teams or unlimited evaluation.",
  },
  {
    name: "Pro Plan",
    price: "$499",
    duration: "/QUARTERLY",
    icon: <BiSolidCrown className="text-white text-lg" />,
     features: [
      " 📊 Premium Trade Signals (12–15/Week)",
      " ⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4",
      " 📲 Instant Telegram Trade Alerts",
      " 📰 Exclusive Weekly Market Blueprint",
      " 🛡 Smart Risk Management Tips",
      " 🤝 Dedicated VIP Support",
      " 🚀 Forex + Gold Elite Access",
      " ⚙ First to New Features & Tools",
    ],
    description:
      "Everything in Standard, plus enhanced features for serious traders.",
  },
  {
    name: "Ultra Plan",
    price: "$999",
    duration: "/HALF–YEARLY",
    icon: <MdDiamond className="text-white text-lg" />,
    features: [
      " 📊 Premium Trade Signals (12–15/Week)",
      " ⚖️ Risk Reward Ratio - 1:2 , 1:3, 1:4",
      " 📲 Instant Telegram Trade Alerts",
      " 📰 Exclusive Weekly Market Blueprint",
      " 🛡 Smart Risk Management Tips",
      " 🤝 Dedicated VIP Support",
      " 🚀 Forex + Gold Elite Access",
      " ⚙ First to New Features & Tools",
    ],
    description:
      "Our premium package for ultimate trading performance. Includes everything in Pro.",
  },
];

const wrapperStyle = {
  background:
    "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
  padding: "2px",
  borderRadius: "9999px",
};

export default function CyptoPricibgSection() {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12 font-[Poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {plans.map((plan, idx) => (
    <div
  key={idx}
  className="group bg-[#121117] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg transition-all duration-300 relative hover:border hover:border-yellow-400 hover:bg-[#1D1B25] cursor-pointer"
>
  {/* Plan Badge */}
 <div className="flex items-center gap-2 bg-[#1D1B25] rounded-full px-2 py-1.5 w-max mb-6 border border-transparent group-hover:border-[#073B3A] transition-all duration-300">
  <span className="p-2 bg-[#073B3A] rounded-full">{plan.icon}</span>
  <span className="text-sm font-semibold text-white group-hover:bg-gradient-to-b group-hover:from-yellow-800 group-hover:via-yellow-300 group-hover:to-yellow-800 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
    {plan.name}
  </span>
</div>


  {/* Price */}
  <h2 className="text-4xl font-medium text-white">
    {plan.price}
    <span className="text-base font-normal ml-1">{plan.duration}</span>
  </h2>

  {/* Description */}
  <p className="text-sm sm:text-md font-medium text-gray-300 my-4 leading-relaxed">
    {plan.description}
  </p>

  {/* Buy Now Button */}
  <div className="w-full sm:w-[147px] h-[48px] mb-6">
    <button
      className="w-full h-full rounded-full text-sm font-bold uppercase transition-all duration-300 
      border border-yellow-400 text-white bg-black group-hover:bg-gradient-to-r group-hover:from-yellow-900 group-hover:via-yellow-400 group-hover:to-yellow-900 group-hover:text-black"
    >
      Buy Now
    </button>
  </div>

  {/* Features */}
  <ul className="space-y-3 text-sm text-gray-300">
    {plan.features.map((feature, i) => (
      <li key={i} className="flex items-start gap-3">
        <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-[#452e06] group-hover:via-[#d1bf5a] group-hover:to-[#452e06]">
          <span className="text-xs font-bold text-gray-900 group-hover:text-black">
            ✓
          </span>
        </div>
        <span className="font-medium">{feature}</span>
      </li>
    ))}
  </ul>
</div>


        ))}
      </div>
    </div>
  );
}
