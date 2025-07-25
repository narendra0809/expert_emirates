import React, { useState } from "react";
import ForexSection from "./ForexSection";
import CryptoSection from "../buttonview/CryptoSection";
import Portfolio from "../viewbuttonPorfolio/Portfolio";
import CopyTrading from "../copytrading/CopyTrading";
const categories = [
  "Forex + Gold",
  "Crypto Currency",
  "Portfolio Management",
  "Copy Trading",
];

const ButtonTabs = () => {
  const [activeTab, setActiveTab] = useState("Forex + Gold");

  return (
    <div className="bg-black">
      <div className="w-full bg-black flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 w-full max-w-[1240px] py-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`
    min-w-[140px] md:min-w-[165px] h-[39px] px-[10px] 
    rounded-[90px] text-sm font-semibold font-poppins
    transition duration-300 text-center
    ${
      activeTab === cat
        ? "text-black bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)]"
        : "text-white bg-[var(--Dark-grey,#121117)] hover:bg-[rgba(255,255,255,0.13)]"
    }
    ${activeTab !== cat ? "hover:text-white" : ""}
  `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {activeTab == "Forex + Gold" && <ForexSection />}
      {activeTab == "Crypto Currency" && (
        <p>
          {" "}
          <CryptoSection />{" "}
        </p>
      )}
      {activeTab == "Portfolio Management" && (
        <p>
          <Portfolio />
        </p>
      )}
      {activeTab == "Copy Trading" && (
        <p>
          <CopyTrading />
        </p>
      )}
    </div>
  );
};

export default ButtonTabs;
