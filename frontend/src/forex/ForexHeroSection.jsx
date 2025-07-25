import React from "react";

const ForexHeroSection = () => {
  return (
    <div className="w-full bg-black flex justify-center px-4 pt-28 pb-10">
      <div className="relative w-full max-w-[1340px] h-[281px] rounded-[20px] overflow-hidden bg-[#121117] p-6">
        {/* Optional: background image can be added here */}

        {/* Inner padded content box */}
        <div className="relative w-full h-full bg-[#1c1c24] rounded-[16px] p-8 flex items-center justify-center">
          {/* Gradient Text */}
<h1
  className="text-center text-[28px] md:text-[40px] lg:text-[52px] font-poppins font-semibold"
  style={{
    background:
      "linear-gradient(90deg, #5C3A00 0%, #C0971C 25%, #FFD700 50%, #C0971C 75%, #5C3A00 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  }}
>
  Forex + Gold
</h1>




        </div>
      </div>
    </div>
  );
};

export default ForexHeroSection;
