import medalImage from "../../assets/award1.png"; 
import IndustryAwardsSection from "./IndustryAwardsSection";
import TopAwardsSection from "./TopAwardsSection";

const AwardsSection = () => {
  return (
    <section className="bg-black text-white px-4 py-16 flex items-stretch justify-center gap-5 mx-auto flex-wrap lg:flex-nowrap">
      
      <div className="w-full lg:w-1/2">
        <TopAwardsSection />
      </div>

      <div className="w-full lg:w-1/2">
        <IndustryAwardsSection />
      </div>

    </section>
  );
};

export default AwardsSection;
