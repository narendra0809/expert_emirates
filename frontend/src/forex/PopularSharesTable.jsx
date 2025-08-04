import { useState } from "react";
import SearchIcon from "../assets/review/SearchIcon.png";

const forexData = [
  { symbol: "AUDCAD", bid: "1.00000", ask: "1.00001", spread: "0.1" },
  { symbol: "AUDCHF", bid: "1.00001", ask: "1.00002", spread: "0.11" },
  { symbol: "AUDJPY", bid: "1.00002", ask: "1.00003", spread: "0.12" },
  { symbol: "AUDNZD", bid: "1.00003", ask: "1.00004", spread: "0.13" },
  { symbol: "AUDSGD", bid: "1.00004", ask: "1.00005", spread: "0.14" },
  { symbol: "AUDUSD", bid: "1.00005", ask: "1.00006", spread: "0.15" },
  { symbol: "CADCHF", bid: "1.00006", ask: "1.00007", spread: "0.16" },
  { symbol: "CADJPY", bid: "1.00007", ask: "1.00008", spread: "0.17" },
  { symbol: "CHFJPY", bid: "1.00008", ask: "1.00009", spread: "0.18" },
  { symbol: "CHFSGD", bid: "1.00009", ask: "1.00010", spread: "0.19" },
  { symbol: "EURAUD", bid: "1.00010", ask: "1.00011", spread: "0.2" },
  { symbol: "EURCAD", bid: "1.00011", ask: "1.00012", spread: "0.21" },
  { symbol: "EURCHF", bid: "1.00012", ask: "1.00013", spread: "0.22" },
  { symbol: "EURGBP", bid: "1.00013", ask: "1.00014", spread: "0.23" },
  { symbol: "EURJPY", bid: "1.00014", ask: "1.00015", spread: "0.24" },
  { symbol: "EURNZD", bid: "1.00015", ask: "1.00016", spread: "0.25" },
  { symbol: "EURUSD", bid: "1.00016", ask: "1.00017", spread: "0.26" },
  { symbol: "EURNOK", bid: "1.00017", ask: "1.00018", spread: "0.27" },
  { symbol: "EURSEK", bid: "1.00018", ask: "1.00019", spread: "0.28" },
  { symbol: "GBPAUD", bid: "1.00019", ask: "1.00020", spread: "0.29" },
  { symbol: "GBPCAD", bid: "1.00020", ask: "1.00021", spread: "0.3" },
  { symbol: "GBPCHF", bid: "1.00021", ask: "1.00022", spread: "0.31" },
  { symbol: "GBPJPY", bid: "1.00022", ask: "1.00023", spread: "0.32" },
  { symbol: "GBPNZD", bid: "1.00023", ask: "1.00024", spread: "0.33" },
  { symbol: "GBPSGD", bid: "1.00024", ask: "1.00025", spread: "0.34" },
  { symbol: "GBPUSD", bid: "1.00025", ask: "1.00026", spread: "0.35" },
  { symbol: "NZDCAD", bid: "1.00026", ask: "1.00027", spread: "0.36" },
  { symbol: "NZDCHF", bid: "1.00027", ask: "1.00028", spread: "0.37" },
  { symbol: "NZDJPY", bid: "1.00028", ask: "1.00029", spread: "0.38" },
  { symbol: "NZDUSD", bid: "1.00029", ask: "1.00030", spread: "0.39" },
  { symbol: "USDCAD", bid: "1.00030", ask: "1.00031", spread: "0.4" },
  { symbol: "USDCHF", bid: "1.00031", ask: "1.00032", spread: "0.41" },
  { symbol: "USDCNH", bid: "1.00032", ask: "1.00033", spread: "0.42" },
  { symbol: "USDHKD", bid: "1.00033", ask: "1.00034", spread: "0.43" },
  { symbol: "USDJPY", bid: "1.00034", ask: "1.00035", spread: "0.44" },
  { symbol: "USDMXN", bid: "1.00035", ask: "1.00036", spread: "0.45" },
  { symbol: "USDNOK", bid: "1.00036", ask: "1.00037", spread: "0.46" },
  { symbol: "USDSEK", bid: "1.00037", ask: "1.00038", spread: "0.47" },
  { symbol: "USDZAR", bid: "1.00038", ask: "1.00039", spread: "0.48" },
  { symbol: "USDSGD", bid: "1.00039", ask: "1.00040", spread: "0.49" },
];

const cryptoData = [
  { symbol: "ADAUSD", bid: "10050.00", ask: "10060.00", spread: "0.1" },
  { symbol: "DOGUSD", bid: "11050.00", ask: "11060.00", spread: "0.1" },
  { symbol: "DOTUSD", bid: "12050.00", ask: "12060.00", spread: "0.1" },
  { symbol: "EOSUSD", bid: "13050.00", ask: "13060.00", spread: "0.1" },
  { symbol: "LNKUSD", bid: "14050.00", ask: "14060.00", spread: "0.1" },
  { symbol: "XLMUSD", bid: "15050.00", ask: "15060.00", spread: "0.1" },
  { symbol: "BTCUSD", bid: "16050.00", ask: "16060.00", spread: "0.1" },
  { symbol: "BCHUSD", bid: "17050.00", ask: "17060.00", spread: "0.1" },
  { symbol: "ETHUSD", bid: "18050.00", ask: "18060.00", spread: "0.1" },
  { symbol: "LTCUSD", bid: "19050.00", ask: "19060.00", spread: "0.1" },
  { symbol: "RPLUSD", bid: "20050.00", ask: "20060.00", spread: "0.1" },
];

const PopularSharesTable = ({ isForex }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  // Filtered data based on search input
  const filtered = (isForex ? forexData : cryptoData).filter((item) =>
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paging logic
  const totalPages = Math.ceil(filtered.length / resultsPerPage);
  const pageData = filtered.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  const handleResultsPerPage = (e) => {
    setResultsPerPage(Number(e.target.value));
    setPage(1); // Reset to first page on change
  };

  return (
    <div className="px-4 py-12 flex flex-col items-center font-poppins text-white bg-black">
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

      {/* Results per page */}
      <div className="flex items-center mb-4 w-full max-w-5xl justify-end gap-2">
        <span className="text-sm text-gray-300">Results per page: </span>
        <select
          value={resultsPerPage}
          onChange={handleResultsPerPage}
          className="p-1 rounded focus:outline-none"
          style={{
            background:
              "linear-gradient(90deg, #281000 0%, #C0971C 40%, #FFE976 70%, #C0971C 100%)",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          {[5, 10, 20, 30, 50].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

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
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1); // Reset to first page when searching
            }}
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
              {pageData.map((item, index) => (
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
              {pageData.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-gray-400 py-4">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-2 mt-6 items-center">
        <button
          className="px-4 py-1 rounded-full text-black font-bold"
          style={{
            background:
              "linear-gradient(90deg, #281000 0%, #C0971C 25%, #FFE976 50%, #C0971C 75%, #281000 100%)",
            opacity: page === 1 ? 0.5 : 1,
            cursor: page === 1 ? "not-allowed" : "pointer",
          }}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-lg font-semibold text-[#FFE976]">
          {page} / {totalPages}
        </span>
        <button
          className="px-4 py-1 rounded-full text-black font-bold"
          style={{
            background:
              "linear-gradient(90deg, #281000 0%, #C0971C 25%, #FFE976 50%, #C0971C 75%, #281000 100%)",
            opacity: page === totalPages ? 0.5 : 1,
            cursor: page === totalPages ? "not-allowed" : "pointer",
          }}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PopularSharesTable;
