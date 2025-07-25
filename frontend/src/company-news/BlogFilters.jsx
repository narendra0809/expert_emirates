import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export default function BlogHeader({ setBlogType }) {
  const [activeTab, setActiveTab] = useState("all");
  const [activeForecast, setActiveForecast] = useState("Forex Forecast");
  const navigate = useNavigate();

  const tabs = [
    { key: "all", label: "All", count: 80 },
    { key: "published", label: "Published", count: 18 },
    { key: "draft", label: "Draft", count: 32 },
  ];

  const forecasts = [
    { label: "Forex Forecast", path: "/forex" }, // ➤ Just filters cards
    { label: "Gold Forecast", path: "/gold" }, // ➤ Redirects to /gold
    { label: "Crypto Forecast", path: "/crypto" }, // ➤ You can extend logic
  ];

  const gradientStyle = {
    background:
      "linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)",
    border: "2px solid  #C0971C",
    borderImageSource:
      "linear-gradient(266.31deg, rgba(200, 161, 39, 0.5) 0%, rgba(102, 102, 102, 0) 100%)",
    boxShadow:
      "0px 0px 17px 1.7px rgba(254,214,0,0.20), inset 0px 0px 21px 0px rgba(255,215,0,0.20)",
    outline: "0.86px solid rgba(202, 153, 2, 0.5)",
    outlineOffset: "-0.86px",
  };

  const handleForecastClick = (forecast) => {
    setActiveForecast(forecast.label);
    setBlogType(forecast.label);

    // ✅ Navigate only on Gold Forecast
    // if (forecast.label === "Gold Forecast") {
    //   navigate(forecast.path);
    // }
  };

  return (
   <div className="w-full bg-black px-6 py-8">
  <div className="max-w-[1300px] mx-auto flex flex-col items-center text-center gap-8">
    
    {/* Blog Title */}
    <div>
      {/* <h2
        className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #281000 5.95%, #C0971C 29.93%, #FFE976 52.51%, #C0971C 76.02%, #281000 100%)",
        }}
      >
        Blog
      </h2> */}

       <h1
        className="text-[22px] sm:text-[32px] md:text-[40px] lg:text-[52px] font-poppins font-semibold mb-4 leading-tight"
        style={{
          background:
            "linear-gradient(90deg, #5C3A00 0%, #C0971C 25%, #FFD700 50%, #C0971C 75%, #5C3A00 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
       Blog
      </h1>
    </div>

    {/* Forecast Buttons */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-md justify-center">
      {forecasts.map((forecast, index) => {
        const isActive = activeForecast === forecast.label;

        return (
          <div
            key={forecast.label}
            className={`${
              index === 2 ? "col-span-2 sm:col-span-1 flex justify-center" : "flex justify-center"
            }`}
          >
            <button
              onClick={() => handleForecastClick(forecast)}
              className={`rounded-full py-2 text-sm sm:text-base font-bold transition-all duration-300 min-w-[130px]
                ${
                  isActive
                    ? "text-black bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900"
                    : "text-white bg-[#1c1c1f] hover:bg-gradient-to-r hover:from-yellow-900 hover:via-yellow-400 hover:to-yellow-900 hover:text-black"
                }`}
            >
              {forecast.label}
            </button>
          </div>
        );
      })}
    </div>
  </div>
</div>

  );
}
