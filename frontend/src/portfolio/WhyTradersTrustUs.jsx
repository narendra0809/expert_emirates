import React from "react";
import TrustedIcon from "../assets/portfolio/trusted.png";
import GlobalIcon from "../assets/portfolio/global.png";
import PerformanceIcon from "../assets/portfolio/performance.png";

const WhyTradersTrustUs = () => {
  const data = [
    {
      icon: TrustedIcon,
      title: "Most Trusted & Regulated Trading Services",
      desc: "We ensure secure and transparent trading with top-tier regulated partners and the best funded account programs in the industry. Our team has extensive experience in market analysis, risk management, and trade execution, ensuring maximum profitability for our clients.",
    },
    {
      icon: GlobalIcon,
      title: "Global Reach & Expert Support",
      desc: "With a strong international presence, we assist traders worldwide in navigating the financial markets. Our services are tailored to meet the needs of both beginners and experienced traders, helping them achieve consistent profits through expert insights and AI-powered automation.",
    },
    {
      icon: PerformanceIcon,
      title: "Daily Trading Volume & Performance",
      desc: "We deliver high-performance trading solutions with exceptional accuracy and record-breaking profitability. By leveraging institutional-grade trading tools and strategies, we help our clients scale their trading accounts while managing risk efficiently.",
    },
  ];

  return (
    <div className="bg-black w-full py-14 px-4 flex justify-center items-center">
      <div className="w-full max-w-[1250px]">
        {/* Heading */}
        <h2 className="text-center font-poppins font-semibold text-[28px] md:text-[32px] leading-[42px] tracking-wide">
          <span className="bg-gradient-to-b from-[#281000] via-[#C0971C] via-30% to-[#FFE976] bg-clip-text text-transparent">
            Why Thousands of Traders <br className="hidden md:block" />
            Trust Expert Emirates
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-white text-center text-sm md:text-base max-w-4xl mx-auto mt-4 px-2">
          We provide elite trading solutions with cutting-edge technology,
          professional strategies, and expert guidance. Our services empower
          traders with high-accuracy Forex, Commodities, and Crypto signals,
          advanced portfolio management, AI-driven trading bots, and funded
          account programs to help you trade with confidence.
        </p>

        {/* Cards */}
        <div className="mt-10 flex flex-col gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="border-l-0 border-r-0 border border-yellow-200 border-t border-b rounded-3xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center gap-6"
              style={{background:"rgba(18,17,23,1)"}}
            >
              {/* Icon */}
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex-shrink-0">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
              </div>

              {/* Divider - only for md and up */}
              <div className="hidden md:block w-[2px] h-[100px] bg-white" />

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-white text-base md:text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-[#CCCCCC] text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTradersTrustUs;
