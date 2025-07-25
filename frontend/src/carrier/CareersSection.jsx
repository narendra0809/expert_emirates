import React from "react";
import card1 from "../assets/carrers/card1.png";
import card2 from "../assets/carrers/card2.png";
import card3 from "../assets/carrers/card3.png";
import card4 from "../assets/carrers/card4.png";
import card5 from "../assets/carrers/card5.png";

const cardData = [
  {
    title: "Diverse & Inclusive Workplace",
    text: "Collaborate in a multicultural\nenvironment with global experts.",
    img: card1,
  },
  {
    title: "Innovative Mindset",
    text: "Work on cutting-edge trading\ntechnologies and strategies.",
    img: card2,
  },
  {
    title: "Attractive Compensation",
    text: "Competitive salaries\nwith performance-based incentives.",
    img: card3,
  },
  {
    title: "Comprehensive Benefits",
    text: "Health insurance,\nwellness programs, and more.",
    img: card4,
  },
  {
    title: "Career Advancement",
    text: "Structured growth opportunities\nand leadership training.",
    img: card5,
  },
];

const CareersSection = () => {
  return (
    <section className="bg-black text-white font-poppins py-12 px-4 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-b from-transparent via-yellow-400 to-transparent bg-clip-text text-transparent">
          Join Our Elite Team at Expert Emirates!
        </h2>
        <p className="w-full sm:w-3/4 lg:w-1/2 text-center font-normal text-[18px] leading-[140%] tracking-[0.12em] mx-auto my-5">
          Your success starts with the right career path. Be part of a leading global trading firm that values innovation, talent, and growth.
        </p>
      </div>

      {/* Top 2 Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {cardData.slice(0, 2).map((card, index) => (
          <div
            key={index}
            className="flex bg-[#1D1B25] shadow-[1px_1px_0px_#F9E26D,-1px_-1px_0px_#F9E26D] rounded-xl p-5 gap-5 w-full md:w-1/2 items-center"
          >
            <div className="w-28 h-28 flex-shrink-0">
              <img src={card.img} alt={card.title} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-300 whitespace-pre-line">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.slice(2).map((card, index) => (
          <div
            key={index}
            className="bg-[#1D1B25] border-t border-b border-[#F9E26D80] rounded-xl p-5 flex flex-col items-center gap-4"
          >
            <div className="w-28 h-28">
              <img src={card.img} alt={card.title} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-lg font-semibold text-center">{card.title}</h3>
            <p className="text-sm text-gray-300 text-center whitespace-pre-line">{card.text}</p>
          </div>
        ))}
      </div>

      {/* Apply Button */}
      <div className="text-center mt-10">
        <button
          className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full px-12 py-3 font-bold text-xl transition-all hover:scale-105 "
        >
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CareersSection;
