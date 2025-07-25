import React from "react";
import CarrierHero from "./CarierHero";
import JoinExpertEmirate from "./JoinExpertEmirate";
import CareersSection from "./CareersSection";
import BenefitsGlassCard from "./BenefitsGlassCard";
import CareerBenefitsSection from "./CareerBenefitsSection";
import GrowthForm from "./GrowthForm";
import OpenPositions from "./OpenPositions";
import FeatureSection from "../homepage/FeatureSection";

export default function Career() {
  return (
    <div>
      <CarrierHero />
      <JoinExpertEmirate />
      <CareersSection />
      <BenefitsGlassCard />
      <CareerBenefitsSection />
      <GrowthForm/>
      <OpenPositions/>
      <FeatureSection/>
    </div>
  );
}
