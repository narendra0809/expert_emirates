import React from "react";
import arrowImg from "../../assets/arrow.png";
import bgImg from "../../assets/Rectanglecutomer.png";

export default function CustomerDashboard() {
  return (
    <div
      className="group flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-6 py-12 border border-gray-900 rounded-3xl transition-all duration-500 hover:border-yellow-500
        w-full max-w-[90%] md:max-w-[1200px] mx-auto"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* LEFT CONTENT */}
      <div className="w-full md:w-[65%] text-center md:text-left">
        <h1 className="text-xl md:text-xl font-bold text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#FFE976] group-hover:via-[#C0971C] group-hover:to-[#FFE976] group-hover:bg-clip-text group-hover:text-transparent">
          ABOUT US
        </h1>

        <p className="text-sm  mt-4 text-white leading-relaxed">
          AT EXPERT EMIRATES, WE DON’T JUST PROVIDE FOREX AND CRYPTO SIGNALS—
          WE UNLOCK PROFITABLE OPPORTUNITIES TAILORED FOR EVERY TRADER. BACKED
          BY CUTTING-EDGE AI, EXPERT ANALYSIS, AND MARKET PRECISION, OUR SIGNALS
          TURN UNCERTAINTY INTO CALCULATED SUCCESS.
        </p>

        {/* GOLD BUTTON DEFAULT, BLACK ON HOVER, NO SHADOW */}
        <div
          style={{
            background:
              "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
            padding: "2px",
            borderRadius: "9999px",
          }}
          className="inline-block mt-6"
        >
          <button
            className="w-40 h-11 rounded-full text-sm font-semibold tracking-wide transition-all duration-500"
            style={{
              background:
                "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
              color: "black",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "black";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)";
              e.currentTarget.style.color = "black";
            }}
          >
            About Us
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-[35%] flex justify-center md:justify-end">
        <img
          src={arrowImg}
          alt="Arrow"
          className="w-full max-w-[340px] h-auto transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
    </div>
  );
}
