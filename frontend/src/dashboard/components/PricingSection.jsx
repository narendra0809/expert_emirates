/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { pricingPlans } from "../data/pricingPlans";
import PricingCard from "./PricingCard";

export default function PricingSection({
  clicked,
  setClicked,
  text,
  setEText,
}) {
  const isActive = (type) => clicked === type;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const isScrolling = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Scroll to specific card with center alignment
  const scrollToCard = (index) => {
    if (isScrolling.current) return;

    isScrolling.current = true;
    setActiveIndex(index);

    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];

    if (container && card) {
      // Calculate center position
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;
      const scrollPosition =
        card.offsetLeft - containerWidth / 2 + cardWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  };

  // Handle scroll events
  const handleScroll = () => {
    if (isScrolling.current) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let smallestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const cardCenter =
          card.offsetLeft - container.scrollLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      }
    });

    setActiveIndex(closestIndex);
  };

  // Initialize scroll listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Reset to first card when plan type changes
  useEffect(() => {
    scrollToCard(0);
  }, [clicked]);

  return (
    <div className="w-full overflow-x-s hide-scrollbar py-8 text-white bg-black flex flex-col items-center justify-center mx-auto">
      {/* Toggle Buttons */}
      {(clicked === "forex" || clicked === "gold") && (
        <div className="flex gap-2 xs:gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 lg:mb-10">
          {["forex", "gold"].map((type) => (
            <button
              key={type}
              onClick={() => {
                setClicked(type);
                setEText?.(type.toUpperCase());
              }}
              className={`min-w-[70px] xs:min-w-[80px] sm:min-w-[90px] px-3 xs:px-4 py-1.5 xs:py-2 rounded-full text-xs xs:text-sm sm:text-base font-medium transition-all duration-300
                ${
                  isActive(type)
                    ? "btn-gradient btn-gradient-border text-black shadow-md hover:brightness-110"
                    : "bg-[#0f0e13] text-gray-300 hover:bg-[#1a191f]"
                }`}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      )}
      {/* Pricing Cards Container */}
      <div className="relative">
        {/* Scrollable Cards */}
        <div
          ref={scrollContainerRef}
          className={`flex ${
            isMobile ? "overflow-x-hidden" : "overflow-x-auto"
          } gap-4 sm:gap-4 lg:gap-4 pb-4 sm:pb-6 snap-x snap-mandatory scroll-smooth`}
          style={{ scrollbarWidth: "none" }}
        >
          {pricingPlans[clicked]?.map((plan, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`
                ${
                  isMobile
                    ? "mx-auto transition-all duration-500 ease-in-out"
                    : ""
                }
                ${isMobile && i !== activeIndex ? "hidden" : ""}
                w-[280px] xs:w-[300px] sm:w-[300px] md:w-[300px] lg:w-[300px] h-full flex-shrink-0 snap-center
              `}
              style={{
                transform: isMobile
                  ? `translateX(${(i - activeIndex) * 100}%)`
                  : "none",
                opacity: isMobile && i !== activeIndex ? 0 : 1,
              }}
            >
              <PricingCard plan={plan} highlight={i === activeIndex} />
            </div>
          ))}
        </div>

        {/* Scroll indicators (for mobile) */}
        {isMobile && (
          <div className="flex justify-center gap-1.5 mt-4">
            {pricingPlans[clicked]?.map((_, i) => (
              <button
                key={`indicator-${i}`}
                onClick={() => scrollToCard(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "!bg-yellow-500 !w-6" : "bg-gray-600"
                }`}
                aria-label={`Go to plan ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
