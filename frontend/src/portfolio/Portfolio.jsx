import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "../homepage/FeatureSection";
import WhyTradersTrustUs from "./WhyTradersTrustUs";
import TutorialVideo from "./TutorialVideo";
import Managment from "./Managment";
import CategoryTabs from "../forex/categories";


export default function Portfolio() {
  return (
    <div>
     <HeroSection/>
     <CategoryTabs/>
     <Managment/>
<TutorialVideo/>

     <WhyTradersTrustUs/>
     <FeatureSection/>
     

    </div>
  );
}
