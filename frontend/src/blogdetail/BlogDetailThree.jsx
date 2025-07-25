import React from "react";
import image9 from "../assets/blog/image9.png"; // DOGE chart image

const BlogDetailThree = () => {
  return (
    <div className="bg-white text-black py-10 px-4">
      <div className="max-w-[700px] mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          DOGE → Retest of the panic zone. One step away from a downtrend
        </h1>

        {/* Date and Tag */}
        <div className="text-center text-sm text-gray-500 mb-6">
          02.05.2025 · CRYPTO FORECAST
        </div>

        {/* Image */}
        <img
          src={image9}
          alt="DOGE Chart"
          className="w-full h-[280px] object-cover rounded shadow-md mb-6"
        />

        {/* Description */}
        <div className="text-sm md:text-base text-gray-800 leading-relaxed space-y-4">
          <p>
            DOGEUSDT is facing selling pressure. After distribution (pump), the
            price enters a correction phase (dump) and storms the panic zone, a
            breakout of which could intensify an uncontrolled decline.
          </p>
          <p>
            DOGEUSDT squandered all the potential accumulated in late April and
            early May. The distribution ended in the 0.2200 zone, after which
            the coin entered a correction phase. At the moment, the coin is
            testing the panic zone of 0.2140.
          </p>
          <p>
            All attention is on the base of the triangle at 0.2140. This is the
            panic zone. When the support breaks, buyers will be liquidated, and
            sellers may increase sales, which could trigger a bearish momentum.
          </p>

          <p className="font-semibold">Resistance levels: 0.222, 0.2307</p>
          <p className="font-semibold">Support levels: 0.2145, 0.2135</p>

          <p>
            The main idea is a continuation of the decline. The trigger is a
            breakdown of support at 0.2135 and consolidation of the price below
            this zone, only in this case will the price continue to fall.
          </p>

          <p>
            <em>
              ‼ The structure will be broken if the price reverses and
              consolidates above 0.222 and confirms the bullish sentiment with
              price consolidation above 0.23, in which case we will again
              consider growth.
            </em>
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

export default BlogDetailThree;
