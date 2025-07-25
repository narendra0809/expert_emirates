import React from "react";
import brochureImage from "../assets/brochure.png";

const BrochureSection = () => {
  return (
    <div className="w-full bg-black px-4 sm:px-6 lg:px-10 py-10">
      <div className="group max-w-[1300px] mx-auto p-[2px] rounded-[20px] bg-[#1A1A1F] hover:bg-gradient-to-br from-yellow-600 via-[#c97a11] to-[#9f4c04] transition-all duration-500">
        {/* Inner Content */}
        <div className="bg-gradient-to-br from-[#1A1A1F] to-[#0F0F13] rounded-[18px] px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 mb-8 md:mb-0">
            <h2 className="text-white font-semibold text-[26px] sm:text-[32px] lg:text-[40px] font-poppins">
              Download the
            </h2>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 font-semibold text-[30px] sm:text-[36px] lg:text-[44px] font-poppins">
              Expert Emirates Brochure
            </h2>

            {/* Updated Golden Button */}
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
                className="rounded-full px-8 py-4 text-base font-bold font-poppins tracking-wide flex items-center justify-center gap-3 transition-all duration-300 text-black border-none"
                style={{
                  background:
                    "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "black";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.borderWidth = "1px";
                  e.currentTarget.style.borderStyle = "solid";
                  e.currentTarget.style.borderImage =
                    "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%) 1";
                  e.currentTarget.style.borderRadius = "9999px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)";
                  e.currentTarget.style.color = "black";
                  e.currentTarget.style.border = "none";
                }}
              >
                Download Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Section */}
         <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
  <img
    src={brochureImage}
    alt="Brochure"
    className="w-[85%] sm:w-[120%] md:w-[90%] lg:w-[100%] max-w-[400px] h-auto object-contain mt-6 sm:mt-0 md:-mt-16"
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default BrochureSection;
