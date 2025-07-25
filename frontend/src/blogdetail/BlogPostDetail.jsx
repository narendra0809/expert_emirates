import React from "react";
import image1 from "../assets/blog/image1.png";

const BlogPostDetail = () => {
  return (
    <div className="bg-white text-black py-10 px-4">
      <div className="max-w-[700px] mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          PENDLEUSDT → Resistance retest. One step away from distribution
        </h1>

        {/* Sub Info */}
        <div className="text-center text-sm text-gray-500 mb-6">
          20.05.2025 · CRYPTO FORECAST
        </div>

        {/* Image with controlled height */}
        <img
          src={image1}
          alt="Pendle chart"
          className="w-full h-[280px] object-cover rounded shadow-md mb-6"
        />

        {/* Description */}
        <div className="text-sm md:text-base text-gray-800 leading-relaxed space-y-4">
          <p>
            PENDLEUSDT is preparing for distribution after a prolonged consolidation.
            The price is testing a key resistance level, which, if broken, will
            trigger a rally...
          </p>
          <p>
            The coin is breaking through the flat resistance and consolidating above
            the upper border of the range. The key level is at 4.400. If the bulls
            hold their ground above this level, the growth may continue.
          </p>
          <p>
            Bitcoin is showing bullish dynamics, which supports the altcoin market.
            The bullish trend may continue in altcoins as well. Pendle may move from
            consolidation to distribution.
          </p>

          <p className="font-semibold">Resistance levels: 4.32, 4.400</p>
          <p className="font-semibold">Support levels: 4.032, 3.622</p>

          <p>
            If the coin manages to consolidate above the key resistance level,
            thereby confirming the breakout, the price may move to aggressive growth.
            In this case, the target could be 4.800.
          </p>
        </div>

        {/* Author */}
        <div className="text-sm text-gray-600 mt-8">
          Best regards, <br />
          <strong>R. Linda</strong>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
