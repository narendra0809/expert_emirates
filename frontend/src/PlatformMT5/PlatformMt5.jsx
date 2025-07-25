import React from "react";
import PlatfromMt5HeroSection from "./PlatfromMt5HeroSection";
import MTPlatformsSection1 from "./MTPlatformsSection1";
// import EliteTradingTeamSection from "../about/EliteTradingTeamSection ";
import DownloadMT5Section from "./DownloadMT5Section";
import FeatureSection from "../homepage/FeatureSection";
import FAQSection from "./FAQSection";
import TradingSections from "./TradingSections";
import MT5FeaturesSection from "./MT5FeaturesSection";


export default function PlatformMt5() {
  return (
    <div className="bg-black w-full h-full">
      <div className="w-full">
        <PlatfromMt5HeroSection/>
        <MTPlatformsSection1/>
        <MT5FeaturesSection/>
        <TradingSections/>
        {/* <EliteTradingTeamSection/> */}
        <DownloadMT5Section/>
        <FAQSection/>
        <FeatureSection/>
      </div>
    </div>
  );
}
