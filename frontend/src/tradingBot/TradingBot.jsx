import React from "react";
import TradHeroSection from "./TradHeroSection";
import CategoryTabs from "../forex/categories";
// import ForexInfo from "../forex/ForexInfo";
import TutorialVideo from "../portfolio/TutorialVideo";
import WhyTradersTrustUs from "../portfolio/WhyTradersTrustUs";
import FeatureSection from "../homepage/FeatureSection";
import ExpertAdvisor from "./ExpertAdvisor";


export default function TradingBot() {
  return (
    <div className="mt-10">
     <TradHeroSection/>
     <CategoryTabs/>
     <ExpertAdvisor/>
     {/* <ForexInfo/> */}
     <TutorialVideo/>
     <WhyTradersTrustUs/>
     <FeatureSection/>
    </div>
  );
}
