import React from "react";
import activeClientsIcon from "../assets/mapcard/Layer1.png";
import servedClientsIcon from "../assets/mapcard/Layer2.png";
import copyTradingIcon from "../assets/mapcard/Layer3.png";

const stats = [
  {
    icon: activeClientsIcon,
    number: "7000+",
    label: "Active Clients",
    isLarge: false,
  },
  {
    icon: servedClientsIcon,
    number: "12000+",
    label: "Served Clients",
    isLarge: true,
  },
  {
    icon: copyTradingIcon,
    number: "60+",
    label: "Copy Trading",
    isLarge: false,
  },
];

const StatsCards = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 px-4 py-10 bg-black">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-start rounded-[20px] border border-[#1D1B25] shadow-sm"
          style={{
            background: "rgba(18, 17, 23, 1)",
            padding: "20px 24px",
            gap: "10px",
            width: "100%",
            maxWidth: "370px",
            height: "auto",
          }}
        >
          <img
            src={item.icon}
            alt={item.label}
            className={`object-contain flex-shrink-0 ${
              item.isLarge
                ? "w-[72px] h-[72px] sm:w-[80px] sm:h-[80px]"
                : "w-[56px] h-[56px] sm:w-[64px] sm:h-[64px]"
            }`}
          />
          <div className="pl-4">
            <h3
              className="text-white"
              style={{
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "36px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {item.number}
            </h3>
            <p
              className="text-white"
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
