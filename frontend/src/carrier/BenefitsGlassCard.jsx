import React from "react";
import bgImage from "../assets/carrers/growth.png"; // Replace with actual background path

const BenefitsGlassCard = () => {
    
  return (
  <div className="bg-black text-white font-poppins py-12 px-4 md:px-20">
      <section
      className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center px-4 md:px-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-gray-900 bg-opacity-75  rounded-2xl p-12 md:p-12 max-w-5xl w-full text-center text-white">
        <h2 className="text-xl md:text-3xl font-semibold mb-4">
          Employee Benefits at <br/>
          <span className="text-4xl font-bold bg-gradient-to-t from-transparent via-yellow-400 to-transparent bg-clip-text text-transparent">
            Expert Emirates
          </span>
        </h2>
        <p className="w-5/6 text-center font-poppins font-normal text-[18px] leading-[100%] tracking-[0.12em] mx-auto my-5">
          At Expert Emirates, we believe in empowering our team with exceptional
          benefits that drive success and career growth.
        </p>
      </div>
    </section>
  </div>
  );
};

export default BenefitsGlassCard;
