import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ForexGoldInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <section className="bg-black text-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex flex-wrap justify-start items-start gap-3 sm:gap-4 md:gap-6">
          {[
            { label: "FOREX", path: "/forex" },
            { label: "GOLD", path: "/gold" },
          ].map((tab) => {
            const isActive = currentPath === tab.path;
            return (
              <button
                key={tab.path}
                onClick={() => navigate(tab.path)}
                className={`min-w-[120px] sm:min-w-[130px] md:min-w-[150px] lg:min-w-[165px] h-[39px] px-[10px] py-[5px] rounded-[90px] text-sm font-semibold font-poppins transition duration-300 text-center
    ${
      isActive
        ? "text-black bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_4px_12px_rgba(255,215,0,0.4)]"
        : "text-white bg-black shadow-[0_2px_8px_rgba(255,255,255,0.06)]"
    }
    hover:bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] hover:text-black hover:shadow-[0_4px_10px_rgba(255,215,0,0.25)]`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForexGoldInfo;
