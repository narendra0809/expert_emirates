import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const categories = [
  { label: "Forex + Gold", path: "/forex" },
  { label: "Crypto Currency", path: "/cryptocurrency" },
  { label: "Portfolio Management", path: "/portfolio-management" },
  { label: "Copy Trading", path: "/funded-accounts" }, // ✅ updated label
];

const CategoryTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveLabel = () => {
    const found = categories.find((cat) => cat.path === location.pathname);
    return found ? found.label : "Forex + Gold";
  };

  const [activeTab, setActiveTab] = React.useState(getActiveLabel());

  React.useEffect(() => {
    setActiveTab(getActiveLabel());
  }, [location.pathname]);

  const handleClick = (cat) => {
    navigate(cat.path);
  };

  return (
    <div className="w-full bg-black flex justify-center px-4">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 w-full max-w-[1240px] py-6">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => handleClick(cat)}
            className={`min-w-[120px] sm:min-w-[130px] md:min-w-[150px] lg:min-w-[165px] h-[39px] px-[10px] py-[5px] rounded-[90px] text-sm font-semibold font-poppins transition duration-300 text-center
              ${
                activeTab === cat.label
                  ? "text-black bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_4px_12px_rgba(255,215,0,0.4)]"
                  : "text-white bg-black shadow-[0_2px_8px_rgba(255,255,255,0.06)]"
              }
              hover:bg-[linear-gradient(86.31deg,#281000_0%,#C0971C_25%,#FFE976_50.5%,#C0971C_74.5%,#281000_100%)] hover:text-black hover:shadow-[0_4px_10px_rgba(255,215,0,0.25)]
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
