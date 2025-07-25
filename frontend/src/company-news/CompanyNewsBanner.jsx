import React from "react";
import BannerBg from "../assets/company-news/image1.png";

const CompanyNewsBanner = () => {
  return (
    <div className="w-full bg-black flex justify-center items-center px-4 pt-28 pb-10">
      <div className="w-full max-w-[1150px] h-[300px] rounded-[20px] overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-center px-6 transition-transform duration-500 hover:scale-105"
          style={{
            backgroundImage: `url(${BannerBg})`,
          }}
        >
          {/* Heading */}
          <h2
            className="font-poppins font-semibold text-[28px] md:text-[40px] lg:text-[52px] leading-[100%] tracking-[0%] mb-4"
            style={{
              background:
                "linear-gradient(180deg, #281000 -59.46%, #C0971C 7.05%, #FFE976 69.64%, #C0971C 134.84%, #281000 201.35%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Company News
          </h2>

          {/* Paragraph */}
          <p className="text-white text-[16px] md:text-[18px] font-poppins font-normal leading-relaxed max-w-[900px]">
            Stay informed with the latest news, important developments, and articles featuring Expert Emirates and its subsidiaries. Here, we share our journey, milestones, and insights to keep you up-to-date with the dynamic world of forex trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyNewsBanner;
