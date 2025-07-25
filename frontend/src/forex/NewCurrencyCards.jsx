
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";



const cardData = [
  { pair: "EUR/USD", bid: "5.669", spread: "0", ask: "8.5675" },
  { pair: "USD/CHF", bid: "5.612", spread: "0", ask: "8.5001" },
  { pair: "USD/CAD", bid: "5.620", spread: "0", ask: "8.5502" },
  { pair: "GBP/USD", bid: "5.690", spread: "0", ask: "8.5805" },
  { pair: "AUD/USD", bid: "5.660", spread: "0", ask: "8.5400" },
  { pair: "NZD/USD", bid: "5.635", spread: "0", ask: "8.5109" },
  { pair: "USD/JPY", bid: "5.600", spread: "0", ask: "8.4902" },
  { pair: "EUR/GBP", bid: "5.615", spread: "0", ask: "8.5201" },
  { pair: "EUR/JPY", bid: "5.685", spread: "0", ask: "8.5999" },
  { pair: "GBP/JPY", bid: "5.695", spread: "0", ask: "8.6055" },
];

export default function NewCurrencyMarket() {
  const containerRef = useRef(null);

 useEffect(() => {
  const scrollContainer = containerRef.current;
  if (!scrollContainer) return;

  const scrollSpeed = 2.5; // Medium-fast

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

const repeatedCards = [...cardData, ...cardData, ...cardData]; // triple set


  return (
    <div
      ref={containerRef}
      className="flex gap-4 p-4 scrollbar-hide"
      style={{ overflowX: "hidden", whiteSpace: "nowrap" }}
    >
      {repeatedCards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="min-w-[270px] h-[170px] rounded-xl bg-cover bg-center relative overflow-hidden border border-[#2c2c2e]"
         style={{ backgroundImage: "url('/images/8f95f89af60402f18f770e721059232bee36c6e6.png')" }}

        >
          <div className="absolute inset-0 bg-white/15 backdrop-brightness-125 p-4 flex flex-col justify-between text-white rounded-xl">
            <h2 className="text-lg font-semibold tracking-wide">{card.pair}</h2>

            <div className="flex justify-between text-xs font-medium mt-2">
              <div className="text-center">
                <p>BID PRICE</p>
                <p className="text-red-500 text-base font-semibold">{card.bid}</p>
              </div>
              <div className="text-center">
                <p>SPREAD</p>
                <p className="text-white text-base font-semibold">{card.spread}</p>
              </div>
              <div className="text-center">
                <p>ASK PRICE</p>
                <p className="text-green-500 text-base font-semibold">{card.ask}</p>
              </div>
            </div>

            <button className="mt-4 bg-gradient-to-r from-[#FFD700] to-[#B8860B] text-black font-medium rounded-full px-4 py-1.5 text-xs flex items-center shadow-md w-fit">
              View More <ArrowUpRight className="ml-2 w-4 h-4" />
            </button>
            
          </div>
        </motion.div>
      ))}
    </div>
  );
}
