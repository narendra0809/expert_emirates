import React from "react";
import Image4 from "../assets/aboutus/image4.png";

const SmartTradeSection = () => {
  return (
    <div
      className="w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-12 py-10 gap-10"
      style={{ background: "#000000" }}
    >
      {/* Left Side - Slightly Smaller Image with Hover Zoom */}
     <div className="relative w-full md:w-[45%] group h-[200px] sm:h-[250px] md:h-[400px]">
  <img
    src={Image4}
    alt="Smart Trading"
    className="w-full h-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>


      {/* Right Side - Heading + Text */}
      <div className="w-full md:w-[55%]">

<h6
  className="mb-4  text-left"
  style={{
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "48px",
  }}
>
  <span
    style={{
      background:
        "linear-gradient(180deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 75%, #5c2b00 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
    }}
  >
    Master the Markets with Expert Emirates–Your
  </span>
  <br />
  <span
    style={{
      background:
        "linear-gradient(180deg, #281000 0%, #C0971C 25%, #FFE976 50.5%, #C0971C 75%, #5c2b00 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
    }}
  >
    Path to Financial Success
  </span>
</h6>



        <p
  style={{
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "1.6", // More readable line spacing
    letterSpacing: "0.12em",
    background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  At Expert Emirates, we don’t just provide forex and crypto signals—we unlock profitable
  opportunities tailored for every trader. Backed by cutting-edge AI, expert analysis,
  and market precision, our signals turn uncertainty into calculated success.
</p>

      </div>
    </div>
  );
};

export default SmartTradeSection;
