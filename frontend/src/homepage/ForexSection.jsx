import React from "react";
import goldImg from "../assets/gold.png";
import StockMarcketChart from "./StockMarcketChart";
import TrustSection from "./TrustSection";
import PricingSection from "./PricingSection";
import CurrencyMarket from "../forex/CurrencyMarket";

const ForexSection = () => {
  const [activeCategory, setActiveCategory] = React.useState("forex");

  const categories = [
    { key: "forex", label: "Forex" },
    { key: "gold", label: "GOLD" },
  ];

  return (
    <>
      <section
        className="w-full bg-black text-white py-14 px-12 sm:px-16 md:px-20 lg:px-24 xl:px-28 2xl:px-32"
        style={{
          fontFamily: "sans-serif",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 border-[#c8A127.50%]-[#666666.0%]">
          {/* Left Content */}
          <div className="max-w-[500px] flex flex-col gap-10">
            {/* Toggle Buttons */}
            <div className="flex gap-4">
              {categories.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition duration-300
    ${
      activeCategory === key
        ? "text-black bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)]"
        : "text-white bg-[var(--Dark-grey,#121117)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white"
    }
  `}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Heading */}

            <h2 className="text-5xl  font-bold leading-tight ">
              Invest in <br />
              <span
                className={`text-transparent bg-clip-text ${
                  activeCategory === "forex"
                    ? "bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent"
                    : "bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent"
                }`}
              >
                {activeCategory === "forex" ? "Forex Signals" : "Gold"}
              </span>
            </h2>

            {/* Description */}
            <p className="text-[20px] text-gray-200 leading-relaxed max-w-[500px] tracking-widest">
              {activeCategory === "forex"
                ? "Discover the power of our Forex signals, which boast an 85% accuracy rate. Our expert analysis and market insights help you make informed trading decisions."
                : "Gold (XAU/USD) offers top liquidity, tight spreads, and clear trends, attracting millions of traders daily. With $200B+ in daily volume, it’s a smart, strategic choice in any market."}
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full max-w-[480px]">
            <img
              src={activeCategory === "forex" ? "/images/image.png" : goldImg}
              alt={
                activeCategory === "forex" ? "Forex Signals Box" : "Gold Box"
              }
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <StockMarcketChart isForex={true} />
      <CurrencyMarket isForex={true} />

      <TrustSection />
      <PricingSection />
    </>
  );
};

export default ForexSection;
