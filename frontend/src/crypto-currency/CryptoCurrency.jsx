import React from "react";
import CryptoHeroSection from "./CryptoHeroSection";
import CategoryTabs from "../forex/categories";
import ComexFeatures from "../gold/ComexFeatures";
import TutorialVideo from "../portfolio/TutorialVideo";
import ExpertTrade from "../forex/ExpertTrade";
import CurrencyMarket from "../forex/CurrencyMarket";
import PopularSharesTable from "../forex/PopularSharesTable";
import MetalsTable from "../forex/MetalsData";
import WhyTradersTrustUs from "../portfolio/WhyTradersTrustUs";
import FeatureSection from "../homepage/FeatureSection";
import WhatisCrypto from "./WhatisCrypto";
import CriptoTrading from "./CriptoTrading";

export default function CryptoCurrency() {
  return (
    <div>
      <CryptoHeroSection/>
     <CategoryTabs/>
     <WhatisCrypto/>
     <CriptoTrading/>
     {/* <ComexFeatures/> */}
     <TutorialVideo/>
     <ExpertTrade/>
      <div className="bg-black py-4">
      <CurrencyMarket />
    </div>
     <PopularSharesTable/>
     <MetalsTable/>
     <WhyTradersTrustUs/>
     <FeatureSection/>
    </div>
  );
}
