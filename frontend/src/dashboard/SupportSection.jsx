import { useState } from "react";

const SupportSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full bg-black px-3 hide-scrollbar">
      <div
        className="w-full max-w-screen-2xl mx-auto bg-[#1D1B25] text-white rounded-xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 shadow-md flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6"
        role="region"
        aria-label="Support Section"
      >
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center bg-[linear-gradient(180deg,#281000_5.95%,#C0971C_29.93%,#FFE976_52.51%,#C0971C_76.02%,#281000_100%)] bg-clip-text text-transparent tracking-wide leading-snug">
          NEED HELP!
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-center font-medium leading-relaxed px-2">
          Contact our <span className="font-semibold">24/7 customer</span>
        </p>
        <p className="text-gray-400 text-sm md:text-base -mt-1">
          support center
        </p>

        {/* Gradient Button */}
        <div className="mt-3 p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`w-[160px] sm:w-[180px] md:w-[200px] h-[42px] sm:h-[44px] md:h-[46px] rounded-full font-bold text-sm sm:text-base transition duration-300 ${
              hovered
                ? "bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] text-black"
                : "bg-black text-white"
            }`}
          >
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
