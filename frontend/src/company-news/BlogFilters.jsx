import { useState } from "react";

export default function BlogHeader({ setBlogType }) {
  const [activeForecast, setActiveForecast] = useState("Forex Forecast");
  const forecasts = [
    { label: "Forex Forecast", path: "/forex" },
    { label: "Gold Forecast", path: "/gold" },
    { label: "Crypto Forecast", path: "/crypto" },
  ];

  const handleForecastClick = (forecast) => {
    setActiveForecast(forecast.label);
    setBlogType(forecast.label);
  };

  return (
    <div className="w-full bg-black px-6 py-8">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center text-center gap-8">
        {/* Blog Title */}
        <div>
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
                  index === 2
                    ? "col-span-2 sm:col-span-1 flex justify-center"
                    : "flex justify-center"
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
