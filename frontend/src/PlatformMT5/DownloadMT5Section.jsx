import React, { useState } from "react";
import mt4DownloadImage from "../assets/platformMT4/image5.png";
import mt4DownloadImage1 from "../assets/platformMT4/image1.png";

const DownloadMT5Section = () => {
  const [hovered, setHovered] = useState(false);

  const getButtonStyle = (isHovered) => {
    return isHovered
      ? "bg-black text-white"
      : "bg-[linear-gradient(90deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_75%,#281000_100%)] text-black";
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-20 font-[Poppins]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2
            className="text-[32px] md:text-[42px] font-semibold leading-[100%]"
            style={{
              background:
                "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Download MT5 <br /> Trading Platform
          </h2>

          <p className="text-sm md:text-base text-gray-300">
            Select a Download Type as per your Device<br /> Operating System and
            Your Account regulations.
          </p>

          {/* ✅ Hero-style Button */}
          <div className="p-[2px] rounded-full inline-block bg-[linear-gradient(90deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_75%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${getButtonStyle(
                hovered
              )}`}
            >
              <img src={mt4DownloadImage1} alt="icon" className="w-5 h-5" />
              Download MT5 Platform
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1">
          <img
            src={mt4DownloadImage}
            alt="MT4 Download Illustration"
            className="w-full max-w-[500px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadMT5Section;
