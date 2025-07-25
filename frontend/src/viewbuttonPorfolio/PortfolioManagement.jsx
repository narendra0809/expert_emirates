import React from "react";
import portfolioImage from "../assets/buttonImage/image2.png"; // update path as needed

const PortfolioManagement = () => {
  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 lg:px-20  font-[Poppins]">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Heading */}
          <h2 className="text-5xl font-bold leading-snug">
  Invest in
  <br />
  <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
    Portfolio Management
  </span>
</h2>


          {/* Description */}
          <p className="mt-8 text-[18px] text-gray-300  sm:text-lg leading-relaxed  tracking-widest ">
            Our portfolio management services are <br className="hidden sm:block" />
            designed to align with your financial goals. We <br className="hidden sm:block" />
            create personalized strategies to optimize your <br className="hidden sm:block" />
            investment returns.
          </p>

          {/* Highlight Box (larger now) */}
          {/* <div>
            <div className="bg-[#121212] border border-[#2b2b2b] px-8 py-5 rounded-[14px] inline-block text-left shadow-md hover:shadow-lg transition">
              <span className="text-yellow-400 font-bold text-[18px]">
                Up to 1:500
              </span>
              <br />
              <span className="text-[#aaaaaa] text-[18px]">
                Highest levels of leverage
              </span>
            </div>
          </div> */}
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={portfolioImage}
            alt="Portfolio Management"
            className="w-full max-w-[460px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioManagement;
