import React from "react";
import GoldCard from "./GoldCard";
import CategoryTabs from "../forex/categories";
import ForexInfo from "../forex/ForexInfo";
import TutorialVideo from "../portfolio/TutorialVideo";
import ExpertTrade from "../forex/ExpertTrade";
import CurrencyMarket from "../forex/CurrencyMarket";
import PopularSharesTable from "../forex/PopularSharesTable";
import MetalsTable from "../forex/MetalsData";
import WhyTradersTrustUs from "../portfolio/WhyTradersTrustUs";
import FeatureSection from "../homepage/FeatureSection";
import ComexFeatures from "./ComexFeatures";
import ForexGoldInfo from "../forex/ForexGoldInfo";
import WhatIsComex from "./WhatIsComex";

export default function Gold() {
  return (
    <div>
      <GoldCard />
      <CategoryTabs />
      <ForexGoldInfo />
      <WhatIsComex />
      {/* <ForexInfo/> */}
      <ComexFeatures />
      <TutorialVideo />
      <ExpertTrade />
      <div className="bg-black py-4">
        <CurrencyMarket isForex={true} />
      </div>

      <PopularSharesTable isForex={true} />
      {/* <MetalsTable /> */}
      <WhyTradersTrustUs />
      <FeatureSection />
    </div>
  );
}
