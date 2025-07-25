import React from "react";
import mobile from "../assets/mobile.png";
import metaTrader4 from "../assets/metaTrader4.png";
import metaTrader5 from "../assets/metaTrader5.png";
export default function MobileTradingSection() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 font-poppins font-semibold text-[32px] leading-[42px] tracking-[0.12em]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Explore Our <br />
            <span className="text-4xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
              Mobile Trading Platforms
            </span>
          </h2>
          <p className="text-gray-300 my-5 font-poppins font-medium text-[16px] leading-[29px] tracking-[0.12em] mb-6 ">
            Trade Anytime, Anywhere: Experience Seamless Trading on Your Mobile
            Device
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Trade with Confidence on <br />
            <span className="font-semibold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">MT4 & MT5</span>
          </h3>
          <p className=" text-gray-300 my-5 font-poppins font-medium text-[16px] leading-[29px] tracking-[0.12em]">
            Access over 20,000 trading instruments—including Forex, metals,
            shares, indices, commodities, and cryptocurrencies—on our
            award-winning MT4 and MT5 mobile platforms. Enjoy lightning-fast
            nano-second execution and seamless trading anytime, anywhere!
          </p>

          <div className="flex items-center gap-6 mt-8 mb-8">
            <div className="text-text-center w-20 h-20  ">
              <img src={metaTrader4} className="w-full h-full object-center" />
            </div>
            <div className="text-center w-20 h-20 ">
              <img
                src={metaTrader5}
                alt="MetaTrader 5"
                className="w-full h-full object-center"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end relative animate-smoothBounce">
          <img
            src={mobile}
            alt="Mobile Trading Apps"
            className="max-w-full md:max-w-sm lg:max-w-md rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
