import React from "react";
import worldMap from "../assets/map.png"; // Your map image path

const WorldMapLabels = () => {
  return (
    <div className="bg-black px-4 sm:px-8 md:px-8 lg:px-16 py-20 flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-4">
        Over 25+ Offices Worldwide
      </h1>

      {/* Paragraph */}
      <p className="w-full sm:w-5/6 md:w-3/4 text-center text-base font-medium text-white tracking-wide leading-relaxed mb-10">
        Expert Emirates operates more than 25+ offices across the globe. This extensive network not only serves a diverse international clientele but also collaborates with affiliates situated in key financial centers worldwide.
      </p>

      {/* Map Container */}
      <div className="relative w-full max-w-[1200px] mx-auto">
        <img
          src={worldMap}
          alt="World Map"
          className="w-full h-auto object-contain"
        />
        {/* Labels, Dots, or Tooltips can be added later here */}
      </div>
    </div>
  );
};

export default WorldMapLabels;
