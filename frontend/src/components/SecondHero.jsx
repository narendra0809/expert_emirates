import React from "react";
import { motion } from "framer-motion";
import ExpertCard from "./herosection/ExpertCard";
import PricingCard from "./herosection/PricingCard";
import SocialIconsCard from "./herosection/SocialIconsCard";
import ServiceCategories from "./herosection/ServiceCategories";
import CustomerDashboard from "./herosection/CustomerDashboard";
import MarqueeSlider from "./herosection/MarqueeSlider";

const SecondHero = () => {
  return (
  <section className="relative w-full min-h-screen pt-16 px-4 md:px-10 lg:px-10 bg-black text-white overflow-hidden">
  {/* Main Motion Wrapper */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="space-y-16"
  >
    {/* Top Cards Row */}
    <div className="flex flex-wrap justify-center items-center gap-6">
      <ExpertCard />
      <PricingCard />
      <SocialIconsCard />
    </div>

    

    {/* Dashboard & Service Category */}
<div className="w-full ">

      {/* 12-column grid layout */}
      <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 7 columns */}
        <div className=" md:col-span-8 lg:col-span-7">
          <CustomerDashboard />
        </div>

        {/* Right: 4 columns */}
        <div className="lg:col-span-5 md:col-span-4">
          <ServiceCategories />
        </div>
      </div>
    </div>



    {/* Marquee Slider */}
    {/* <div>
      <MarqueeSlider />
    </div> */}
  </motion.div>
</section>

  );
};

export default SecondHero;
