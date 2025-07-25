import React, { useState } from "react";
import SearchIcon from "../assets/review/SearchIcon.png";
import ArrowIcon from "../assets/review/arrow.png";

const data = [
  { symbol: "AUDUSD", bid: "0.63190", ask: "0.63194", spread: "0.1" },
  { symbol: "EURUSD", bid: "0.63190", ask: "0.63194", spread: "0.1" },
  { symbol: "GBPUSD", bid: "0.63190", ask: "0.63194", spread: "0.1" },
  { symbol: "USDCAD", bid: "0.63190", ask: "0.63194", spread: "0.1" },
  { symbol: "USDJPY", bid: "0.63190", ask: "0.63194", spread: "0.1" },
];

const PopularSharesTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredBtn, setHoveredBtn] = useState(false);

  const filtered = data.filter((item) =>
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" px-4 py-12 flex flex-col items-center  font-poppins text-white bg-black">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        Most Popular{" "}
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #281000 -6.52%, #C0971C 20.64%, #FFE976 46.21%, #C0971C 72.84%, #281000 100%)",
          }}
        >
          Pairs
        </span>
      </h2>

      {/* Table Box */}
      <div
        className="w-full max-w-5xl rounded-xl p-6"
        style={{ background: "rgba(29,27,37,1)" }}
      >
        {/* Search Box */}
        <div className="mb-4 flex items-center bg-[#2c2c3e] border border-gray-600 rounded-md px-3">
          <img src={SearchIcon} alt="Search" className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 bg-[#2c2c3e] text-white focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead
              className="text-gray-400 uppercase"
              style={{ background: "rgba(36,35,44,1)" }}
            >
              <tr className="font-inter">
                <th className="px-4 py-2">
                  <span style={{ color: "white" }} className="font-light">
                    Symbol
                  </span>{" "}
                  ↓
                </th>
                <th className="px-4 py-2">
                  <span style={{ color: "white" }} className="font-light">
                    Current Price
                  </span>{" "}
                  ↓
                </th>
                <th className="px-4 py-2">
                  <span style={{ color: "white" }} className="font-light">
                    Price Change
                  </span>{" "}
                  ↓
                </th>
                <th className="px-4 py-2">
                  <span style={{ color: "white" }} className="font-light">
                    Percentage Change
                  </span>{" "}
                  ↓
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-[#2c2c3e]"
                >
                  <td className="px-4 py-2">{item.symbol}</td>
                  <td className="px-4 py-2">{item.bid}</td>
                  <td className="px-4 py-2">{item.ask}</td>
                  <td className="px-4 py-2">{item.spread}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hero-style Button */}
      {/* <div className="mt-6">
        <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)] inline-block">
          <button
            onMouseEnter={() => setHoveredBtn(true)}
            onMouseLeave={() => setHoveredBtn(false)}
            className={`px-6 py-2 font-inter font-normal text-base flex items-center gap-2 rounded-full transition-all duration-300 ${
              hoveredBtn
                ? "bg-black text-white"
                : "bg-[linear-gradient(90deg,#281000,#C0971C,#FFE976,#C0971C,#281000)] text-black"
            }`}
          >
            View Full Contract Specifications
            <img src={ArrowIcon} alt="Arrow" className="w-4 h-4 mt-[1px]" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default PopularSharesTable;
