import React from "react";
import goldenCircle from "../assets/support/support-circle.png"; // Use the exact image from your screenshot

const SupportHeroSection = () => {
  return (
    <section className="bg-black text-white py-28  flex flex-col items-center text-center">
      {/* Golden Circle Image */}
     <div className="w-[210px] h-[210px]">
       <img
        src={goldenCircle}
        alt="Golden Circle"
        className="object-cover mb-6"
      />                                                                                                                                                    
     </div>
 
 
      {/* Heading with gradient and bold white */}
      <h2 className="text-3xl md:text-3xl font-bold font-sans tracking-widest leading-loose -mt-16">
        <span className="text-transparent bg-clip-text bg-[linear-gradient(180deg,#281000_-59.46%,#C0971C_7.05%,#FFE976_69.64%,#C0971C_134.84%,#281000_201.35%)]">
          Get in Touch
        </span>{" "}
        –{" "}
        <span className="text-white">
          We’re Always
          <br />
          Here for You!
        </span>
      </h2>

      {/* Paragraph */}
      <p className="tracking-widest leading-snug text-gray-300 font-sans text-xl font-normal mt-4 max-w-2xl">
        Need help? Have questions? Our support team is available 24/7 to assist
        you in the way that suits you best!
      </p>
    </section>
  );
};

export default SupportHeroSection;
