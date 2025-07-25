import React from "react";
import About1 from "../assets/aboutus/image1.png";
import About2 from "../assets/aboutus/image2.png";
import About3 from "../assets/aboutus/image 3.png";

const AboutHerosction = () => {
  return (
    <section className="w-full bg-black px-4 md:px-8 lg:px-12 py-28">
      <div className="max-w-7xl mx-auto">
        {/* Heading exactly matching the grid width */}
        <h1
          className="text-center font-bold mb-16"
          style={{
            fontFamily: "Poppins",
            fontSize: "clamp(2rem, 5vw, 52px)",
            lineHeight: "62px",
            letterSpacing: "0.25em",
            background:
              "linear-gradient(180deg, #281000 5.95%, #C0971C 29.93%, #FFE976 52.51%, #C0971C 76.02%, #281000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to Expert Emirates
        </h1>

        {/* Grid Section */}
        <div className="flex flex-col md:flex-row gap-8 text-white font-[Poppins]">
          {/* Left Block */}
          <div className="flex-1 group flex flex-col justify-between">
            <img
              src={About1}
              alt="Green chart"
              className="w-full h-[220px] object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
            />
            <p
              className="mt-4 text-[15px] leading-relaxed flex-1"
              style={{
                background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <strong>Expert Emirates</strong> is a leading force in the
              financial markets, empowering traders with cutting-edge insights
              and AI-driven strategies. Our goal is to turn market uncertainties
              into profitable opportunities for our clients worldwide.
            </p>
          </div>

          {/* Center Block */}
          <div className="flex-[1.5] group">
            <img
              src={About2}
              alt="Gold chart"
              className="w-full h-full max-h-[500px] object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Right Block */}
          <div className="flex-1 group flex flex-col justify-between">
            <p
              className="mb-4 text-[15px] italic leading-relaxed flex-1"
              style={{
                background: "linear-gradient(90deg, #FFFFFF 0%, #999999 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <span className="italic">At Expert Emirates</span>, we combine
              expertise, innovation, and dedication to help traders at all
              levels succeed in the forex world. Join us and take your trading
              journey to the next level.
            </p>
            <img
              src="images/3ab961cf7e4dccde6366e790fad107f5b510f111.png"
              alt="Abstract"
              className="w-full h-[220px] object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHerosction;
