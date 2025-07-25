import React from "react";
import ForexHeroSection from "./ForexHeroSection";
import CategoryTabs from "./categories";
import ForexInfo from "./ForexInfo";
import TutorialVideo from "../portfolio/TutorialVideo";
import FeatureSection from "../homepage/FeatureSection";
import WhyTradersTrustUs from "../portfolio/WhyTradersTrustUs";
import ExpertTrade from "./ExpertTrade";
import CurrencyMarket from "./CurrencyMarket";
import PopularSharesTable from "./PopularSharesTable";
import MetalsTable from "./MetalsData";
import ForexGoldInfo from "./ForexGoldInfo";

export default function Forex() {
  return (
    <div className="bg-black w-full h-full">
      <div className="w-full">
        <ForexHeroSection />
        <CategoryTabs />
        <ForexGoldInfo/>
        <ForexInfo />
        <TutorialVideo />
        <ExpertTrade />
        <CurrencyMarket />
        <PopularSharesTable />
        <MetalsTable />
        <WhyTradersTrustUs />
        <FeatureSection />
      </div>
    </div>
  );
}
