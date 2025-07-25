import React from "react";
import { motion } from "framer-motion";
import Icon1 from "../assets/aboutus/image6.png";
import Icon2 from "../assets/aboutus/image7.png";
import Icon3 from "../assets/aboutus/image8.png";
import Icon4 from "../assets/aboutus/image9.png";

const cardData = [
  {
    icon: Icon1,
    title: "Innovative Trading Solutions",
    text: "We leverage market prediction-driven strategies to help traders anticipate and capitalize on opportunities in both short-term events and long-term economic shifts.",
  },
  {
    icon: Icon2,
    title: "Proactive Market Insights",
    text: "Never miss a trade! Our dedicated experts ensure real-time updates and strong follow-ups so you're always ahead of market movements.",
  },
  {
    icon: Icon3,
    title: "Premium, Error-Free Services",
    text: "Backed by a team of seasoned professionals, we provide a seamless trading experience with zero errors and unmatched accuracy.",
  },
  {
    icon: Icon4,
    title: "Personalized Support for Success",
    text: "At Expert Emirates, your success is our priority. We offer custom-tailored guidance to help you trade with confidence and achieve consistent profitability.",
  },
];

const MissionVisionSection = () => {
  return (
    <div className="w-full px-4 md:px-12 py-20 bg-black text-white font-[Poppins]">
      {/* Heading Section with animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-24 mt-14"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#281000] via-[#FFE976] to-[#281000]">
          Our Mission & Vision:
        </h2>
        <h3 className="text-[28px] sm:text-[32px] font-semibold text-white mt-5">
          Leading the Future of Trading
        </h3>
      </motion.div>

      {/* Cards Section */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[82px] sm:gap-[24px] lg:gap-10 mt-10">

  {cardData.map((card, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.15 }}
      viewport={{ once: true }}
      className="relative group p-6 rounded-xl text-center hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 border-2"
      style={{
  background:
    "linear-gradient(to bottom, #121117, #121117) padding-box, linear-gradient(to right, #C0971C, #FFE976, #C0971C) border-box",
  borderStyle: "solid",
  borderWidth: " 1.5px 0", 
  borderColor: "transparent",
  borderRadius: "0.75rem",
}}
    >
      {/* Icon Image */}
      <div className="absolute -top-[70px] left-1/2 -translate-x-1/2 w-[140px] h-[140px] transition-all duration-300 group-hover:-translate-y-2">
        <img
          src={card.icon}
          alt={card.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Card Content with Proper Spacing */}
      <div className="mt-20 flex flex-col items-center justify-center gap-4">
        {/* Title with gradient hover */}
        <h4
          className="text-lg font-semibold text-white transition-all duration-300
          group-hover:bg-gradient-to-t group-hover:from-yellow-300 group-hover:to-white
          group-hover:bg-clip-text group-hover:text-transparent"
        >
          {card.title}
        </h4>

        {/* Description */}
        <p className="text-sm text-[#CCCCCC]">{card.text}</p>
      </div>
    </motion.div>
  ))}
</div>


    </div>
  );
};

export default MissionVisionSection;
