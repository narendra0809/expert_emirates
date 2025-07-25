import { motion } from "framer-motion";
import coinsTop from "../assets/coinsTop.png";
import coinsBottom from "../assets/coinsTop.png";

const ExpertMotion = () => {
  const scrollLeft = {
    animate: { x: ["0%", "-100%"] },
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  };

  const scrollRight = {
    animate: { x: ["-100%", "0%"] },
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
    <div className="w-full min-h-[50vh] bg-black relative flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden">
      {/* Top continuous scroll (left) */}
      <motion.div
        className="absolute top-6 left-0 w-[200%] flex opacity-20 z-0 pointer-events-none"
        {...scrollLeft}
      >
        <img src={coinsTop} alt="coin top 1" className="w-full" />
        <img src={coinsTop} alt="coin top 2" className="w-full" />
      </motion.div>

      {/* Bottom continuous scroll (right) */}
      <motion.div
        className="absolute bottom-6 left-0 w-[200%] flex opacity-20 z-0 pointer-events-none"
        {...scrollRight}
      >
        <img src={coinsBottom} alt="coin bottom 1" className="w-full" />
        <img src={coinsBottom} alt="coin bottom 2" className="w-full" />
      </motion.div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 bg-black/30 backdrop-blur-md rounded-xl shadow-lg max-w-3xl w-full mx-auto">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-t from-transparent via-yellow-500 to-transparent bg-clip-text text-transparent tracking-wider leading-tight">
          EXPERT EMIRATES
        </h3>
        <p className="text-white mt-4 text-base sm:text-lg md:text-2xl font-medium tracking-wide leading-relaxed">
          Empowering Smart Traders,<br className="hidden sm:inline" />
          Every Step of the Way
        </p>
      </div>
    </div>
  );
};

export default ExpertMotion;
