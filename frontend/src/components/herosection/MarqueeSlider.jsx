import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaBuilding, FaIndustry, FaCogs, FaRegBuilding, FaCloud } from "react-icons/fa";
import bgImage from "../../assets/rectangle.png";

const brands = [
  { icon: <FaBuilding className="text-4xl" />, name: "business" },
  { icon: <FaIndustry className="text-4xl" />, name: "enterprise" },
  { icon: <FaCogs className="text-4xl" />, name: "agency" },
  { icon: <FaRegBuilding className="text-4xl" />, name: "company" },
  { icon: <FaCloud className="text-4xl" />, name: "application" },
];

const MarqueeSlider = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateScroll = async () => {
      while (true) {
        // Scroll right to left
        await controls.start({
          x: "-50%",
          transition: { duration: 8, ease: "linear" },
        });

        // Pause for 1.5 seconds
        await new Promise((res) => setTimeout(res, 1500));

        // Scroll left to right (back to start)
        await controls.start({
          x: "0%",
          transition: { duration: 8, ease: "linear" },
        });

        // Pause for 1.5 seconds again
        await new Promise((res) => setTimeout(res, 1500));
      }
    };

    animateScroll();
  }, [controls]);

 return (
  <div
    className="overflow-hidden flex items-center justify-center w-full max-w-[1345px] h-40 bg-black rounded-2xl border border-neutral-700 relative mx-auto"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <motion.div
      className="flex gap-12 w-max px-4 text-white text-lg items-center"
      animate={controls}
      initial={{ x: "0%" }}
    >
      {[...brands, ...brands].map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-2xl text-gray-300 font-semibold">
          <span>{item.icon}</span>
          <span className="capitalize">{item.name}</span>
        </div>
      ))}
    </motion.div>
  </div>
);

};

export default MarqueeSlider;
