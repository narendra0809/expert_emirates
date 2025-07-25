import React from "react";
import image10 from "../assets/blog/image10.png"; // Your BTC chart image

const BlogBitcoinDetailFinal = () => {
  return (
    <div className="bg-white text-black py-10 px-4 md:px-0">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          BITCOIN → Consolidation before the rally. 106K - 110K?
        </h1>

        {/* Date and Tag */}
        <div className="text-center text-sm text-gray-500 mb-6">
          14.05.2025 · CRYPTO FORECAST
        </div>

        {/* Centered Image */}
        <div className="flex justify-center mb-6">
          <img
            src={image10}
            alt="BTC chart"
            className="w-full rounded shadow-md"
          />
        </div>

        {/* Content */}
        <div className="text-sm md:text-base text-gray-800 leading-relaxed space-y-4">
          <p>
            BTCUSDT, after breaking out of consolidation at 97,850 and
            distributing to 104,300, has returned to a consolidation phase,
            which is generally a positive sign for possible continued growth.
          </p>

          <p className="italic font-medium">The growth of Bitcoin is linked to several reasons:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              General improvement in the global market situation — easing of trade conflicts;
            </li>
            <li>
              Expectations of a U.S. Fed rate cut; influx of investment into Bitcoin ETFs.
            </li>
          </ul>

          <p>
            Technically, we see the price breaking out of its local downtrend
            and entering a strong distribution phase. The northern train
            continues to pick up passengers.
          </p>

          <p>
            At this stage, I would like to draw your attention to the
            consolidation at 104300-103200. A rebound from resistance is
            currently forming, and we need to monitor the levels of 103800 -
            103000 - 102700. These are quite important areas of interest. A
            false breakdown (liquidity capture) may form before further growth.
            A return to resistance and the formation of pre-breakout
            consolidation, for example between 104300 and 103800, will only
            increase the chances of a breakout of resistance and move to 110K.
          </p>

          {/* Levels */}
          <p className="font-semibold">Resistance levels: 104300</p>
          <p className="font-semibold">
            Support levels: 103800, 103200, 102700
          </p>

          <p>
            The trend is bullish, with Bitcoin consolidating. The coin is not
            going to fall (at the moment), but to build up potential, the price
            may form a false breakdown of support (a deceptive maneuver) before
            continuing to rise. Retesting the 104300 level could lead to a
            breakout and upward distribution.
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

export default BlogBitcoinDetailFinal;
