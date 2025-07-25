import React from "react";
import chartImg from "../assets/cryptoCurrency/coin.png";

const WhatisCrypto = () => {
  return (
    <div className="bg-black w-full px-4 py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2">
          {/* Gradient Heading */}
          <h2
            className="text-[28px] sm:text-[32px] font-semibold leading-[36px] sm:leading-[40px] mb-4 font-poppins bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #281000 -17.24%, #C0971C 16.61%, #FFE976 48.47%, #C0971C 81.66%, #281000 115.52%)",
            }}
          >
            What is Cryptocurrency?
          </h2>

          {/* Description */}
          <p className="text-[#CCCCCC] text-base sm:text-lg font-poppins leading-relaxed">
            Cryptocurrency is a digital or virtual currency that uses blockchain technology for
            secure, decentralized transactions. Unlike traditional currencies, cryptocurrencies
            operate without a central authority and offer borderless, fast, and transparent trading.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="w-full lg:w-1/2 max-w-[500px] mx-auto">
          <img
            src={chartImg}
            alt="Cryptocurrency Chart"
            className="w-full h-auto rounded-[16px] object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatisCrypto;
