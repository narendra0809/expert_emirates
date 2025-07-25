import React from 'react';

const GrowthForm = () => {
  return (
    <div className="bg-black min-h-screen py-10 px-5">
      <div className="bg-[#111117] px-5 py-10 md:px-12 lg:px-20 rounded-xl text-white max-w-5xl mx-auto w-full shadow-xl">
        <h2
          className="text-[28px] md:text-[32px] font-semibold text-center mb-10"
          style={{
            fontFamily: 'Poppins',
            lineHeight: '100%',
            letterSpacing: '0.12em',
            background: 'linear-gradient(180deg, #281000 0%, #C0971C 25.5%, #FFE976 49.5%, #C0971C 74.5%, #281000 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Join people of growth mindset
        </h2>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="bg-[#1a1a22] border border-gray-700 rounded-full px-5 py-3 outline-none w-full text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-[#1a1a22] border border-gray-700 rounded-full px-5 py-3 outline-none w-full text-white placeholder-gray-400"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="bg-[#1a1a22] border border-gray-700 rounded-full px-5 py-3 outline-none w-full text-white placeholder-gray-400"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-[#1a1a22] border border-gray-700 rounded-full px-5 py-3 outline-none w-full text-white placeholder-gray-400"
          />

          <select
            className="bg-[#1a1a22] border border-gray-700 rounded-full px-5 py-3 outline-none w-full text-white placeholder-gray-400"
          >
            <option className="text-black">Select Country</option>
            <option className="text-black">India</option>
            <option className="text-black">USA</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <input
              type="text"
              placeholder="Position"
              className="bg-[#1a1a22] border border-gray-700 rounded-full px-5 py-3 outline-none w-full text-white placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Select Highest Qualification"
              className="bg-[#1a1a22] border border-gray-700 rounded-full px-5 py-3 outline-none w-full text-white placeholder-gray-400"
            />
            <input
              type="file"
              className="bg-[#1a1a22] border border-gray-700 rounded-full px-5 py-2 w-full text-white file:bg-white file:text-black file:rounded-full file:px-3 file:py-1"
            />
          </div>

          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="text-gray-300">
              Accept Terms of service and Privacy Policy
            </label>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full px-12 py-3 font-bold text-xl transition-all hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GrowthForm;
