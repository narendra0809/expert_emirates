import React, { useState } from "react";
import mt5Image from "../assets/platformMT4/image6.png";
import mt5ImageHover from "../assets/platformMT4/image6-hover.png";

const MT4TradingSections = () => {
  const [isHovered, setIsHovered] = useState(false);

  const paragraphStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0%",
    background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 font-[Poppins]">
      {/* ========== What is MT4? ========== */}
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
            Expert Emirates: Your Elite Trading Team
          </h2>

          <div className="mt-6 space-y-6">
            <p style={paragraphStyle}>
              MetaTrader 4 (MT4) is a powerful and widely used trading platform
              designed for Forex, commodities, indices, and cryptocurrency
              trading. Launched in 2005 by MetaQuotes Software, it has become
              the industry standard for both beginner and professional traders.
            </p>

            <p style={paragraphStyle}>
              MT4 offers a user-friendly interface with advanced charting tools,
              technical indicators, and automated trading capabilities through
              Expert Advisors (EAs). Traders can execute orders with one-click
              trading, set stop-loss and take-profit levels, and analyze market
              trends using over 80 built-in technical indicators.
            </p>
          </div>
        </div>

        {/* Hover Image Section */}
      <div className="w-full md:w-1/3">
  <img
    src={mt5Image}
    alt="MT4"
    className="w-full h-full object-cover rounded-xl"
  />
</div>

      </div>

      {/* Bottom Paragraphs */}
      <div className="space-y-6">
        <p style={paragraphStyle}>
          One of the key features of MT4 is its algorithmic trading capability,
          which allows users to create and run automated trading strategies.
          The platform also supports VPS hosting for uninterrupted trading and
          provides access to a vast library of custom indicators and scripts.
        </p>

        <p style={paragraphStyle}>
          Additionally, MT4 includes a multi-timeframe charting system,
          real-time price quotes, and an integrated economic calendar for
          fundamental analysis. Traders can use customizable alerts and push
          notifications to stay updated on market movements.
        </p>
      </div>
    </section>
  );
};

export default MT4TradingSections;
