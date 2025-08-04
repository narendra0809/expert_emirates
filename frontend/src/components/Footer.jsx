import React from "react";
import SocialIcons from "../assets/social-icons.png";
import { Link } from "react-router-dom";
import logo from "../assets/navlogo.png";

const Footer = () => {
  const sectionData = [
    { title: "Trade", items: ["Dashboard"] },
    {
      title: "Pages",
      items: ["Home", "Forecasts", "FAQ", "About", "Support"],
    },
    {
      title: "Products",
      items: [
        "Forex",
        "Gold",
        "Cryptocurrency",
        "Portfolio Management",
        "Copy Trading",
      ],
    },
    {
      title: "Platform",
      items: ["MT4 Platform", "MT5 Platform"],
    },
    {
      title: "Accounts",
      items: ["Standard", "Pro", "Ultra"],
    },
  ];

  // Split data for mobile 2 columns
  const firstColumn = sectionData.slice(0, 3); // Trade, Pages, Products
  const secondColumn = sectionData.slice(3); // Platform, Accounts

  return (
    <footer
      className="text-white px-4 sm:px-6 py-10 font-poppins text-sm sm:text-base"
      style={{ background: "rgba(10,9,13,1)" }}
    >
      {/* Top */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 border-b border-gray-700 pb-6 gap-4 sm:gap-0 text-center sm:text-left">
        <div className="w-32 sm:w-48">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>
        <a
          href="#top"
          className="text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-[0px_0px_17px_1.7px_rgba(254,214,0,0.20)] shadow-[inset_0px_0px_21px_0px_rgba(255,215,0,0.20)] outline outline-[0.86px] outline-offset-[-0.86px] outline-yellow-600/50"
          style={{
            background:
              "linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)",
            border: "1px solid",
            borderImageSource:
              "linear-gradient(266.31deg, rgba(200, 161, 39, 0.5) 0%, rgba(102, 102, 102, 0) 100%)",
          }}
        >
          Go to Top
        </a>
      </div>

      {/* Footer Links */}
      {/* On mobile: two stacked columns */}
      <div className="sm:hidden grid grid-cols-2 gap-6 mb-10">
        {[firstColumn, secondColumn].map((group, i) => (
          <div key={i} className="space-y-6">
            {group.map(({ title, items }) => (
              <div key={title}>
                <h3 className="text-lg font-bold bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent mb-1">
                  {title}
                </h3>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item}>
                      <Link
                        to={
                          item.toLowerCase() === "home"
                            ? `/`
                            : `/${item.replace(/\s+/g, "-").toLowerCase()}`
                        }
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Tablet and Desktop View */}
      <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm sm:text-base mb-10">
        {sectionData.map(({ title, items }) => (
          <div key={title}>
            <h3 className="text-lg font-bold bg-gradient-to-t from-transparent via-yellow-300 to-transparent bg-clip-text text-transparent mb-1">
              {title}
            </h3>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item}>
                  <Link
                    className="w-full hover:text-yellow-400"
                    to={
                      item.toLowerCase() === "home"
                        ? `/`
                        : `/${item.replace(/\s+/g, "-").toLowerCase()}`
                    }
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact & Social Icons */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 sm:gap-0 text-center sm:text-left">
        <div className="flex items-center gap-3">
          {/* Gold Gradient Envelope Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="url(#gold-gradient)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#281000" />
                <stop offset="25%" stopColor="#C0971C" />
                <stop offset="50%" stopColor="#FFE976" />
                <stop offset="75%" stopColor="#C0971C" />
                <stop offset="100%" stopColor="#281000" />
              </linearGradient>
            </defs>
            <rect
              width="24"
              height="18"
              y="3"
              rx="3"
              fill="url(#gold-gradient)"
            />
            <path d="M3 6L12 13L21 6" stroke="#000" strokeWidth="1" />
          </svg>

          {/* Email Text */}
          <span className="text-white font-medium text-base">
            info@expertemirates.com
          </span>
        </div>

        <img
          src={SocialIcons}
          alt="Social Media Icons"
          className="h-14 w-auto"
        />
      </div>

      <div className="bg-[#2a2929] w-full mt-6 h-[1px] rounded-full" />

      {/* Bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs pt-6 gap-4 sm:gap-0 text-gray-400 text-center sm:text-left flex-wrap">
        <p className="text-[13px]">
          © 2005-2025 MEX Group Worldwide Limited. All rights reserved.
        </p>
        <div className="flex gap-2 items-center text-[13px]">
          <Link to={"/privacy-policy"}>Privacy Policy</Link>
          <span>|</span>
          <Link to={"/terms-and-condition"}>Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
