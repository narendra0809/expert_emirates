import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const positions = [
  "Sales and Account Manager",
  "Senior Sales Account Manager",
  "Cryptocurrency Sales Manager",
  "IT Service Lead",
  "Mobile App Developer",
  "Crypto Risk Manager",
];

export default function OpenPositions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      {/* Gradient Heading */}
      <h2
        className="text-[32px] font-bold leading-[42px] tracking-[0.12em] text-center mb-2"
        
      >
        See our <span className="text-[32px] font-bold leading-[42px] tracking-[0.12em] text-center mb-2 " style={{
          background:
            "linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Poppins",
        }}>Open Positions</span>
      </h2>

      <p className="text-center text-md text-gray-200 tracking-wider leading-normal mb-10">
        We frequently update our open positions
      </p>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {positions.map((title, index) => (
          <div
            key={index}
            className="bg-[#131014] rounded-full px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-[#1b171f] border border-gray-800 transition duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-sm text-gray-300 sm:text-base">{title}</span>
            {openIndex === index ? (
              <FaChevronUp className="text-sm" />
            ) : (
              <FaChevronDown className="text-sm" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
