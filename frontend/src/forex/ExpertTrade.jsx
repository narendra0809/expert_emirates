import React from "react";
import icon from "../assets/forex/forex-icon.png"; // Replace with your actual path

const ExpertTrade = () => {
  return (
    <div className="w-full px-4 py-10 bg-black">
      <div className="max-w-[1240px] mx-auto">
        <div className="relative rounded-[20px] p-[2px] group transition-all duration-300">
          {/* Border gradient on hover */}
          <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[#281000] via-[#C0971C] to-[#281000]" />

          {/* Inner Content Box */}
          <div className="relative bg-[#121117] rounded-[20px] px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 border border-[#2C2C2C] group-hover:border-transparent transition-all duration-300 z-10">
            {/* Left Section: Heading + Description */}
            <div className="flex-1 text-center md:text-left">
              <h2
                className="text-[32px] sm:text-[36px] md:text-[42px] leading-[1.2] font-poppins font-semibold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 75%, #281000 100%)",
                }}
              >
                Trade Forex with
              </h2>
              <h2
                className="text-[32px] sm:text-[36px] md:text-[42px] leading-[1.2] font-poppins font-semibold mb-4 text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 75%, #281000 100%)",
                }}
              >
                Expert Emirate
              </h2>

              <p className="text-[#CCCCCC] text-sm sm:text-base font-poppins max-w-xl mx-auto md:mx-0">
                Master the Markets with 85% Accurate Signals and Unmatched Expertise.
              </p>
            </div>

            {/* Right Section: Icon */}
            <div className="flex-shrink-0">
              <img
                src={icon}
                alt="Trade Icon"
                className="w-[200px] sm:w-[150px] md:w-[180px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertTrade;
