// components/AwardsSection.jsx
import medalImage from "../../assets/award2.png";
import trophyImage from "../../assets/award1.png";
import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopAwardsSection = () => {
  return (
    <section
      className="text-white px-4 rounded-3xl max-w-4xl mx-auto border shadow-lg py-5 h-full shadow-gray-900 border-gray-600"
      style={{ background: "rgba(18,17,20,1)" }}
    >
      {/* Tag */}
      <div className="flex justify-center mb-6 animate-fadeIn">
        <span className="bg-[#1E1E2F] text-sm text-white px-6 py-2 rounded-full font-semibold">
          What's New
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-t from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-4">
        Stay Updated with the Latest from Expert Emirates.
      </h2>

      {/* Paragraph */}
      <p className="text-center text-gray-300 max-w-3xl mx-auto text-base sm:text-lg my-10 animate-fadeIn">
        Discover the milestones and breakthroughs that define our journey. From
        innovative product launches to strategic partnerships, we continue to
        shape the future of trading. Our commitment to excellence and innovation
        ensures that you're always informed about the latest developments in the
        financial markets.
      </p>

      {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
  {/* Card 1 */}
{/* Card 1 */}
<div className="group/card1 bg-[#1E1E2F] rounded-xl border border-yellow-600 transition-all duration-300 p-1 hover:shadow-xl hover:shadow-yellow-500/20">
  <div className="bg-[#1E1E2F] rounded-xl border border-transparent group-hover/card1:border-t-yellow-600 group-hover/card1:border-l-yellow-600 group-hover/card1:border-b-yellow-700 group-hover/card1:border-r-yellow-700 transition-all duration-300 p-4 h-full flex flex-col">
    <img
      src={trophyImage}
      alt="Trophies"
      className="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover/card1:scale-95"
    />
    <h3 className="text-white font-bold text-lg mb-1 group-hover/card1:text-transparent group-hover/card1:bg-clip-text group-hover/card1:bg-gradient-to-t group-hover/card1:from-yellow-300 group-hover/card1:to-yellow-600 transition-all duration-300">
      Breaking News:
    </h3>
    <p className="text-md text-gray-100 flex-grow">
      Explore our latest achievements, market insights, and updates.
    </p>
    <button className="hidden group-hover/card1:flex items-center text-blue-400 hover:text-blue-300 text-xl mt-3 font-semibold transition-colors duration-200">
      <span className="pr-3">Read more</span>
      <span className="rotate-[225deg] transition-transform duration-300 group-hover/card1:translate-x-1">
        <FaArrowDown />
      </span>
    </button>
  </div>
</div>

{/* Card 2 */}
<div className="group/card2 bg-[#1E1E2F] rounded-xl border border-yellow-600 transition-all duration-300 p-1 hover:shadow-xl hover:shadow-yellow-500/20">
  <div className="bg-[#1E1E2F] rounded-xl border border-transparent group-hover/card2:border-t-yellow-600 group-hover/card2:border-l-yellow-600 group-hover/card2:border-b-yellow-700 group-hover/card2:border-r-yellow-700 transition-all duration-300 p-4 h-full flex flex-col">
   <img
  src={trophyImage}
  alt="Trophies"
  className="rounded-lg w-full h-48 object-cover mb-4 transition-transform duration-300 group-hover/card1:scale-95 border-transparent border-2 group-hover/card1:border-t-yellow-600 group-hover/card1:border-l-yellow-600 group-hover/card1:border-b-yellow-700 group-hover/card1:border-r-yellow-700"
/>

    <h3 className="text-white font-bold text-lg mb-1 group-hover/card2:text-transparent group-hover/card2:bg-clip-text group-hover/card2:bg-gradient-to-t group-hover/card2:from-yellow-300 group-hover/card2:to-yellow-600 transition-all duration-300">
      Global Impact:
    </h3>
    <p className="text-md text-gray-100 flex-grow">
      Learn how we're influencing the financial industry worldwide.
    </p>
    <button className="hidden group-hover/card2:flex items-center text-blue-400 hover:text-blue-300 text-xl mt-3 font-semibold transition-colors duration-200">
      <span className="pr-3">Read more</span>
      <span className="rotate-[225deg] transition-transform duration-300 group-hover/card2:translate-x-1">
        <FaArrowDown />
      </span>
    </button>
  </div>
</div>

</div>


      {/* ✅ Updated Button */}
      <div className="flex justify-center animate-fadeIn">
        <div className="p-[2px] rounded-full bg-[linear-gradient(90deg,#281000_0%,#C0971C_25.5%,#FFE976_49.5%,#C0971C_74.5%,#281000_100%)] shadow-[0_0_17px_rgba(254,214,0,0.2)]">
          <Link
  to="/company-news"
  onMouseEnter={(e) => {
    e.currentTarget.classList.add("bg-black", "text-white");
    e.currentTarget.classList.remove("text-black");
  }}
  onMouseLeave={(e) => {
    e.currentTarget.classList.remove("bg-black", "text-white");
    e.currentTarget.classList.add("text-black");
  }}
  className="min-w-[140px] md:min-w-[165px] h-[39px] px-[18px] py-[7px] rounded-full font-bold text-sm font-poppins transition duration-300 text-black flex items-center justify-center"
>
  Explore News
</Link>
        </div>
      </div>
    </section>
  );
};

export default TopAwardsSection;
