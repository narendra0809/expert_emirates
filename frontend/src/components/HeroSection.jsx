/* eslint-disable no-unused-vars */
import { useState } from "react";
import video from "../assets/Expert_Emirates.mp4";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const [hoveredBtn, setHoveredBtn] = useState(null); // null | 'btn1' | 'btn2'
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const getButtonStyle = (btn) => {
    const isHovered = hoveredBtn === btn;

    if (btn === "btn1") {
      // START FREE TRIAL (default gradient)
      return isHovered
        ? "bg-black text-white"
        : "bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] text-black";
    }

    if (btn === "btn2") {
      // EXPLORE OUR SERVICES (default black)
      return isHovered
        ? "bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] text-black"
        : "bg-black text-white";
    }

    return "";
  };

  return (
    <section className="relative w-full min-h-screen pt-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={video}
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 md:px-16 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-left"
        >
          {/* Small Tagline Button */}
          <div className="inline-flex items-center justify-center my-9">
            <div className="inline-block rounded-full bg-gradient-to-b from-[#7C4B00] to-[#FFE9A0] p-[1px]">
              <button className="rounded-full bg-[#0F0F0F] px-6 py-[10px] text-white font-poppins font-medium text-base leading-[100%] tracking-[0.12em]">
                Turning Hopes Into Reality
              </button>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-white font-poppins font-bold text-[32px] leading-[42px] tracking-wider my-3">
            Elevate Your{" "}
            <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
              Trading Game
            </span>{" "}
            with Our{" "}
            <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
              Forex Signals
            </span>{" "}
            and Services
          </h1>

          {/* Description */}
          <p className="text-white font-inter font-normal text-[16px] leading-[22px] tracking-[0.12em]">
            Join the worldwide network of profitable traders with the best in
            forex expertise!
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 flex-wrap">
            {/* START FREE TRIAL (default: gradient) */}

            <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
              <button
                onMouseEnter={() => setHoveredBtn("btn1")}
                onMouseLeave={() => setHoveredBtn(null)}
                onClick={() => navigate("/dashboard")}
                className={`min-w-[140px] md:min-w-[165px] h-[39px] px-[18px] py-[7px] rounded-full font-bold text-sm font-poppins transition duration-300 ${getButtonStyle(
                  "btn1"
                )}`}
              >
                START FREE TRIAL
              </button>
            </div>

            {/* EXPLORE OUR SERVICES (default: black) */}
            <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
              <button
                onMouseEnter={() => setHoveredBtn("btn2")}
                onMouseLeave={() => setHoveredBtn(null)}
                onClick={() =>
                  document
                    .getElementById("market_section")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className={`min-w-[140px] md:min-w-[165px] h-[39px] px-[18px] py-[7px] rounded-full font-bold text-sm font-poppins transition duration-300 ${getButtonStyle(
                  "btn2"
                )}`}
              >
                EXPLORE OUR SERVICES
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
