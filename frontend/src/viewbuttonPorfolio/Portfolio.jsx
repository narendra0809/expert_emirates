import React from "react";
import PortfolioManagement from "./PortfolioManagement";
import PortfolioBottom from "./PortfolioBottom";
import PricingCards from "./PricingCards";

export default function Portfolio() {
  return (
    <div>
        <PortfolioManagement/>
        <PortfolioBottom/>
        <PricingCards/>
    </div>
  );
}
