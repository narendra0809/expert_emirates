// pages/PricingPage.jsx
import { useState } from "react";

import PricingSection from "./components/PricingSection";

export default function PricingPage({ clicked, setClicked, plans }) {
  const [eText, setEText] = useState("Forex");
  return (
    <div className="text-white  hide-scrollbar bg-black ">
      <PricingSection
        clicked={clicked}
        setClicked={setClicked}
        text={eText}
        setEText={setEText}
        plans={plans}
      />
    </div>
  );
}
