import React from "react";
import image11 from "../assets/blog/image3.png"; // BTC image

const BlogBitcoinCorrection = () => {
  return (
    <div className="bg-white text-black py-10 px-4">
      <div className="max-w-[768px] mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          BITCOIN → Correction to the risk zone. Rise or fall?
        </h1>

        {/* Date */}
        <div className="text-center text-sm text-gray-500 mb-6">
          10.05.2025 · CRYPTO FORECAST
        </div>

        {/* Image */}
        <div className="mb-6">
          <img
            src={image11}
            alt="Bitcoin Risk Chart"
            className="w-full h-[200px] object-cover rounded shadow-md"
          />
        </div>

        {/* Content */}
        <div className="text-sm md:text-base text-gray-800 leading-relaxed space-y-4">
          <p>
            BTCUSDT has updated its local maximum to 97,500; the market
            structure is quite positive but still depends on the fundamental
            background and the behavior of the S&P 500.
          </p>
          <p>
            The fundamental reasons that influenced the growth are the
            improvement in the tariff situation in the US and relations with
            China. Bitcoin's growth strengthened as the S&P500 index rose,
            with which it has a fairly high correlation. In the second half
            of this week, the price broke out of the week consolidation,
            breaking through the resistance level of 95,500 and updating the
            local maximum. A correction is forming within the local upward
            channel.
          </p>
          <p>
            95,000 is the liquidity and risk zone. That is, if the bulls hold
            their defense above 95K during the retest, Bitcoin will continue
            to grow in the short and medium term. Otherwise, a break of 95K
            could trigger a drop to 92K–88K.
          </p>

          <p className="font-semibold">
            Resistance levels: 97,425, 99,475
          </p>
          <p className="font-semibold">
            Support levels: 95,500, 92,000
          </p>

          <p>
            All eyes are on the 95K support level, below which a huge
            liquidity pool has formed. Growth may be influenced by a retest
            (false breakout of support) and an imbalance of forces in the
            market. But we need to be careful: an actual retest and weak
            reaction to demand below 95K would raise the inability to continue
            growth and could trigger a correction and liquidation.
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

export default BlogBitcoinCorrection;
