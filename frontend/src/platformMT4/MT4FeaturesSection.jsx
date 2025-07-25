import React from "react";
import mt4Image from "../assets/platformMT4/image4.png";
import checkIcon from "../assets/review/check-icon.png"; // ✅ import your bullet image

const MT4FeaturesSection = () => {
  return (
    <section
      className="bg-black text-white py-16 px-4 md:px-10 lg:px-16 font-[Poppins]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Heading */}
      <h2
        className="text-center text-[32px] md:text-[42px] font-semibold leading-[100%] mb-12"
        style={{
          background:
            "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        MT4 Platform Features
      </h2>

      {/* Gradient Border Wrapper with Rounded Corners */}
      <div
        className="max-w-[1300px] mx-auto p-[2px] rounded-[20px]"
        style={{
          background: "linear-gradient(144.59deg, #666666 0%, #000000 99.55%)",
        }}
      >
        {/* Inner Content Box */}
        <div className="bg-[#121117] rounded-[20px] p-6 md:p-10 flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left Column */}
          <div className="flex-1 space-y-6 text-sm md:text-base">
            <FeatureBlock
              title="Tradable Products:"
              items={[
                "Forex, Metals, Shares, Indices, Commodities, Cryptocurrencies",
              ]}
            />
            <FeatureBlock
              title="Execution Type:"
              items={[
                "Market Order",
                "Market depth of the latest price quotes",
                "Alert notifications to track important market events",
                "80+ technical analysis indicators and analytical tools",
              ]}
            />
            <FeatureBlock
              title="Maximum Lots per Click:"
              items={[
                "30 for Forex",
                "10 for Metals",
                "5 for Shares, Indices, Commodities, and Cryptocurrencies",
              ]}
            />
          </div>

          {/* Center Image */}
          <div className="flex-1 text-center">
            <img
              src={mt4Image}
              alt="MT4 Phones"
              className="w-full max-w-[280px] mx-auto animate-smoothBounce"
            />
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6 text-sm md:text-base">
            <FeatureBlock
              title="Minimum Lots per Click:"
              items={[
                "0.01 for Forex & Metals",
                "0.1 for Shares, Indices, Commodities, and Cryptocurrencies",
                "Powerful Algorithmic Trading with Built-in MQL5 Development Environment",
              ]}
            />
            <FeatureBlock
              title="Stop Out Level:"
              items={[
                "50%",
                "One-Click Trading for faster execution",
                "VPS Hosting for seamless trading",
                "Full EA (Expert Advisor) Functionality",
                "Advanced Fundamental Analysis including financial news & economic calendar",
                "Social Trading Functionality to follow expert traders",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Updated FeatureBlock with image icon
const FeatureBlock = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <img
              src={checkIcon}
              alt="icon"
              className="w-[16px] h-[16px] mt-[5px]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MT4FeaturesSection;
