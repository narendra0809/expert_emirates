
import React from "react";
import icon1 from "../../assets/heroSectionImages/image 12.png";
import icon2 from "../../assets/heroSectionImages/image 11.png";
import icon3 from "../../assets/heroSectionImages/image 10.png";
import bgImage from "../../assets/Rectanglebg.png";

const PricingCard = () => {
  return (
    <div className="xl:w-[620px] lg:w-[320px] md:w-[350px] w-full h-[350px]  flex justify-start items-center py-8  sm:px-4 px-0">
      <div
        className="group relative  h-[360px] flex justify-center items-center py-3 px-4">
      <div
        className="group relative w-full h-full rounded-2xl overflow-hidden px-4 py-6 sm:p-6 border border-gray-900 hover:border-yellow-600 transition-all duration-500 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Golden Glowing Icons with Full Golden Look */}
        <div className="absolute top-4 right-4 flex flex-row z-10">
          {[icon1, icon2, icon3].map((icon, i) => (
            <div
              key={i}
              className={`w-9 h-9 md:w-12  md:h-12 rounded-full flex items-center justify-center ${
                i > 0 ? "-ml-3" : ""
              } transition-transform duration-500 group-hover:scale-110`}
              style={{
                background:
                  "linear-gradient(180deg, #FFE976, #C0971C, #281000)",
                boxShadow: "0 0 12px rgba(255, 217, 0, 0.6)",
              }}
            >
              <img
                src={icon}
                alt={icon-`${i}`}
                className="w-6 h-6 transition-transform duration-500 group-hover:scale-125"
                style={{
                  filter:
                    "brightness(1.1) saturate(120%) sepia(100%) hue-rotate(-15deg) contrast(1.2)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-white text-left  lg:py-6">
          <h2 className="text-md sm:text-xl md:text-3xl  lg:text-xl font-bold mb-3 sm:mt-0 mt-3 leading-snug">
            <span
              className="group-hover:text-transparent bg-clip-text transition-all duration-500"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #281000 -17.24%, #C0971C 16.61%, #FFE976 48.47%, #C0971C 81.66%, #281000 115.52%)",
              }}
            >
              GET TO KNOW OUR <br />
              PLANS AND PRICING
            </span>
          </h2>

       <p className="text-sm md:text-base mt-4 text-white leading-relaxed">
  YOUR TRADING DESERVES THE BEST — DISCOVER OUR ULTRA-LOW PRICING, TRUSTED BY PROFESSIONALS IN FOREX, GOLD & CRYPTO".
</p>


          {/* CTA Button (golden border + hover label) */}
          <div className="flex sm:mt-10 mt-16">
            <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)]">
              <button className="w-[130px] h-[52px] rounded-full bg-black text-white text-sm font-medium tracking-wider relative overflow-hidden transition-all duration-500 hover:text-black hover:bg-[linear-gradient(90deg,#281000,#C0971C,#FFE976,#C0971C,#281000)]">
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Pricing
                </span>
                <span className="group-hover:opacity-0 transition-opacity duration-500">
                  Plan
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PricingCard;