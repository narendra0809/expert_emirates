import React from "react";

const PortfolioBottom = () => {
  return (
    <div className="w-full bg-black text-white px-4 sm:px-6 lg:px-20 py-14 font-[Poppins]">
      <div className="max-w-[1300px] mx-auto space-y-6">

        {/* Capsule Button */}
        <button className="px-5 py-2 rounded-full bg-[#1C1B20] text-[14px] sm:text-[15px] font-medium text-gray-300 border border-[#2f2f2f] shadow-md hover:bg-[#232228] transition-all">
          Forex Signal Packages
        </button>

        {/* Gradient Heading */}
        <h3 className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold leading-snug tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 drop-shadow-lg">
            87,000+ Traders Trust Us –
          </span>
          <br />
          <span className="text-white font-semibold">
            Are You Ready to Level Up?
          </span>
        </h3>

        {/* Description Paragraph */}
        <p className="text-[#c0c0c0] text-[15px] sm:text-[16px] leading-relaxed max-w-4xl tracking-wide">
          Take control of the Forex market with Expert Emirates! No more guesswork—
          just expert insights, powerful signals, and strategies that put you ahead of the game!
        </p>
      </div>
    </div>
  );
};

export default PortfolioBottom;
