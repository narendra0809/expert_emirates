import { useState } from "react";
import WelcomeBanner from "../WelcomeBanner";
import ButtonGroupSection from "./ButtonGroupSection";
import PricingPage from "../PricingPage";
import SupportSection from "../SupportSection";
import { useOutletContext } from "react-router-dom";

const UserDashboard = () => {
  const [clicked, setClicked] = useState("Forex");
  const { plans } = useOutletContext();
  return (
    <main className="w-full mx-auto overflow-hidden transition-all duration-300">
      <WelcomeBanner />
      <ButtonGroupSection clicked={clicked} setClicked={setClicked} />
      <PricingPage clicked={clicked} setClicked={setClicked} plans={plans} />
      <SupportSection />
    </main>
  );
};

export default UserDashboard;
