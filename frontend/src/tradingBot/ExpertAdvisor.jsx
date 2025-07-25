import React from "react";
import chartImg from "../assets/forex/chart-image.png";

const ExpertAdvisor = () => {
  return (
    <div className="bg-black w-full px-4 py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2">
          {/* Gradient Heading */}
          <h2
            className="text-[28px] sm:text-[32px] font-semibold leading-[36px] sm:leading-[40px] mb-4 font-poppins bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #281000 -17.24%, #C0971C 16.61%, #FFE976 48.47%, #C0971C 81.66%, #281000 115.52%)",
            }}
          >
            Expert Advisor AI Trading Bot: Automate Your Trading for Consistent Profits
          </h2>

          {/* Description */}
          <p className="text-[#CCCCCC] text-base sm:text-lg font-poppins leading-relaxed">
            The Expert Advisor AI Trading Bot is an advanced automated trading system that uses
            artificial intelligence to analyze market data and execute trades on your behalf. It
            continuously monitors market trends, identifies profitable opportunities, and makes
            trades with precision and speed. This bot is designed to help you achieve consistent
            profits by leveraging sophisticated algorithms and machine learning, allowing you to
            trade with confidence and ease, even if you have limited time or trading experience.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="w-full lg:w-1/2 max-w-[500px] mx-auto">
          <img
            src={chartImg}
            alt="Expert Advisor AI Trading Bot Chart"
            className="w-full h-auto rounded-[16px] object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpertAdvisor;
