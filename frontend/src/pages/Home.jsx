import React from "react";
import Navbar1 from "../components/Navbar1";
import HeroSection from "../components/HeroSection";
import MobileTradingSection from "../homepage/MobileTradingSection";
import SecondHero from "../components/SecondHero";
import MarketSection from "../homepage/MarketSection";
import TrustSection from "../homepage/TrustSection";
import PricingSection from "../homepage/PricingSection";
import BrochureSection from "../homepage/BrochureSection";
import WhyExpertSection from "../homepage/WhyExpertSection";
import InsightSection from "../homepage/InsightSection";
import ExpertMotion from "../homepage/ExpertMotion";
import ButtonTabs from "../homepage/ButtonTabs";
import ForexSection from "../homepage/ForexSection";
import AwardsSection from "../homepage/awardsSections/AwardsSection";
import TradersFeedbackSection from "../homepage/TradersFeedbackSection";
import WorldMapLabels from "../homepage/WorldMapWithMarkers";
import Reviews from "../homepage/Reviews";
import FeatureSection from "../homepage/FeatureSection";
import CurrencyMarket from "../forex/CurrencyMarket";
import StockMarcketChart from "../homepage/StockMarcketChart";
import StatsCards from "../homepage/StatsCards";
import WelcomePopup from "../components/WelocmePage";
const HomePage = () => {
  return (
    <div className="bg-dark text-white font-sans">
      <WelcomePopup/>
      <HeroSection />
      <SecondHero />
      <MarketSection />
      <ButtonTabs/>
      {/* <ForexSection/> */}
    {/* <StockMarcketChart/> */}
      {/* <CurrencyMarket/> */}
      {/* <ScrollingCards/> */}
      {/* <TrustSection /> */}
      {/* <PricingSection /> */}
      <BrochureSection/>
      <MobileTradingSection />
      <WhyExpertSection/>
      <InsightSection/>
      <ExpertMotion/>
      <WorldMapLabels/>
      <StatsCards/>
      <AwardsSection/>
      <TradersFeedbackSection/>
      <Reviews/>
      <FeatureSection/>
    </div>
  );
};

export default HomePage;
