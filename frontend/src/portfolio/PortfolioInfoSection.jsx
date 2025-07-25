import React from "react";
import PortfolioImage from "../assets/portfolio/image1.png"; // image yahin rakhna

const PortfolioInfoSection = () => {
  return (
    <div className="w-full bg-black px-4 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2">
        {/* Gradient Yellow Title */}
        <h3
          className="text-lg mb-2"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "18px",
            background:
              "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          what is Portfolio Management?
        </h3>

        {/* White Heading */}
        <h2
          className="text-white mb-4"
          style={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "24px",
            lineHeight: "36px",
          }}
        >
          Balancing Your Investments for Optimal Growth
        </h2>

        {/* Grey Paragraph */}
        <p
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "28px",
            color: "#CCCCCC",
          }}
        >
          Portfolio management is the process of selecting and managing a mix of investments (like
          stocks, bonds, and cryptocurrencies) to achieve your financial goals. It involves
          deciding how much money to put into each type of investment, regularly reviewing their
          performance, and making adjustments to keep your portfolio aligned with your risk
          tolerance and investment objectives. The goal is to maximize returns while minimizing
          risk, ensuring your investments grow steadily over time.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={PortfolioImage}
          alt="Portfolio Management Graphic"
          className="w-full max-w-md rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default PortfolioInfoSection;
