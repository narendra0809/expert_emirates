import React from "react";
import mobileImage from "../assets/awards/mobile-ui.png";

const WhyChooseSection = () => {
  return (
    <section className="bg-black text-white px-4 py-12 md:py-16 font-[Poppins]" >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[40px] sm:text-[52px] font-bold text-center mb-12 bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent leading-none">
          Why Choose Expert Emirates?
        </h2>

        {/* Proven Track Record */}
        <div
          className="flex flex-col lg:flex-row border-gray-800 rounded-xl px-6 lg:px-10 items-center justify-between gap-8 border-l"
         style={{
      background:"rgba(18, 17, 23, 1)"
    }}
        >
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-4xl font-bold text-left mb-4 bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent"
            style={{
              fontFamily:"Poppins"
            }}
            >
              Proven Track Record:
            </h3>
            <p className="text-gray-200 my-2 text-sm sm:text-lg font-medium leading-relaxed tracking-wider w-2/3 ">
              With over 7 years of experience,
              our consistent recognition by leading industry awardsbr
            
              is a testament to our commitment to excellence.
            </p>
          </div>

          {/* Image */}
          <div className="relative flex-1 max-w-[200px]  mx-auto">
            <img src={mobileImage} alt="Mobile UI" className="w-full h-full object-center" />
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 ">
          {/* Feature 1 */}
          <div className="bg-[#121117] rounded-xl p-6 border-l border-gray-800 text-center hover:shadow-lg hover:shadow-yellow-500/10 transition">
            <h4 className="font-bold text-2xl bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-2 " style={{
              fontFamily:"Poppins"
            }}>
              Innovative Technology
            </h4>
            <p className="text-gray-200 text-sm sm:text-md font-medium leading-relaxed tracking-wider ">
              We continuously invest in cutting-edge technology to provide you
              with the best trading tools and platforms.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#121117] border-l border-gray-800 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-yellow-500/10 transition">
            <h4 className="font-bold text-2xl bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-2">
              Customer-Centric Approach
            </h4>
            <p className="text-gray-200 text-sm sm:text-sm font-medium leading-relaxed tracking-wider ">
              Our focus on customer satisfaction is reflected in the numerous
              awards we have received for our exceptional service.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#121117] border-l border-gray-800 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-yellow-500/10 transition">
            <h4 className="font-bold text-2xl bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-2">
              Regulatory Compliance
            </h4>
            <p className="text-gray-200 text-sm sm:text-sm font-medium leading-relaxed tracking-wider ">
              We adhere to the highest standards of regulatory compliance to
              ensure the security and integrity of your investments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
