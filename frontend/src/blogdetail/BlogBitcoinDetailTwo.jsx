import React from "react";
import image2 from "../assets/blog/image2.png"; // Bitcoin chart image

const BlogBitcoinDetailTwo = () => {
  return (
    <div className="bg-white text-black py-10 px-4">
      <div className="max-w-[700px] mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          BITCOIN → Consolidation in a triangle amid a BULLISH TREND
        </h1>

        {/* Tag and Date */}
        <div className="text-center text-sm text-gray-500 mb-6">
          17.05.2025 · CRYPTO FORECAST
        </div>

        {/* Image */}
        <img
          src={image2}
          alt="Bitcoin Chart"
          className="w-full h-[280px] object-cover rounded shadow-md mb-6"
        />

        {/* Description */}
        <div className="text-sm md:text-base text-gray-800 leading-relaxed space-y-4">
          <p>
            BTC is consolidating. A symmetrical triangle is forming against the
            backdrop of a bullish trend. Given the current technical nuances, we
            can bet that this consolidation is forming with the aim of
            continuing growth...
          </p>
          <p>
            Fundamental nuances have gradually improved over the past few
            weeks, and the cryptocurrency market has revived slightly.
            Technically, I like the mirror structure on D1. After strong growth,
            the price is not going to fall, consolidation is forming. The
            market is stable, after 2-3 weeks of consolidation, a shift is
            building for a jump.
          </p>
          <p>
            The price has repeated itself twice on D1, you can see how buying
            tails are forming downward with the consolidation, indicating that
            whales are buying up all attempts to fall, keeping the market away
            from risk zones. Accordingly, at the moment, I would say that
            consolidation may continue for some time and I do not rule out an
            attempt to retest the triangle support before growth, or entry into
            deeper zones to retest the decent liquidity zones of 1040.4 and
            1037.0 before continuing growth.
          </p>

          {/* Support / Resistance */}
          <p className="font-semibold">
            Resistance levels: 1038.5, 1044.4, 1050
          </p>
          <p className="font-semibold">
            Support levels: 1025, 1014.4, 1005
          </p>

          <p>
            A decline can be considered if the price breaks the triangle's
            support and sticks to 1014.4, forming a pre-breakdown consolidation
            (if there is no upward rebound).
          </p>
          <p>
            However, at the moment, intraday trading can be considered, i.e.,
            from the consolidation boundaries. A signal to exit the
            consolidation upwards and continue growth will be consolidation
            between 1025 and 1050 and compression towards the upper boundary.
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

export default BlogBitcoinDetailTwo;
