import React, { useState } from "react";
import SearchIcon from "../assets/review/SearchIcon.png";
import ArrowIcon from "../assets/review/arrow.png";

const metalsData = [
  {
    instrument: "XAGUSD",
    description: "Silver vs US Dollar",
    bid: "33.7616",
    ask: "33.7095",
    spread: "0.03",
  },
  {
    instrument: "XAUUSD",
    description: "Gold vs US Dollar",
    bid: "33.7616",
    ask: "33.7095",
    spread: "0.03",
  },
  {
    instrument: "XPTUSD",
    description: "Platinum vs US Dollar",
    bid: "33.7616",
    ask: "33.7095",
    spread: "0.03",
  },
  {
    instrument: "XPDCAD",
    description: "Palladium vs US Dollar",
    bid: "33.7616",
    ask: "33.7095",
    spread: "0.03",
  },
];

const MetalsTable = () => {
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState(false);

  const filteredMetals = metalsData.filter((item) =>
    item.instrument.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" px-4 py-12 flex flex-col items-center justify-center font-poppins text-white bg-black">
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
          Metals
        </span>
      </h2>

      {/* Table Box */}
      <div
        className="w-full max-w-6xl rounded-xl p-8 shadow-xl"
        style={{ background: "rgba(29,27,37,1)" }}
      >
        {/* Search Input */}
        <div className="mb-4">
          <div className="flex items-center bg-[#2c2c3e] border border-gray-600 rounded-md px-3">
            <img src={SearchIcon} alt="Search" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-3 bg-[#2c2c3e] text-white focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead
              className="text-gray-400 uppercase text-sm"
              style={{ background: "rgba(36,35,44,1)" }}
            >
              <tr>
                <th className="px-5 py-3">
                  <span style={{ color: "white" }} className="font-light">
                    Instruments
                  </span>{" "}
                  ↓
                </th>
                <th className="px-5 py-3">
                  <span style={{ color: "white" }} className="font-light">
                  Current Price
                  </span>{" "}
                  ↓
                </th>
                <th className="px-5 py-3">
                  <span style={{ color: "white" }} className="font-light">
                    Price Change
                  </span>{" "}
                  ↓
                </th>
                
                <th className="px-5 py-3">
                  <span style={{ color: "white" }} className="font-light">
                  Percentage Change
                  </span>{" "}
                  ↓
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredMetals.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-[#2c2c3e]"
                >
                  <td className="px-5 py-3">{item.instrument}</td>
                  <td className="px-5 py-3">{item.description}</td>
                  <td className="px-5 py-3">{item.bid}</td>
                
                  <td className="px-5 py-3">{item.spread}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Hero Style Button */}
      {/* <div className="mt-8">
        <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#281000,#C0971C,#FFE976,#C0971C,#281000)] shadow-[0_0_17px_rgba(254,214,0,0.2)] inline-block">
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`px-6 py-2 font-inter font-normal text-base flex items-center gap-2 rounded-full transition-all duration-300 ${
              hovered
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

export default MetalsTable;
