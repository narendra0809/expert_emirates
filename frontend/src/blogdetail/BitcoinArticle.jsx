import React from "react";
import btcImg from "../assets/blog/image7.png"; // ✅ Update path to your BTC chart image

const BitcoinArticle = () => {
  return (
    <div className="bg-white text-black min-h-screen flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-3xl">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-2 leading-snug">
          BITCOIN → Retest 86190. There are chances for growth
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-6">
          Published by RLinda • Crypto Technical Analysis
        </p>

        {/* Chart Image (same width as text) */}
        <img
          src={btcImg}
          alt="Bitcoin Chart"
          className="w-full max-h-[400px] sm:max-h-[500px] object-contain border rounded-md shadow mb-6"
        />

        {/* Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            BTCUSD is starting to show positive signs, but it is too early to talk about a change
            in the downtrend or a bullish rally. Strong resistance ahead…
          </p>

          <p>
            Against the background of everything that is happening, from a fundamental point of
            view, bitcoin in general has withstood the blows quite well and is gradually beginning
            to recover, but the situation for the crypto community as a whole has not changed in
            any way, the promises are not yet fulfilled. Bitcoin’s strengthening is most likely due
            to localized growth in indices and discussion of lower interest rates. But the focus is
            on the tariff war between China and the U.S., improved relations and lower tariffs
            could weaken bitcoin.
          </p>

          <p>
            Technically, we see that the price is moving beyond the resistance of the descending
            channel. And for a few days now, the price has been consolidating in front of the
            86190 level, and we have chances to see a rise to the resistance of the 88800 range,
            from which the future prospects will already depend.
          </p>

          <p className="font-semibold">Resistance levels: 86190, 88800, 91280</p>
          <p className="font-semibold">Support levels: 83170, 78780</p>

          <p>
            The price is slowly approaching the resistance 86190, consolidating without updating
            local lows, forming a pre-bullish consolidation. There is a probability of a
            breakout attempt. Breakout and consolidation of the price above 86190 may give a
            chance to rise to 88800.
          </p>

          <p>
            But regarding 88800 we will have to watch the price reaction. A sharp approach with
            the purpose of primary testing of the level may end in a false breakout and
            correction…
          </p>

          <p className="pt-2">Regards, RLinda</p>
          <p className="text-sm text-gray-500">© RLinda</p>
        </div>
      </div>
    </div>
  );
};

export default BitcoinArticle;
