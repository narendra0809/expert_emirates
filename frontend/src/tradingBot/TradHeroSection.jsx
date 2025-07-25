import React from "react";
import bg from "../assets/tradingbot/image1.png";
import overlay from "../assets/tradingbot/image2.png";

const TradHeroSection = () => {
  return (
    <div className="w-full bg-black flex justify-center px-4 pt-24">
      <div className="relative w-full max-w-[1240px] h-[251px] rounded-[20px] overflow-hidden group">
        {/* ✅ Background Image with Zoom on Hover */}
        <img
          src={bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Centered Foreground Overlay + Text */}
        <div className="absolute inset-0 flex items-center justify-center mx-auto">
          <div className="relative w-full max-w-[1140px] h-[180px] flex justify-center">
            {/* ❌ Overlay doesn't zoom */}
            <img
              src={overlay}
              alt="Overlay"
              className="w-full h-full object-cover rounded-3xl"
            />

            {/* Text on Top */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-[28px] md:text-[40px] lg:text-[52px] font-poppins font-semibold leading-none text-center">
                Trading Bot
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradHeroSection;
