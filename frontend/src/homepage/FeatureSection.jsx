import React, { useState } from "react";
import megaphone from "../assets/megaphone.png";
import folder from "../assets/folder.png";
import heartBox from "../assets/heart-box.png";
import rocket from "../assets/rocket.png";

const features = [
  {
    title: "Why Treasure Funded ?",
    icon: megaphone,
  },
  {
    title: "Account Management",
    icon: folder,
  },
  {
    title: "Support",
    icon: heartBox,
  },
];

export default function FeatureSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-black px-4 md:px-8 lg:px-10 py-14 font-[Poppins] mx-auto">
      {/* Heading */}
      <h2 className="text-white text-center font-bold text-[32px] leading-[100%] tracking-[0em] font-sans my-5">
        Choose Where To Go Next
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 flex-wrap mt-20">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative group w-full sm:w-[350px] h-[130px] rounded-2xl transition-transform duration-300 hover:-translate-y-2 mt-20"
          >
            <div
              className="h-full flex flex-col rounded-lg justify-center items-center text-center text-white transition-all duration-300"
              style={{ background: "#141414" }}
            >
              <div
                className="absolute inset-0 rounded-lg z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, #281000 -39.11%, #C0971C 3.81%, #FFE976 44.21%, #C0971C 86.29%, #281000 129.21%)",
                }}
              ></div>

              {/* Icon */}
              <div className="relative z-10 mb-2 -mt-28 group-hover:-mt-32 transition-transform duration-300 group-hover:-translate-y-2">
                <img src={item.icon} alt={item.title} className="h-[130px] w-auto" />
              </div>

              {/* Title */}
              <p className="relative z-10 text-[17px] font-bold font-sans px-4 text-transparent bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text transition-all duration-300 group-hover:bg-none group-hover:text-black">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-[#1D1B25] rounded-[20px] px-4 sm:px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* TEXT SECTION */}
        <div className="text-center md:text-left w-full md:w-3/5">
          <p className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-6 text-[24px] sm:text-[28px] md:text-[30px] leading-[1.4] tracking-[0.12em] font-bold font-sans">
            Want to get started?
          </p>

          {/* GOLD GRADIENT BUTTON LIKE HERO SECTION */}
          <div className="flex justify-center md:justify-start pb-5">
            <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#281000,#C0971C,#FFE976,#C0971C,#281000)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  hovered
                    ? "bg-black text-white"
                    : "bg-[linear-gradient(90deg,#281000,#C0971C,#FFE976,#C0971C,#281000)] text-black"
                }`}
              >
                Join Expert Emirates
              </button>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-[180px] sm:w-[200px] md:w-[220px] -mt-6 md:-mt-12">
          <img src={rocket} alt="rocket" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
