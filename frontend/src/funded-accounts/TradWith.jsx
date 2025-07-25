import React, { useState } from "react";
// import chartImg from "../assets/forex/chart-image.png";
import chartImgHover from "../assets/portfolio/image1.png"; // Add hover version
import chartImg from "../assets/FundedAccounts/grouthcoin.png";

const TradWith = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black w-full px-4 py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2">
          <h2
            className="text-[28px] sm:text-[32px] font-semibold leading-[36px] sm:leading-[40px] mb-5 font-poppins bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #281000 -17.24%, #C0971C 16.61%, #FFE976 48.47%, #C0971C 81.66%, #281000 115.52%)",
            }}
          >
            Trade with Confidence through Our Funded Accounts Program
          </h2>

          <p
            className="text-[#CCCCCC] text-base sm:text-lg font-poppins leading-relaxed"
            style={{
              fontWeight: 400,
              letterSpacing: "0.2px",
            }}
          >
            We specialize in assisting clients in clearing their funded accounts from partnered firms.
            This program allows you to trade with confidence, minimizing your financial risk while maximizing your trading potential.
          </p>
        </div>

        {/* Right: Image Section with Hover Effect */}
        <div className="w-full lg:w-1/2 max-w-[500px] mx-auto">
  <img
    src={chartImg}
    alt="Forex Chart"
    className="w-full h-auto rounded-[16px] object-cover shadow-md transition duration-300 ease-in-out"
  />
</div>

      </div>
    </div>
  );
};

export default TradWith;
