import React from "react";
import { MdDiscount, MdDiamond } from "react-icons/md";
import { BiSolidCrown } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function PricingCard({ plan }) {
  // Choose icon based on plan type
  const getIcon = () => {
    if (plan.type === "Pro Plan") {
      return <BiSolidCrown className="text-2xl text-yellow-500" />;
    } else if (plan.type === "Ultra Plan") {
      return <MdDiamond className="text-2xl text-yellow-500" />;
    } else {
      return <MdDiscount className="text-xl rotate-90 text-yellow-500" />;
    }
  };

  return (
    <div
      className="group  bg-[#121117] min-h-[500px] w-full max-w-[400px] md:max-w-[420px] xl:max-w-[450px]
    border border-black hover:border-yellow-500 rounded-2xl 
    p-6 sm:p-7 md:p-8 shadow-lg flex flex-col justify-between transition-all duration-300"
    >
      {/* Plan Badge */}
      <div className="flex items-center gap-2 bg-[#1F1E25] rounded-full px-4 py-2 w-max mb-6 text-white">
        <span className="text-lg p-2 rounded-full bg-gray-800 -mt-1">
          {getIcon()}
        </span>
        <span className="text-lg font-semibold transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-yellow-950 group-hover:via-yellow-300 group-hover:to-yellow-900 group-hover:bg-clip-text group-hover:text-transparent">
          {plan.type}
        </span>
      </div>

      {/* Price */}
      <h2 className="text-xl md:text-2xl font-semibold transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-yellow-900 group-hover:via-yellow-300 group-hover:to-yellow-900 group-hover:bg-clip-text group-hover:text-transparent mb-2">
        $ {plan.price}
        <span className="text-sm font-normal ml-1">/{plan.duration}</span>
      </h2>

      {/* Description */}
      <p className="h-[80px] text-sm md:text-base font-medium text-gray-300 my-4 leading-relaxed">
        {plan.description}
      </p>

      {/* Buy Now Button */}
      <Link
        to="/dashboard/buy-plan"
        className="w-full h-[48px] text-sm font-bold rounded-full mb-6
        text-white border border-l-yellow-900 border-r-yellow-900 border-b-yellow-500 border-t-yellow-950
        bg-transparent hover:text-black
        hover:bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)]
        shadow-[0_0_6px_#FFD70066]
        transition-all duration-300 flex items-center justify-center text-center"
      >
        Buy Now
      </Link>

      {/* Features */}
      <ul className="space-y-3 text-sm text-gray-300">
        {plan?.features?.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-gray-300 group-hover:bg-gradient-to-t group-hover:from-[#452e06] group-hover:via-[#d1bf5a] group-hover:to-[#452e06] flex items-center justify-center transition-all duration-300">
              <span className="text-xs font-bold text-gray-800 group-hover:text-black">
                ✓
              </span>
            </div>
            <span className="font-medium text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
