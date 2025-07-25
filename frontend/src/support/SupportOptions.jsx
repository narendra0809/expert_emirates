import React from "react";
import whatsappIcon from "../assets/support/whatsapp.png";
import phoneIcon from "../assets/support/call.png";
import headsetIcon from "../assets/support/headphone.png";
import videoIcon from "../assets/support/video.png";
import calendarIcon from "../assets/support/calendar.png";

const supportData = [
  {
    icon: whatsappIcon,
    title: "WhatsApp Support – Quick & Easy!",
    desc: "Get real-time support directly on WhatsApp. No wait times, just instant solutions!",
  },
  {
    icon: phoneIcon,
    title: "One-Tap Call Back – No Waiting!",
    desc: "Fill out a short form, and we’ll call you at your preferred time. You choose when!",
  },
  {
    icon: headsetIcon,
    title: "24/7 Instant Call Support – No Holds, No Hassle!",
    desc: "Talk to our experts directly, day or night. We ensure ZERO hold time!",
  },
  {
    icon: videoIcon,
    title: "Video Call Consultation – Face-to-Face Support!",
    desc: "Schedule a video call with our experts for a live walkthrough of our services and solutions.",
  },
  {
    icon: calendarIcon,
    title: "Book an Expert Session – Get a 1-on-1 Consultation!",
    desc: "Need tailored advice? Book a session with one of our professionals at your convenience.",
  },
];

const SupportOptions = () => {
  return (
    <section className="bg-black text-white  px-4 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col gap-10  items-center">
        {/* First Row - 2 Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-6 w-full mb-20">

          {supportData.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="relative group text-center rounded-3xl pt-20 px-5 pb-10 border-l-yellow-500 border-t-yellow-500 border-r-yellow-500 border-b-black border shadow-md w-full md:w-[calc(50%-1rem)] transition-all duration-300 hover:scale-[1.02] bg-[#1D1B25] hover:bg-gradient-to-b hover:from-[#e4a020] hover:via-yellow-300 hover:to-[#e4a020]"
            >
              {/* Floating Image */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-28 transition-all duration-300 group-hover:-translate-y-2">
                <img
                  src={item.icon}
                  alt="support-icon"
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.4))" }}
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold font-sans mb-2 group-hover:text-black transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 w-5/6 mx-auto group-hover:text-black transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-20 md:gap-6 w-full ">
          {supportData.slice(2).map((item, index) => (
            <div
              key={index + 2}
              className="relative group text-center rounded-2xl pt-20 px-5 pb-10 border-l-yellow-500 border-t-yellow-500 border-r-yellow-500 border-b-black border shadow-md w-full md:w-[calc(33.333%-1rem)] transition-all duration-300 hover:scale-[1.02] bg-[#1D1B25] hover:bg-gradient-to-b hover:from-[#e4a020] hover:via-yellow-300 hover:to-[#e4a020]"
            >
              {/* Floating Image */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-28 transition-all duration-300 group-hover:-translate-y-2">
                <img
                  src={item.icon}
                  alt="support-icon"
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.4))" }}
                />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold font-sans mb-2 group-hover:text-black transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 w-5/6 mx-auto group-hover:text-black transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;
