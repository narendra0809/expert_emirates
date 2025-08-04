import React from "react";
import chartImage from "../assets/gold-chart.png";
import TradingViewWidget from "../components/TradingViewWidget";
export default function StockMarcketChart({ isForex }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-black">
      <div className="w-full">
        {/* <img src={chartImage} alt="Stock Market Chart" className='w-full h-auto' /> */}
        <TradingViewWidget isForex={isForex} />
      </div>
    </div>
  );
}
