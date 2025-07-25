import React, { useState } from "react";
import copyTradingImg from "../assets/copyimage/dollar.png";
import WhatIsCopyTrading from "./WhatIsCopyTrading";
import { motion, AnimatePresence } from "framer-motion";

// Step content
const stepsContent = {
  1: {
    title: "Sign Up for the Ride",
    description:
      "You join Market Nexus, kind of like signing up for a magical adventure tour where the tour guide knows all the best spots.",
    image: "images/4ef78f4b9a81d3b8448da71cca21337a9521ee22.png",
  },
  2: {
    title: "Pick Your Trading Wizard",
    description:
      "Browse through a lineup of expert traders, each with their own trading style, like choosing between a chef who makes the perfect pizza or one who bakes the best cupcakes. Find the one who has a track record you like.",
    image: "images/b3a5fec2948b48c648c3b559d871ebb8378e32a5.png",
  },
  3: {
    title: "Set Your Budget",
    description:
      "Decide how much of your treasure you want to entrust to your chosen trading wizard. It's like giving your coins to a pirate captain who promises to find the best loot.",
    image: "images/e28d82467fbeafb459d8dc41e39215f2523c73e3.png",
  },
  4: {
    title: "Magical Mirroring",
    description:
      "Once everything’s set, your account starts to mirror the trades of your chosen expert. It’s like having a doppelgänger who’s really good at trading doing all the work for you.",
    image: "images/cd60b50302c7827ecb7ae55fd6cc391e3604820d.png",
  },
  5: {
    title: "Watch the Show",
    description:
      "Sit back with some popcorn and watch as trades appear in your account, perfectly mimicking the expert's moves. You’re like the audience in a magic show, amazed at how it’s done without lifting a finger.",
    image: "images/8f0e73036ea977156dd83bfbb5aee641019ba34f.png",
  },
  6: {
    title: "Adjust Your Journey",
    description:
      "If you feel like the adventure isn’t going as planned, you can change your wizard, adjust your treasure allocation, or stop the magical mirroring altogether. It’s your adventure, after all!",
    image: "images/00578fb9ffa9108e55563a1bccd072ec15036289.png",
  },
};

const CopyTradingSection = () => {
  const [isFirstOption, setIsFirstOption] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const [prevStep, setPrevStep] = useState(1);

  const toggle = () => {
    setIsFirstOption(!isFirstOption);
    setActiveStep(1);
    setPrevStep(1);
  };

  const handleStepChange = (step) => {
    setPrevStep(activeStep);
    setActiveStep(step);
  };

  // Directional Animation Variants
  const variants = {
    initial: (direction) => ({
      y: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      y: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <>
      {/* Top Section */}
      <div className="bg-black w-full h-[70vh] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-28">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-12">
          {/* LEFT TEXT */}
          <div className="w-full md:w-1/2 text-white">
                   <h2 className="text-5xl font-bold leading-snug">
  Invest in
  <br />
  <span className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
    Copy Trading
  </span>
</h2>
            

            <p className="mt-8 text-[18px] text-gray-300  sm:text-lg leading-relaxed  tracking-widest">
              We specialize in clearing clients' funded accounts from partnered
              firms, allowing you to trade with confidence and minimal risk.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <img
              src={copyTradingImg}
              alt="3D Copy Trading"
              className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[480px]"
            />
          </div>
        </div>
      </div>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center gap-6 flex-wrap text-center mt-6">
        <button
          onClick={() => setIsFirstOption(true)}
          className="text-sm sm:text-base md:text-lg font-bold transition text-white"
        >
          What is Copy Trading?
        </button>

        <div
          onClick={toggle}
          className={`w-20 h-8 flex items-center bg-[#121117] rounded-full p-1 cursor-pointer transition-all duration-300 ${
            isFirstOption ? "justify-start" : "justify-end"
          }`}
        >
          <div className="w-7 h-7 bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 rounded-full shadow-md transition-all duration-300"></div>
        </div>

        <button
          onClick={() => setIsFirstOption(false)}
          className="text-sm sm:text-base md:text-lg font-bold transition text-white"
        >
          How does Copy Trading work?
        </button>
      </div>

      {/* Content Rendering */}
      <div className="mt-10">
        {isFirstOption ? (
          <WhatIsCopyTrading />
        ) : (
          <>
            {/* Step Buttons */}
            <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <button
                  key={step}
                  onClick={() => handleStepChange(step)}
                  className={`min-w-[120px] h-[40px] px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                    activeStep === step
                      ? "text-black bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900"
                      : "text-white bg-[#121117]"
                  } hover:bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 hover:text-black`}
                >
                  STEP {step}
                </button>
              ))}
            </div>

            {/* Animated Step Content */}
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatePresence mode="wait" custom={activeStep - prevStep}>
                <motion.div
                  key={activeStep}
                  custom={activeStep - prevStep}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 w-full"
                >
                  {/* Left Content */}
                  <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">
                      {/* First Half */}
                      {stepsContent[activeStep].title
                        .split(" ")
                        .slice(
                          0,
                          Math.ceil(
                            stepsContent[activeStep].title.split(" ").length / 2
                          )
                        )
                        .join(" ")}{" "}
                      {/* Second Half in Yellow */}
                      <span className="bg-gradient-to-r from-[#d4af37] to-[#d4af37] text-transparent bg-clip-text">
                        {stepsContent[activeStep].title
                          .split(" ")
                          .slice(
                            Math.ceil(
                              stepsContent[activeStep].title.split(" ").length /
                                2
                            )
                          )
                          .join(" ")}
                      </span>
                    </h2>

                    <p className="text-gray-300 max-w-xl mb-6 mx-auto md:mx-0">
                      {stepsContent[activeStep].description}
                    </p>
                  </div>

                  {/* Right Image */}
                  <div className="md:w-1/2 flex justify-end">
                    <img
                      src={stepsContent[activeStep].image}
                      alt={`Step ${activeStep}`}
                      className="w-[150px] sm:w-[200px] md:w-[250px]"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CopyTradingSection;
