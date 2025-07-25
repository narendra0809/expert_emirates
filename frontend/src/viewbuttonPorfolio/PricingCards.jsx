import React from "react";
import { MdDiscount, MdDiamond } from "react-icons/md";
import { BiSolidCrown } from "react-icons/bi";

const plans = [
  {
    name: "Standard Plan",
    price: "$249",
    duration: "/MONTHLY",
    icon: <MdDiscount className="text-xl rotate-90 text-yellow-500" />,
    features: [
      "🌱 Grow big, give small, just 20% from every $1,000 gain",
      "📈 Consistent Weekly Returns of 20–30%",
      "📉 Max Daily Drawdown of 10%",
      "💰 Minimum Account Size: $1,000",
      "⚖ Leverage of 1:500 or Higher Recommended",
      "🎯 Swing Trading with Long-Term Vision & Low Risk",
      "🔍 100% Transparent Management with Live Updates",
      "🌴 You Focus on Life. We Focus on Your Growth.",
      "👜 Designed for Traders Who Want Results Without the Stress"
    ],
    description: "Perfect for small teams or unlimited evaluation.",
  },
  {
    name: "Pro Plan",
    price: "$199",
    duration: "/ 1 TIME REGISTRATION",
    icon: <BiSolidCrown className="text-2xl text-yellow-500" />,
   features: [
      "🌱 Grow big, give small, just 20% from every $1,000 gain",
      "📈 Consistent Weekly Returns of 20–30%",
      "📉 Max Daily Drawdown of 10%",
      "💰 Minimum Account Size: $1,000",
      "⚖ Leverage of 1:500 or Higher Recommended",
      "🎯 Swing Trading with Long-Term Vision & Low Risk",
      "🔍 100% Transparent Management with Live Updates",
      "🌴 You Focus on Life. We Focus on Your Growth.",
      "👜 Designed for Traders Who Want Results Without the Stress"
    ],
    description:
      "Everything in Standard, plus enhanced features for serious traders.",
  },
];

export default function PricingCards() {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12 font-[Poppins] rounded-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 sm:px-4 md:px-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="group rounded-2xl p-[2px] transition-all duration-300 bg-gradient-to-b from-[#292929] to-black hover:from-yellow-900 hover:via-yellow-300 hover:to-yellow-900"
          >
            <div className="bg-[#121117] rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between group-hover:bg-[#1D1B25] transition-all duration-300">
              {/* Plan Badge */}
              <div className="flex items-center gap-2 bg-[#1F1E25] rounded-full px-2 py-2 w-max mb-6 text-white border border-transparent group-hover:border-[#073B3A] transition-all duration-300">
                <span className="text-lg p-2 rounded-full bg-[#073B3A] ">
                  {plan.icon}
                </span>
                <span className="text-lg font-semibold group-hover:bg-gradient-to-b group-hover:from-yellow-900 group-hover:via-yellow-300 group-hover:to-yellow-900 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <h2 className="text-4xl font-bold text-white group-hover:text-yellow-500">
                {plan.price}
                <span className="text-base font-normal ml-1">
                  {plan.duration}
                </span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-md font-medium text-gray-300 my-4 leading-relaxed">
                {plan.description}
              </p>

              {/* Buy Now Button */}
              <button
                className="w-full sm:w-[147px] h-[48px] text-sm font-bold rounded-full group-hover:bg-[linear-gradient(90deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] group-hover:text-black px-6 py-2 mb-6
                bg-black text-white border border-yellow-800 shadow-md transition-all duration-300
                hover:bg-[linear-gradient(90deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)]
                hover:text-black hover:shadow-[0_0_6px_#FFD70066]"
              >
                Buy Now
              </button>

              {/* Features */}
              <ul className="space-y-3 text-sm text-gray-300">
                {plan.features.map((feature, i) => {
                  const icon = feature.split(" ")[0];
                  const text = feature.split(" ").slice(1).join(" ");

                  return (
                   <li key={i} className="flex items-start gap-3 group cursor-pointer transition-all duration-300">
  {/* Tick button with hover animation */}
  <div className="min-w-[24px] min-h-[24px] rounded-full bg-gray-300 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-[#452e06] group-hover:via-[#d1bf5a] group-hover:to-[#452e06]">
    <span className="text-sm font-bold text-black">✓</span>
  </div>

  {/* Icon + text */}
  <span className="flex items-start gap-2 font-medium text-gray-200 leading-snug">
    <span className="text-xl">{icon}</span>
    {text}
  </span>
</li>

                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
