import React from "react";
import image10 from "../assets/blog/image10.png"; // SUIUSDT image

const BlogSuiDetail = () => {
  return (
    <div className="bg-white text-black py-10 px-4">
      <div className="max-w-lg mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          SUIUSDT → False breakdown of support before growth
        </h1>

        {/* Date and Tag */}
        <div className="text-center text-sm text-gray-500 mb-6">
          21.06.2025 · CRYPTO FORECAST
        </div>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src={image10}
            alt="SUIUSDT Chart"
            className="w-full h-auto max-h-[420px] rounded shadow-md object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="text-sm md:text-base text-gray-800 leading-relaxed space-y-4">
          <p>
            SUI has entered a consolidation phase within a bullish trend. The chart
            shows a zone of interest and a trigger area that are worth paying
            attention to...
          </p>
          <p>
            The coin looks quite positive. An upward trend is forming, which is
            also supported by the growth of Bitcoin and a relatively positive
            fundamental background.
          </p>
          <p>
            Technically, SUI is consolidating between 4.110 and 3.811. Below the
            support level, a huge liquidity pool has formed, which has not yet been
            tested. There is a high probability of a false breakdown before the
            growth continues, but if the market turns out to be more aggressive,
            buyers may not let the price fall to 3.811, in which case we can
            consider a breakout of the resistance at 4.11 / 4.275 and consolidation
            of the price above these levels with the aim of continuing growth.
          </p>

          <p className="font-semibold">Support levels: 3.811, 3.627</p>
          <p className="font-semibold">Resistance levels: 4.11, 4.275</p>

          <p>
            The movement of Bitcoin shows that the market is gathering liquidity as
            part of a local correction against the backdrop of a bullish trend.
            Yesterday, we all witnessed a local liquidation, but there are no
            reasons for a decline yet. SUI, in an ideal scenario, may test support
            at 3.811 and form a false breakdown before continuing to grow.
          </p>
        </div>

        {/* Author Signature */}
        <div className="text-sm text-gray-600 mt-8">
          Best regards, <br />
          <strong>R. Linda</strong>
        </div>
      </div>
    </div>
  );
};

export default BlogSuiDetail;
