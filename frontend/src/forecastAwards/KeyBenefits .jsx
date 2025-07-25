import React, { useState } from "react";
import binanceImage from "../assets/awards/binance.png";
import binanceHover from "../assets/awards/binance-hover.png"; // Hover image

const KeyBenefits = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent">
        Key Benefits
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left: List */}
        <ul
          className="space-y-6 text-[18px] text-white leading-[100%]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {[
            {
              title: "Expert Advice",
              desc: "Regular consultations with our financial advisors to ensure your portfolio stays aligned with your goals.",
            },
            {
              title: "Educational Resources",
              desc: "Access to a wealth of educational materials to enhance your financial literacy.",
            },
            {
              title: "Community Support",
              desc: "Engage with a community of like-minded investors for insights and support.",
            },
            {
              title: "Cutting-edge Technology",
              desc: "Use our advanced tools and platforms to monitor and manage your investments effectively.",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-yellow-400 text-lg mt-1">●</span>
              <p>
                <strong className="bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent font-semibold tracking-wider leading-relaxed">
                  {item.title}:
                </strong>{" "}
                <span className="text-sm font-semibold tracking-wider leading-relaxed text-gray-200 px-2">
                  {item.desc}
                </span>
              </p>
            </li>
          ))}
        </ul>

        {/* Right: Hoverable Image */}
        <div className="w-full max-w-md hidden md:block rounded-lg overflow-hidden">
          <img
            src={isHovered ? binanceHover : binanceImage}
            alt="Benefits Visual"
            className="w-full h-auto object-cover rounded-lg shadow-lg transition duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
