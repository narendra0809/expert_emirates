import React from "react";
import moneyBagImg from "../assets/copyimage/coin.png"; // ✅ Replace with your actual path

const WhatIsCopyTrading = () => {
  return (
    <section className="bg-black text-white w-full px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT: TEXT */}
        <div className="flex-1 text-left">
          <h2 className="text-[32px] md:text-[40px] font-extrabold leading-snug mb-6">
            <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent ">
              What is Copy Trading
            </span>
          </h2>
          <p className="text-[#d1d5db] text-base md:text-lg leading-relaxed tracking-wide max-w-2xl">
            Copy trading is like having a cheat sheet in the world’s biggest
            exam hall, but legally! Imagine you’re at a massive poker game, and
            instead of trying to figure out the best moves yourself, you peek at
            the cards of the smartest player in the room and mimic their every
            bet. It’s like being a karaoke singer who hits all the right notes
            because you’re following a superstar. You get to ride the coattails
            of trading geniuses, hoping their magic rubs off on your portfolio.
            Just remember, even the best can have an off day, so don’t throw all
            your chips in without a backup plan!
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={moneyBagImg}
            alt="money bag"
            className="w-[260px] md:w-[340px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsCopyTrading;
