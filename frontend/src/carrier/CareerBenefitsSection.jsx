import React from "react";
import img1 from "../assets/carrers/benefit/benefit1.png";
import img2 from "../assets/carrers/benefit/benefit2.png";
import img3 from "../assets/carrers/benefit/benefit3.png";
import img4 from "../assets/carrers/benefit/benefit4.png";
import img5 from "../assets/carrers/benefit/benefit5.png";
import img6 from "../assets/carrers/benefit/benefit6.png";

const benefits = [
  {
    title: "Global & Collaborative Work Culture",
    text: "Thrive in a dynamic and multicultural environment.",
    img: img1,
  },
  {
    title: "Ongoing Training & Development",
    text: "Access world-class financial training and skill enhancement programs.",
    img: img2,
  },
  {
    title: "Competitive Salaries & Performance Bonuses",
    text: "Get rewarded for your expertise and hard work.",
    img: img3,
  },
  {
    title: "Career Growth Opportunities",
    text: "A clear path to professional advancement and leadership roles.",
    img: img4,
  },
  {
    title: "Comprehensive Health & Wellness Plans",
    text: "Prioritizing your well-being with top-tier medical benefits.",
    img: img5,
  },
  {
    title: "Flexible Work Environment",
    text: "Hybrid and remote work options for better work-life balance.",
    img: img6,
  },
];

const CareerBenefitsSection = () => {
  return (
    <section className="bg-black text-white py-14 px-4 md:px-20 font-poppins">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-[#1A1A1A] rounded-2xl p-5 flex gap-4 items-start shadow-md"
          >
            <img
              src={benefit.img}
              alt={benefit.title}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-sm bg-gradient-to-b from-yellow-800 via-yellow-300 to-yellow-800 bg-clip-text text-transparent font-semibold tracking-wider leading-relaxed">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-200 leading-normal">
                {benefit.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Paragraph Text */}
      <p className="text-center text-gray-300 text-lg mt-12 max-w-xl mx-auto">
        Ready to take your career to the next level? Join us and be part of an innovative, supportive, and rewarding work environment.
      </p>

      {/* Gradient Text Button */}
      <div className="text-center mt-6">
        <button className="text-xl font-bold px-7 py-2 rounded-full bg-white/10 border border-t-yellow-500 transition border-b-yellow-500 border-l-yellow-700 border-r-yellow-700 hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:via-50% hover:to-[#452e06]">
          <span className="    text-white-300 font-semibold    hover:text-black transition duration-300">
            Submit Your CV
          </span>
        </button>
      </div>
    </section>
  );
};

export default CareerBenefitsSection;
