import React from 'react';
import mainbg from "../assets/carrers/mainbg.png"
import { div } from 'framer-motion/client';
const CarrierHero = () => {
  return (
  <div className='bg-black'>
      <div className="relative max-w-6xl h-[500px] w-full overflow-hidden mx-auto rounded-xl ">
      <img
        src={mainbg} // Replace with your correct image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-xl"
      />
      <div className="absolute inset-0 " />

      <div className="relative z-10 flex items-center justify-center w-1/2   h-[500px] ">
        <div className="flex flex-col items-center justify-center  w-full  h-full bg-gray-800 opacity-70 p-8 rounded-2xl shadow-lg text-white">
          <h2 className=" text-4xl font-bold bg-gradient-to-b from-transparent via-yellow-400 to-transparent bg-clip-text text-transparent">Join Our Team</h2>
          <p className="text-md text-center leading-relaxed text-gray-300">
            Expert Emirates is the leading trading community, dedicated to transforming
            loss-making portfolios into profitable ones.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CarrierHero;
