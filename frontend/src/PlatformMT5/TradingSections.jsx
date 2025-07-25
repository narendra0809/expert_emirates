import React, { useState } from "react";
import mt5Image from "../assets/platformMT4/image6.png";
import mt5ImageHover from "../assets/platformMT4/image6-hover.png"; // Hover image

const TradingSections = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Gradient text style for paragraphs
  const gradientTextStyle = {
    background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0%",
  };

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 font-[Poppins]">
      {/* ========== What is MT5? ========== */}
      <div className="flex flex-col md:flex-row items-start gap-10 mb-16">
        <div className="w-full md:w-[70%]">
          <h2
            className="text-[28px] sm:text-[32px] font-semibold leading-[40px]"
            style={{
              background:
                "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What is MT5?
          </h2>

          <div className="mt-6 space-y-6">
            <p style={gradientTextStyle}>
              MetaTrader 5 (MT5) is a powerful, multi-asset trading platform
              designed for Forex, stocks, commodities, indices, and
              cryptocurrency trading. Developed by MetaQuotes, it offers
              advanced features, making it a superior choice for both beginner
              and professional traders.
            </p>

            <p style={gradientTextStyle}>
              MT5 provides enhanced charting tools, over 80 built-in technical
              indicators, multiple timeframes, and a depth-of-market (DOM)
              feature for better price transparency. It supports algorithmic
              trading through the MQL5 programming language, allowing traders to
              automate strategies using Expert Advisors (EAs).
            </p>
          </div>
        </div>

        {/* Hover Image */}
     <div className="w-full md:w-1/3">
  <img
    src={mt5Image}
    alt="MT5"
    className="w-full h-full object-cover rounded-xl"
  />
</div>

      </div>

      {/* Bottom Paragraphs */}
      <div className="space-y-6">
        <p style={gradientTextStyle}>
          Unlike its predecessor MT4, MT5 includes an economic calendar,
          integrated news, and improved order execution speeds. It also allows
          hedging and netting, giving traders more flexibility in risk
          management.
        </p>

        <p style={gradientTextStyle}>
          With VPS hosting, one-click trading, and a user-friendly interface,
          MT5 is a top choice for modern traders seeking efficiency, automation,
          and real-time market insights. Whether you're a scalper or long-term
          investor, MT5 delivers a seamless trading experience.
        </p>
      </div>
    </section>
  );
};

export default TradingSections;
