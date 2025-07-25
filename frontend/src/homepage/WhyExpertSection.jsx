import React from "react";

const WhyExpertSection = () => {
  return (
    <section
      className="w-full bg-black text-white py-10 sm:py-14 px-4 flex flex-col items-center gap-8"
      style={{ fontFamily: "Poppins" }}
    >
      {/* Top Button */}
      <button
        className="bg-black text-white px-6 sm:px-10 py-2 sm:py-3 border border-l-yellow-900 border-r-yellow-900 border-b-yellow-500 border-t-yellow-950 rounded-full text-sm sm:text-base tracking-wide"
      >
        Why Expert Emirates?
      </button>

      {/* Headings */}
      <div className="text-center max-w-2xl w-full">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide leading-snug sm:leading-relaxed">
          Signals Are Just the Start –
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 tracking-wide bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent leading-snug sm:leading-relaxed">
          We Turn Trades Into Triumphs
        </h2>
      </div>
    </section>
  );
};

export default WhyExpertSection;
