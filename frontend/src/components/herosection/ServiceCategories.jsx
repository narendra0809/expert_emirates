import { useState } from "react";
import { Link } from "react-router-dom";
import wave from "../../assets/stayar.png";

const ServicesCard = () => {
  const wrapperStyle = {
    background:
      "linear-gradient(90deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)",
    padding: "2px", // border thickness
    borderRadius: "9999px",
  };

  const GradientButton = ({ text }) => {
    const [hover, setHover] = useState(false);

    return (
      <button
        className="w-full h-12 rounded-full text-sm font-medium uppercase transition-all duration-300"
        style={{
          background: hover
            ? "linear-gradient(86.31deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 74.5%, #281000 100%)"
            : "black",
          color: hover ? "black" : "white",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="bg-black rounded-xl p-6 xl:min-h-[200px] lg:min-h-[440px] h-full w-full max-w-xl text-white relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <img src={wave} alt="background" className="w-full h-full " />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Button container */}
      <div className="z-10 relative flex flex-col items-center gap-4 pt-24 w-full ">
        {/* Forex + Crypto in same row */}
        <div className="flex justify-between gap-4 w-full">
          <Link to="/forex" className="flex-1">
            <div style={wrapperStyle}>
              <GradientButton text="FOREX + GOLD" />
            </div>
          </Link>

          <Link to="/CryptoCurrency" className="flex-1">
            <div style={wrapperStyle}>
              <GradientButton text="CRYPTOCURRENCY" />
            </div>
          </Link>
        </div>

        {/* Funded Accounts */}
        <Link to="/funded-accounts" className="w-full">
          <div style={wrapperStyle}>
            <GradientButton text="FUNDED ACCOUNTS" />
          </div>
        </Link>

        {/* Portfolio Management */}
        <Link to="/portfolio-management" className="w-full">
          <div style={wrapperStyle}>
            <GradientButton text="PORTFOLIO MANAGEMENT" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
