import React from "react";
import bitcoinImg from "../assets/buttonImage/Bitcoin.png"; // Replace with your actual image path
import StockMarcketChart from "../homepage/StockMarcketChart";
import CurrencyMarket from "../forex/CurrencyMarket";
import TrustSection from "../homepage/TrustSection";
import PricingSection from "../homepage/PricingSection";
import CyptoPricibgSection from "../homepage/CyptoPricibgSection";

const CryptoSection = () => {
  return (
    <>
      <section className="bg-black text-white  px-6 md:px-20 font-[Poppins]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl sm:text-3xl md:text-5xl font-semibold leading-tight">
              Invest in <br />
              <span className="bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-transparent bg-clip-text">
                Cryptocurrency Signals
              </span>
            </h2>
            <p className="mt-8 text-[18px] text-gray-300  sm:text-lg leading-relaxed max-w-[500px] tracking-widest">
              Join the digital currency revolution with our cryptocurrency
              signals. Our team provides accurate insights to help you navigate
              this volatile market with 85% accuracy.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={bitcoinImg}
              alt="Bitcoin"
              className="w-[350px] sm:w-[420px] object-contain"
            />
          </div>
        </div>
      </section>
      <StockMarcketChart isForex={false} />
      <CurrencyMarket isForex={false} />
      <TrustSection />
      <CyptoPricibgSection />
    </>
  );
};

export default CryptoSection;
