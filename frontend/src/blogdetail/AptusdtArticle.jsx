import React from "react";
import chartImg from "../assets/blog/image6.png"; // ✅ Update image path if needed

const AptusdtArticle = () => {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-3xl">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-2 leading-snug">
          APTUSDT → Retest of the liquidity zone. <br className="hidden sm:block" /> Downward trend
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-6">
          Published by RLinda • Crypto Technical Analysis
        </p>

        {/* Image INSIDE the same container (same width as text) */}
        <img
          src={chartImg}
          alt="APTUSDT Chart"
          className="w-full max-h-[400px] object-contain border rounded-md shadow mb-6"
        />

        {/* Content */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            APT failed to realize its potential. The price made a false breakout of resistance and
            formed a reversal pattern. Correction or continuation of the downtrend?
          </p>

          <p>
            Bitcoin is rebounding from resistance. Technically, the market may enter a correction
            or consolidation. Altcoins are reacting accordingly — correction.
          </p>

          <p>
            Within the downtrend but local ATH rally, APT failed to realize its potential and
            formed liquidity accumulation and a false breakout of the downtrend channel resistance
            before a possible decline…
          </p>

          <p className="font-semibold">
            Resistance levels: 5.2, 5.48
          </p>

          <p className="font-semibold">
            Support levels: 4.76, 4.48, 4.17
          </p>

          <p>
            A consolidation of the price below the trend resistance or below 5.20 could trigger a
            continuation of the global and local trends. The coin is likely to remain near the
            bottom and test new lows…
          </p>

          <p className="text-sm text-gray-500 pt-4">© RLinda</p>
        </div>
      </div>
    </div>
  );
};

export default AptusdtArticle;
