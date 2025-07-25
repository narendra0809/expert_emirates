import React from "react";
import chartImg from "../assets/forex/chart-image.png"; // Replace with your actual image path

const ForexInfo = () => {
  return (
    <div className="bg-black w-full px-4 py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
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
            What is Forex?
          </h2>

          {/* Description */}
          <p
            className="text-[#CCCCCC] font-poppins"
            style={{
              fontWeight: 400,
              fontSize: "18px",
              letterSpacing: "0%",
            }}
          >
            Forex (Foreign Exchange) is the global marketplace where currencies are bought and sold.
            With a daily trading volume of over $7 trillion, it is the largest and most liquid financial market in the world.
            Traders profit by speculating on currency price movements, leveraging economic trends, and global events.
            Unlike stock markets, Forex operates 24 hours a day, 5 days a week, offering endless trading opportunities.
            Whether you're a beginner or a pro, mastering Forex can unlock financial growth and independence.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="w-full lg:w-1/2 max-w-[500px] mx-auto">
          <img
            src={"/images/657c96b5e555b1fb106ef36ffea11c9f995db4d9.png"}
            alt="Forex Chart"
            className="w-full h-auto rounded-[16px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ForexInfo;
