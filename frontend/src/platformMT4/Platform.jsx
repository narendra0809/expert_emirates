import React from "react";
import PlatformHeroSection from "./PlatformHeroSection";
import MTPlatformsSection from "./MTPlatformsSection";
import MT4FeaturesSection from "./MT4FeaturesSection";
import DownloadMT4Section from "./DownloadMT4Section";
import FeatureSection from "../homepage/FeatureSection";
import FAQSection from "./FAQSection";
import MT4TradingSections from "./MT4TradingSections";


export default function Platform() {
  return (
    <div className="bg-black w-full h-full">
      <div className="w-full">
        <PlatformHeroSection/>
        <MTPlatformsSection/>
        <MT4FeaturesSection/>
        <MT4TradingSections/>
        <DownloadMT4Section/>
        <FAQSection/>
        <FeatureSection/>

      </div>
    </div>
  );
}
