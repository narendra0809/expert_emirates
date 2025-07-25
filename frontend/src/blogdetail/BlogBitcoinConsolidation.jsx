import React from "react";
import image13 from "../assets/blog/image6.png"; // Replace with actual image path

const BlogBitcoinConsolidation = () => {
  return (
    <div className="bg-white text-black py-10 px-4">
      <div className="max-w-[768px] mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          BITCOIN → Consolidation or reversal? Why is $95000 important?
        </h1>

        {/* Date */}
        <div className="text-center text-sm text-gray-500 mb-6">
          07.05.2025 · CRYPTO FORECAST
        </div>

        {/* Image */}
        <div className="mb-6">
          <img
            src={image13}
            alt="BTC Consolidation Chart"
            className="w-full h-[200px] object-cover rounded shadow-md"
          />
        </div>

        {/* Description */}
        <div className="text-sm md:text-base text-gray-800 leading-relaxed space-y-4">
          <p>
            BTCUSDT held up quite strongly during the market fall and largely
            weathered the storm, while the stock market and indices were in free
            fall. The improvement in the fundamental situation has once again
            heightened interest in the asset among traders and investors.
          </p>
          <p>
            Earlier, I pointed out that against the backdrop of falling markets
            (due to Trump’s policies and tariff wars), Bitcoin is holding up
            fairly well. It cannot be compared to gold, which maintains its
            status as a safe haven, but overall it has stayed out of the 75K
            risk zone.
          </p>
          <p>
            Countries are continuing negotiations in the US, which generally
            points to an improvement in the trade situation, but all attention
            remains on relations between China and the US, and a resolution may
            be close.
          </p>
          <p>
            Technically, on the oddly-weekly timeframe, the price has broken
            through the trend resistance and the asset has moved from the sell
            zone to the buy zone, which in general only increases interest in
            the flagship. Bitcoin is stuck in the 95K-97K range. A false
            breakout of resistance provokes a correction, and now we need to
            monitor where and when the correction will stop. This will show us
            important support that could become the basis for continuation.
          </p>

          {/* Levels */}
          <p className="font-semibold">Resistance levels: 95K, 100K, 102.5K</p>
          <p className="font-semibold">Support levels: 93.5, 93.2, 92, 91K</p>

          <p>
            To break through 95K and continue growing, Bitcoin must form
            consolidation. There is none at the moment, and a correction and
            halt may indicate the beginning of consolidation. However, the focus
            is on 93.5 – 92K. If the price manages to very within the local
            boundaries and continues to bounce off support and resistance, we’ll
            have a chance for a breakthrough and continued growth to 100K.
            Otherwise, Bitcoin may form a deeper correction, for example to 91–
            88K!
          </p>
        </div>

        {/* Author */}
        <div className="text-sm text-gray-600 mt-8 text-left">
          Best regards, <br />
          <strong>R. Linda</strong>
        </div>
      </div>
    </div>
  );
};

export default BlogBitcoinConsolidation;
