import React from "react";
import image12 from "../assets/blog/image5.png"; // LINKUSDT chart image

const BlogLinkDetail = () => {
  return (
    <div className="bg-white text-black py-10 px-4">
      <div className="max-w-[768px] mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          LINKUSDT → Consolidation. One step away from a rally?
        </h1>

        {/* Date */}
        <div className="text-center text-sm text-gray-500 mb-6">
          13.05.2025 · CRYPTO FORECAST
        </div>

        {/* Chart Image */}
        <div className="mb-6">
          <img
            src={image12}
            alt="LINKUSDT Chart"
            className="w-full h-[200px] object-cover rounded shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="text-sm md:text-base text-gray-800 leading-relaxed space-y-4">
          <p>
            LINKUSDT entered a consolidation phase after breaking out of a
            downward channel. This is a fairly positive sign that buyers are
            building up momentum ahead of a possible breakout of resistance.
          </p>
          <p>
            Exit from the downward phase (channel), distribution, and transition
            of the market to a consolidation phase: 15.275 – 14.800. Bitcoin is
            forming positive dynamics, which supports altcoins. The local alt
            season may continue if Bitcoin continues to grow after breaking
            through 95K. If LINK breaks through the resistance level of 15.275,
            this move could trigger further growth.
          </p>

          <p className="font-semibold">
            Resistance levels: 15.275, 15.942
          </p>
          <p className="font-semibold">
            Support levels: 14.400, 14.266
          </p>

          <p>
            At the moment, the mood of altcoins depends on Bitcoin, as it’s
            receiving support and positive fundamental data in the US and the
            global economy. However, for LINK, the focus is on the current
            consolidation. If the resistance level is not broken on the first
            attempt, it may happen during the next retest. Before that, the
            price may be in consolidation support with a false breakdown, which
            could create an imbalance in favor of buyers, only increasing the
            chances of growth and a breakout of resistance, provided, of course,
            that the overall bullish trend continues.
          </p>
        </div>

        {/* Author Signature */}
        <div className="text-sm text-gray-600 mt-8 text-left">
          Best regards, <br />
          <strong>R. Linda</strong>
        </div>
      </div>
    </div>
  );
};

export default BlogLinkDetail;
