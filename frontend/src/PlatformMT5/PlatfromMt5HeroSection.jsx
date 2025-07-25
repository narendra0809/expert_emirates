import React, { useState } from 'react';
import mt4Icon from '../assets/platformMT4/image1.png';
import mt5Icon from '../assets/platformMT4/image2.png';
import phonesImage from '../assets/platformMT4/mobile.png';

const PlatfromMt5HeroSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null); // null | 'mt4' | 'mt5'

  const getButtonStyle = (btn) => {
    const isHovered = hoveredBtn === btn;

    if (btn === 'mt4') {
      return isHovered
        ? 'bg-black text-white'
        : 'bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] text-black';
    }

    if (btn === 'mt5') {
      return isHovered
        ? 'bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] text-black'
        : 'bg-black text-white';
    }

    return '';
  };

  return (
    <div className="bg-black text-white px-4 md:px-8 lg:px-20 py-14 flex flex-col-reverse md:flex-row items-center justify-between gap-10 font-[Poppins]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h2
          className="text-[20px] sm:text-[20px] md:text-[20px] lg:text-[52px] font-semibold leading-[110%] font-poppins"
          style={{
              background: "linear-gradient(180deg, #281000 0%, #C0971C 5.5%, #FFE976 9.5%, #C0971C 98.5%, #281000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Trade with Confidence <br />on MT4 & MT5
        </h2>

        <p className="text-white text-[16px] sm:text-[18px] font-normal leading-[150%] font-poppins">
          At Expert Emirates, we empower our clients with access to two of the most
          advanced trading platforms in the industry: MetaTrader 4 (MT4) and MetaTrader 5 (MT5).
          These platforms are designed to enhance your trading experience, providing a comprehensive
          suite of tools and features to help you succeed in the financial markets.
        </p>

        {/* ✅ Styled Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {/* MT4 Button */}
          <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
            <button
              onMouseEnter={() => setHoveredBtn('mt4')}
              onMouseLeave={() => setHoveredBtn(null)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${getButtonStyle('mt4')}`}
            >
              <img src={mt4Icon} alt="MT4" className="w-5 h-5" />
              MT4 Platform
            </button>
          </div>

          {/* MT5 Button */}
          <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
            <button
              onMouseEnter={() => setHoveredBtn('mt5')}
              onMouseLeave={() => setHoveredBtn(null)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${getButtonStyle('mt5')}`}
            >
              <img src={mt5Icon} alt="MT5" className="w-5 h-5" />
              MT5 Platform
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 py-12 flex justify-center">
        <img
          src={phonesImage}
          alt="Mobile Trading View"
          className="w-[80%] max-w-[320px] md:max-w-[400px] lg:max-w-[450px] animate-smoothBounce"
        />
      </div>
    </div>
  );
};

export default PlatfromMt5HeroSection;
