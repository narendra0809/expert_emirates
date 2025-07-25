import React from "react";
import CopyTradingSection from "./CopyTradingSection";
import WhatIsCopyTrading from "./WhatIsCopyTrading";
import CopyTradingIntro from "./CopyTradingIntro";
import Cards from "./cards";

export default function CopyTrading() {
  return (
    <div>
      <CopyTradingSection/>
      {/* <WhatIsCopyTrading/> */}
      <CopyTradingIntro/>
      <Cards/>
    </div>
  );
}
