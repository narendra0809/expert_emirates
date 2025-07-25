import React from "react";
import SupportHeroSection from "./SupportHeroSection";
import SupportOptions from "./SupportOptions";
import ContactForm from "./ContactForm";
import FollowUsSection from "./FollowUsSection";
import FeatureSection from "../homepage/FeatureSection";
import { div } from "framer-motion/client";
export default function Support() {
  return (
<div className="bg-black">
  <div className="mx-auto max-w-7xl px-4">
    <SupportHeroSection />
    <SupportOptions />
    <ContactForm />
    <FollowUsSection />
    <FeatureSection />
  </div>
</div>

  );
}
