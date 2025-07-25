import React, { useState } from "react";
import chartImg from "../assets/FundedAccounts/grouthcoin.png";
import chartImgHover from "../assets/portfolio/image1.png"; // Hover image

const Managment = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black w-full px-4 py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2">
          <h2
            className="text-[28px] sm:text-[32px] font-semibold leading-[36px] sm:leading-[40px] mb-2 font-poppins bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #281000 -17.24%, #C0971C 16.61%, #FFE976 48.47%, #C0971C 81.66%, #281000 115.52%)",
            }}
          >
            What is Portfolio Management?
          </h2>

          <h3 className="text-lg sm:text-xl text-white mb-4 font-medium font-poppins">
            Balancing Your Investments for Optimal Growth
          </h3>

          <p className="text-[#CCCCCC] text-base sm:text-lg font-poppins leading-relaxed">
            Portfolio management is the process of selecting and managing a mix of investments (like
            stocks, bonds, and cryptocurrencies) to achieve your financial goals. It involves
            deciding how much money to put into each type of investment, regularly reviewing their
            performance, and making adjustments to keep your portfolio aligned with your risk
            tolerance and investment objectives. The goal is to maximize returns while minimizing
            risk, ensuring your investments grow steadily over time.
          </p>
        </div>

        {/* Right: Image Section with Hover */}
       <div className="w-full lg:w-1/2 max-w-[500px] mx-auto">
  <img
    src={"/images/portfoliomanagment.png"}
    alt="Portfolio Chart"
    className="w-full h-auto rounded-[16px] object-cover shadow-md transition duration-300 ease-in-out"
  />
</div>

      </div>
    </div>
  );
};

export default Managment;
