import React, { useState } from "react";
import comexImg from "../assets/gold/comex-chest.png";
import comexImgHover from "../assets/portfolio/image1.png"; // Hover image

const WhatIsComex = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-black text-white px-6 sm:px-6 pt-0 pb-6 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
       
 <div className="w-full lg:w-1/2">
          {/* Gradient Heading */}
          <h2
            className="text-[28px] sm:text-[32px] font-semibold leading-[36px] sm:leading-[40px] mb-4 font-poppins bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #281000 -17.24%, #C0971C 16.61%, #FFE976 48.47%, #C0971C 81.66%, #281000 115.52%)",
            }}
          >
            What is Gold?
          </h2>

          {/* Description */}
          <p
            className="text-[#CCCCCC] font-poppins"
            style={{
              fontWeight: 400,
              fontSize: "18px",
              letterSpacing: "0%",
            }}
          >
            Gold (XAU/USD) offers top liquidity, 
            tight spreads, and clear trends, 
            attracting millions of traders daily. 
            With $200B+ in daily volume, it’s a smart, 
            strategic choice in any market.
          </p>
        </div>

        {/* Image Section with Hover Effect */}
    <div className="w-full md:w-1/2 max-w-[400px] mx-auto">
  <img
    src={comexImg}
    alt="Comex Chest"
    className="w-full h-auto object-contain rounded-[10px] transition duration-300 ease-in-out"
  />
</div>

      </div>
    </section>
  );
};

export default WhatIsComex;
