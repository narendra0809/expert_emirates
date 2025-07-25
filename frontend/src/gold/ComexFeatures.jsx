// src/components/ComexFeatures.jsx
import React from "react";
import volatilityIcon from "../assets/gold/comex-trading/image1.png";
import goldSilverIcon from "../assets/gold/comex-trading/image2.png";
import leverageIcon from "../assets/gold/comex-trading/image3.png";

const features = [
  {
    icon: volatilityIcon,
    title: "Hedge Against Market Volatility",
    desc: "Protect your portfolio from price fluctuations in the commodities market.",
  },
  {
    icon: goldSilverIcon,
    title: "Trade Gold & Silver with Tight Spreads",
    desc: "Enjoy minimal spreads and maximum liquidity for smooth execution.",
  },
  {
    icon: leverageIcon,
    title: "Leverage Up to 500:1",
    desc: "Amplify your trading potential with high leverage and low margin requirements.",
  },
];

const ComexFeatures = () => {
  return (
    <div className="bg-black text-white font-poppins py-12 px-4">
      {/* Gradient Heading */}
      <h2
        className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 leading-snug"
        style={{
          background:
            "linear-gradient(180deg, #281000 0%, #C0971C 27.62%, #FFE976 53.63%, #C0971C 80.71%, #281000 108.33%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        With Gold trading, you can:
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map(({ icon, title, desc }) => (
        <div
  key={title}
  className="rounded-xl px-6 py-10 text-center relative overflow-hidden min-h-[300px] flex flex-col justify-start border-2"
  style={{
    background: "linear-gradient(rgba(18,17,23,1), rgba(18,17,23,1)) padding-box, linear-gradient(to right, #C0971C, #FFE976, #C0971C) border-box",
    borderRadius: "0.75rem", // rounded-xl
    border: "2px solid transparent", // Required for gradient border to show
  }}
>
  <img
    src={icon}
    alt={title}
    className="mx-auto mb-5 w-20 h-20 sm:w-24 sm:h-24 object-contain relative z-10"
  />
  <h3 className="text-lg sm:text-xl font-bold mb-2 relative z-10">
    {title}
  </h3>
  <p className="text-sm sm:text-base text-gray-300 relative z-10">
    {desc}
  </p>
</div>

        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button
          className="px-6 py-2 rounded-full font-semibold text-black shadow-lg hover:scale-105 transition"
          style={{
            background:
              "linear-gradient(180deg, #281000 0%, #C0971C 27.62%, #FFE976 53.63%, #C0971C 80.71%, #281000 108.33%)",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Join Expert Emirates
        </button>
      </div>
    </div>
  );
};

export default ComexFeatures;
