import React from "react";
import arrowImg from "../assets/arrow.png";
import logoImg from "../assets//heroSectionImages/logo.png";
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function PlansSection() {
  return (
    <div className="bg-black text-white px-4 md:px-12 py-12 font-sans bg-[url('/src/assets/bg.png')] bg-cover bg-no-repeat">
      <div className="grid md:grid-cols-3 gap-6 items-center border-b border-gray-800 pb-12">
        {/* Logo + Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <img src={logoImg} alt="Logo" className="w-20" />
          <h2 className="text-xl font-semibold text-gold">EXPERT EMIRATES</h2>
          <p className="text-sm text-gray-300">TURNING HOPES INTO REALITY</p>
        </div>

        {/* Center Content */}
        <div className="bg-black/40 border border-gold rounded-xl p-6 space-y-4 text-center">
          <h3 className="text-gold text-2xl font-bold">GET TO KNOW OUR PLANS AND PRICING</h3>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 px-6 py-2 rounded-full text-black font-bold">About Us</button>
            <button className="bg-gradient-to-r from-yellow-700 to-yellow-500 px-6 py-2 rounded-full text-black font-bold">Pricing</button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {[FaInstagram, FaFacebookF, FaYoutube, FaXTwitter].map((Icon, idx) => (
            <div key={idx} className="bg-gold rounded-full p-3">
              <Icon className="text-black text-2xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
        {/* Customer Dashboard */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">CUSTOMER DASHBOARD</h3>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </p>
          <p className="text-gray-300">Eros dolor interdum. Suspendisse varius enim in eros elementum tristique.</p>
        </div>

        {/* Arrow + Button Group */}
        <div className="flex flex-col items-center space-y-4">
          <img src={arrowImg} alt="Arrow" className="w-36" />
          <div className="flex flex-wrap gap-4 justify-center">
            {["FOREX + GOLD", "CRYPTOCURRENCY", "FNDED ACCOUNTS", "ROBOT TRADING"].map((text, idx) => (
              <button key={idx} className="border border-gold px-4 py-2 rounded-full bg-black/30 hover:bg-gold hover:text-black transition">
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
