import React from "react";

const TrustSection = () => {
  return (
    <section className="bg-black text-white  pt-16 pb-6 px-6 md:px-12 text-left leading-relaxed" style={{ fontFamily: "sans-serif" }}>
      {/* Tagline */}
      <div className="inline-block bg-[#1F1D26] text-sm text-white px-4 py-2 rounded-full mb-6">
        Forex Signal Packages
      </div>

      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6 mt-4 tracking-widest">
        <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
          87,000+ Traders Trust Us 
        </span>{" "} –
        <br />
        Are You Ready to Level Up?
      </h2>

      {/* Subtext */}
      <p className="text-gray-200 max-w-4xl mt-7 text-base md:text-md leading-loose mb-4 tracking-widest">
        Take control of the Forex market with Expert Emirates! No more
        guesswork—just expert insights, powerful signals, and strategies that
        put you ahead of the game!
      </p>
    </section>
  );
};

export default TrustSection;
