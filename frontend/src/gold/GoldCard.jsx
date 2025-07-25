import React from "react";
import bg from "../assets/gold/image1.png";
import overlay from "../assets/gold/image2.png";

const GoldCard = () => {
  // return (
  //   <div className="w-full bg-black flex justify-center px-4 pt-28 pb-10">
  //     <div className="group relative w-full max-w-[1240px] h-[251px] rounded-[20px] overflow-hidden">
  //       {/* Background Image */}
  //       <img
  //         src={bg}
  //         alt="Background"
  //         className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in"
  //       />

  //       {/* Foreground Overlay + Text */}
  //       <div className="absolute inset-0 flex items-center justify-center">
  //         <div className="relative w-full max-w-[1140px] h-[180px] flex justify-center">
  //           {/* Overlay */}
  //           <img
  //             src={overlay}
  //             alt="Overlay"
  //             className="w-full h-full object-cover rounded-3xl"
  //           />

  //           {/* Heading Text */}
  //           <div className="absolute inset-0 flex items-center justify-center">
  //             <h1 className="text-white text-[28px] md:text-[40px] lg:text-[52px] font-poppins font-semibold leading-none text-center">
  //               Gold
  //             </h1>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

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

export default GoldCard;
