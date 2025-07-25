import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cardData = [
  { pair: "EUR/USD", price: "1.1089", change: "+0.0042", percent: "+0.38%", currency: "USD" },
  { pair: "USD/CAD", price: "1.3690", change: "+0.0034", percent: "+0.25%", currency: "CAD" },
  { pair: "GBP/USD", price: "1.2921", change: "-0.0021", percent: "-0.16%", currency: "USD" },
  { pair: "AUD/USD", price: "0.6789", change: "+0.0018", percent: "+0.27%", currency: "USD" },
  { pair: "USD/JPY", price: "146.25", change: "-0.1100", percent: "-0.08%", currency: "JPY" },
];

export default function CurrencyMarket() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1.5;
    let animationFrameId;

    const scroll = () => {
      scrollContainer.scrollLeft += scrollSpeed;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const repeatedCards = [...cardData, ...cardData, ...cardData]; // repeat for smooth loop

  return (
    <div className="bg-black py-6 overflow-hidden" ref={containerRef} style={{ whiteSpace: "nowrap" }}>
      <div className="flex w-max gap-5">
        {repeatedCards.map((card, index) => (
          <motion.div
            key={index}
            className="min-w-[270px] h-[210px] rounded-2xl relative overflow-hidden shadow-xl p-5 text-white flex flex-col justify-between"
  style={{
      backgroundImage: "url('/images/Frame 1984077895.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#121117",
  }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            {/* Card Header */}
            <div>
              <h3 className="text-white font-semibold text-sm tracking-wide">{card.pair}</h3>
              <p className="text-sm text-gray-300 mt-2">CURRENT PRICE</p>
              <div className="text-xl font-bold text-[#FFE976] flex items-end">
                {card.price} <span className="text-sm ml-1 text-[#FFE976]">{card.currency}</span>
              </div>
            </div>

            {/* Price Changes */}
            <div className="flex justify-between mt-4 text-sm font-medium">
              <div className="text-center me-3">
                <p className="text-gray-400">PRICE CHANGE</p>
                <p className="text-green-500">{card.change}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400">PERCENTAGE CHANGE</p>
                <p className="text-green-500">{card.percent}</p>
              </div>
            </div>

            {/* Button */}
            <button
              className="mt-4 font-medium rounded-full px-4 py-1.5 text-xs flex items-center shadow-md w-fit transition-all duration-200"
              style={{
                background:
                  "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)",
                color: "black",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "2px solid transparent";
                e.currentTarget.style.backgroundImage =
                  "linear-gradient(#121117, #121117), linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)";
                e.currentTarget.style.backgroundOrigin = "border-box";
                e.currentTarget.style.backgroundClip = "padding-box, border-box";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)";
                e.currentTarget.style.color = "black";
              }}
            >
              View More <ArrowUpRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
