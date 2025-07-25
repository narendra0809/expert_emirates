import React, { useState } from "react";
import mtImage from "../assets/platformMT4/image3.png";
import platformIcon from "../assets/platformMT4/image1.png"; // Icon for the button

const MTPlatformsSection = () => {
  const [hovered, setHovered] = useState(false);

  const buttonClass = hovered
    ? "bg-black text-white"
    : "bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] text-black";

  return (
    <section className="bg-black text-white font-[Poppins] py-12 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* ✅ Left: Bigger & Responsive Image */}
      <div className="w-full md:w-[45%] flex justify-center">
        <img
          src={mtImage}
          alt="MetaTrader Apps"
          className="w-[90%] max-w-[500px] sm:max-w-[450px] md:max-w-[480px]"
        />
      </div>

      {/* ✅ Right: Text Content */}
      <div className="w-full md:w-[55%] text-center md:text-left">
        <h2
          className="text-[28px] sm:text-[34px] md:text-[42px] leading-tight font-semibold"
          style={{
            background:
              "linear-gradient(180deg, #281000 -40.54%, #C0971C 15.28%, #FFE976 67.82%, #C0971C 122.55%, #281000 178.38%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MT4 Trading Platform
        </h2>
        <p className="font-poppins font-[600] text-[24px]" style={{ color: "rgba(255,255,255,1)" }}>
          Leading Trading and Analytical Technologies
        </p>

        <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
          MT4 has become one of the most popular trading platforms, offering cutting-edge trading and analytical tools. It is designed to provide traders with a robust and userfriendly environment for executing trades and analyzing financial markets.
        </p>

        {/* ✅ Styled Button */}
        <div className="mt-6 flex justify-center md:justify-start">
          <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-poppins font-semibold transition-all duration-300 ${buttonClass}`}
            >
              <img src={platformIcon} alt="Platform Icon" className="w-5 h-5" />
              MT4 Platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MTPlatformsSection;
