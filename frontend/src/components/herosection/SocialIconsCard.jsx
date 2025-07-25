import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import bgImage from "../../assets/Rectangle 83.png";

// Gradient fill defs
const GradientDefs = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFE976" />
        <stop offset="50%" stopColor="#C0971C" />
        <stop offset="100%" stopColor="#281000" />
      </linearGradient>
    </defs>
  </svg>
);

const SocialIconsCard = () => {
  return (
    <div className="w-full px-4 sm:px-0 sm:w-60 xl:w-70">
  <div className="relative group w-full h-80">

        {/* Golden Outline on Hover */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10 transition-all duration-500 opacity-0 group-hover:opacity-100"
          style={{
            border: "2px solid transparent",
            background:
              "linear-gradient(#000, #000) padding-box, linear-gradient(180deg, #FFE976, #C0971C, #281000) border-box",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>

        {/* Main Card */}
        <div
          className="relative z-20 w-full h-full rounded-2xl p-10 border border-gray-900 hover:border-yellow-600 
    transition-all duration-500
          transition-all duration-500 overflow-hidden flex flex-col justify-start items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <GradientDefs />

          {/* ICONS ROW 1 */}
          <div className="flex items-center justify-center gap-10 mt-2">
            {[FaInstagram, FaFacebookF].map((Icon, idx) => (
              <div
                key={idx}
                className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, #FFE976, #C0971C, #281000)",
                  boxShadow: "0 0 12px rgba(255, 217, 0, 0.6)",
                }}
              >
                <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  <Icon
                    className="text-3xl transition-transform duration-500 group-hover:scale-125"
                    style={{ fill: "url(#gold-gradient)" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ICONS ROW 2 */}
          <div className="flex items-center justify-center gap-10 mt-12">
            {[FaYoutube, FaXTwitter].map((Icon, idx) => (
              <div
                key={idx}
                className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, #FFE976, #C0971C, #281000)",
                  boxShadow: "0 0 12px rgba(255, 217, 0, 0.6)",
                }}
              >
                <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  <Icon
                    className="text-3xl  transition-transform duration-500 group-hover:scale-125"
                    style={{ fill: "url(#gold-gradient)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIconsCard;
