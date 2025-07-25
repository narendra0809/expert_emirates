import React from "react";
import basicsImg from "../assets/education/image1.png";
import terminologiesImg from "../assets/education/image2.png";
import advancedImg from "../assets/education/image3.png";
import economicsImg from "../assets/education/image4.png";
import ecnImg from "../assets/education/image5.png";
import strategiesImg from "../assets/education/image6.png";
import FeatureSection from "../homepage/FeatureSection";

const courseData = [
  {
    title: "Learn the Basics",
    description:
      "• Understand the Forex, stocks, commodities, and indices.\n• Learn how trading works and the role of brokers.\n• Get familiar with various lot sizes, pip/ticks, spreads, and order types.\n• Introduction to leverage, margin, and risk management.",
    image: basicsImg,
  },
  {
    title: "Trading Terminologies",
    description:
      "• Master general trading terms such as pips, lots, and slippage.\n• Understand the difference between market, limit, and stop orders.\n• Get insights into bullish/bearish trends and market behavior.\n• Grasp the fundamentals vs. technical analysis.",
    image: terminologiesImg,
  },
  {
    title: "Advanced Lessons",
    description:
      "• Deep dive into price action trading strategies.\n• Master key technical indicators (RSI, MACD, Fibonacci, etc.).\n• Understand candlestick patterns and chart formations.\n• Learn algorithmic systems & trading automation systems.",
    image: advancedImg,
  },
  {
    title: "Economics & Market Trends",
    description:
      "• Learn macro-economic factors that impact financial markets.\n• Understand global financial news & economic data releases.\n• Observe central bank actions and their effects on financial cycles.\n• Differentiate between commodities, currencies, and index rates.",
    image: economicsImg,
  },
  {
    title: "ECN & Market Liquidity",
    description:
      "• Understand ECN (Electronic Communication Network).\n• Explore liquidity provider integrations and pricing mechanisms.\n• Analyze order books, spreads, and slippage processing.\n• Grasp STP (Straight Through Processing) and DMA (Direct Market Access).",
    image: ecnImg,
  },
  {
    title: "Social Trading & Strategies",
    description:
      "• Introduction to copy trading and signal providers.\n• Master mirror trading and social trading platforms.\n• Evaluate strategies shared by top-rated traders.\n• Choose the best traders to follow for consistent results.",
    image: strategiesImg,
  },
];

export default function Education() {
  const gradientStyle = {
    background:
      "linear-gradient(180deg, #281000 5.95%, #C0971C 29.93%, #FFE976 52.51%, #C0971C 76.02%, #281000 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <section className="bg-black py-20 px-4 sm:px-6 md:px-12 lg:px-10 text-white font-[Poppins]">
      <h2
        className="text-[32px] leading-[42px] font-semibold text-center mb-4"
        style={{
          ...gradientStyle,
          letterSpacing: "0.12em",
        }}
      >
        Education
      </h2>

      <p className="text-center text-gray-300 text-sm md:text-base max-w-3xl mx-auto mb-12">
        At Expert Emirates, we believe that knowledge is the foundation of
        successful trading. Whether you're a beginner or an experienced trader,
        our education platform provides valuable insights, strategies, and
        expert guidance to enhance your trading skills.
      </p>

      <h3 className="text-lg font-semibold mb-6 uppercase text-center sm:text-left text-white">
        Introduction Courses
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseData.map((course, idx) => (
          <div
            key={idx}
            className="rounded-xl p-4"
            style={{
              backgroundColor: "#1D1B25",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3
              className="text-lg font-semibold mb-2 text-center"
              style={gradientStyle}
            >
              {course.title}
            </h3>
            <p className="text-sm text-gray-300 whitespace-pre-line text-left">
              {course.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <FeatureSection />
      </div>
    </section>
  );
}
