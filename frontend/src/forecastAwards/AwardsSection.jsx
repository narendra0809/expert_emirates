import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import trophy1 from "../assets/awards/trofy1.png";
import trophy2 from "../assets/awards/trofy2.png";
import trophy3 from "../assets/awards/trofy3.png";
import CommunitySection from "./CommunitySection";
import WhyChooseSection from "./WhyChooseSection";
import KeyBenefits from "./KeyBenefits ";
import FeatureSection from "../homepage/FeatureSection";
import BlogFilters from "../company-news/BlogFilters";
import BlogCryptoForecastCards from "../company-news/BlogCryptoForecastCards";

const allAwards = {
  2025: [
    {
      title: "Best Mobile FX Trading App",
      subtitle: "Smart Vision Summit Oman 2025",
      image: trophy1,
    },
    {
      title: "Best Prime Trading Broker",
      subtitle: "Qatar Financial Expo 2025",
      image: trophy2,
    },
    {
      title: "Best Global Regulated Broker",
      subtitle: "IWMFIF Hong Kong 2025",
      image: trophy3,
    },
  ],
  2024: [
    {
      title: "Top FX Broker",
      subtitle: "UAE Global Awards 2024",
      image: trophy1,
    },
  ],
  2023: [
    {
      title: "Innovation in Trading Technology",
      subtitle: "Asia Fintech Awards 2023",
      image: trophy2,
    },
  ],
};

const years = ["2025", "2024", "2023", "2022", "2021", "2020", "2019"];

const AwardsSection = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const scrollRef = useRef(null);
  const [blogId, setBlogId] = useState("");
  const [blogType, setBlogType] = useState("Forex Forecast");

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <section className="bg-black text-white pt-24 pb-16 px-4 md:px-10 overflow-x-hidden">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto">
        <h2
          className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[52px] font-semibold leading-tight mb-4 bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Awards and Recognition
        </h2>
        <p className="text-md font-semibold tracking-wider leading-relaxed text-gray-200 px-2">
          At Expert Emirates, we are committed to providing the highest level of service and
          innovation in the forex trading industry. Over the past 7+ years, our dedication has been
          recognized by leading financial institutions, media organizations, and industry
          publications. Here are some of the prestigious awards we have received.
        </p>
      </div>

      {/* Year Tabs */}
      <div className="flex justify-center mt-10">
        <div className="flex items-center bg-[#121117] rounded-full px-3 py-2 overflow-hidden">
          <button
            onClick={scrollLeft}
            className="text-white hover:text-yellow-400 px-2 text-lg"
          >
            &#171;
          </button>

          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scroll-smooth px-2 max-w-[90vw] sm:max-w-full no-scrollbar"
          >
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap transition duration-300 ${
                  selectedYear === year
                    ? "bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black px-6 py-1"
                    : "bg-[#2C2B30] text-white hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:via-50% hover:to-[#452e06] hover:text-black"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="text-white hover:text-yellow-400 px-2 text-lg"
          >
            &#187;
          </button>
        </div>
      </div>

      {/* Awards Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto px-2">
        {(allAwards[selectedYear] || []).map((award, index) => (
          <div
            key={index}
            className="bg-[#121117] rounded-2xl p-5 text-center shadow-lg hover:shadow-yellow-500/10 transition-shadow"
          >
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-auto mb-4 mx-auto object-contain max-h-48"
            />
            <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
            <span className="inline-block mt-2 text-xs font-bold text-black bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] sm:text-base transition px-4 py-2 rounded-full">
              {award.subtitle}
            </span>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {/* <div className="text-center mt-10">
        <Link to="/company-news">
          <button
            className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black hover:scale-105 transition"
          >
            View More
          </button>
        </Link>
      </div> */}

      {/* Additional Sections */}
      <div className="mt-16">
        <WhyChooseSection />
        <CommunitySection />
        <KeyBenefits />
        <BlogFilters blogType={blogType} setBlogType={setBlogType} />
        <BlogCryptoForecastCards blogType={blogType} setBlogId={blogId} />
        <FeatureSection />
      </div>
    </section>
  );
};

export default AwardsSection;
