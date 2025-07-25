import React from "react";
import news1 from "../assets/company-news/news3.png";
import news2 from "../assets/company-news/news2.png";
import news3 from "../assets/company-news/news3.png";
import news4 from "../assets/company-news/news4.png";
import news5 from "../assets/company-news/news5.png";
import news6 from "../assets/company-news/news5.png";

const newsData = [
  {
    id: 1,
    date: "February 27, 2025",
    image: news1,
    title: "Expert Emirates Wins Best Mobile ",
    highlight: "FX Trading App 2025",
    desc: "Expert Emirates is proud to announce that it has been named the 'Best Mobile FX Trading App' at the Gulf Financial Expo 2025...",
    tag: "Event: Gulf Financial Expo",
  },
  {
    id: 2,
    date: "February 25, 2025",
    image: news2,
    title: "Expert Emirates Named Best Prime Trading ",
    highlight: "Broker 2025",
    desc: "Expert Emirates has been honored with the 'Best Prime Trading Broker' award at the Oman Financial Summit 2025...",
    tag: "Event: Oman Financial Summit",
  },
  {
    id: 3,
    date: "February 18, 2025",
    image: news3,
    title: "Naser Taher: The Visionary Behind Expert Emirates’",
    highlight: " Global Rise",
    desc: "Entrepreneur Magazine highlights the leadership of Naser Taher, the visionary behind Expert Emirates’ global success...",
    tag: "Publication: Entrepreneur Magazine",
  },
  {
    id: 4,
    date: "February 14, 2025",
    image: news4,
    title: "Expert Emirates Launches ",
    highlight: "UAE CFD Shares",
    desc: "Expert Emirates is excited to announce the launch of UAE CFD Shares on our trading platform...",
    tag: "",
  },
  {
    id: 5,
    date: "January 21, 2025",
    image: news5,
    title: "Expert Emirates Named Best Global ",
    highlight: "Regulated Broker 2024",
    desc: "Recognized as the 'Best Global Regulated Broker' at the Hong Kong Financial Expo 2024...",
    tag: "Event: Hong Kong Financial Expo",
  },
  {
    id: 6,
    date: "February 10, 2025",
    image: news6,
    title: "Another Prestigious Win for Expert Emirates ",
    highlight: "at Dubai Summit",
    desc: "This accolade reaffirms Expert Emirates' position as a market leader in trading innovation...",
    tag: "Event: Dubai Trading Summit",
  },
];

const NewsCard = ({ item, isHorizontal }) => (
  <div
    className={`h-full rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:scale-[1.02] ${
      isHorizontal ? "flex flex-col md:flex-row" : "flex flex-col"
    }`}
    style={{ backgroundColor: "#3C3A44", minHeight: "100%" }}
  >
    {/* IMAGE */}
    <div
      className={`relative ${
        isHorizontal ? "w-full md:w-[40%]" : "w-full"
      } ${isHorizontal ? "h-[260px]" : "h-[200px]"}`}
    >
      <img
        src={item.image}
        alt="news"
        className="w-full h-full object-cover"
      />
      <p className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded font-poppins">
        Date: {item.date}
      </p>
      {item.tag && (
        <div className="absolute bottom-2 left-2 bg-gradient-to-r from-[#ffe976] to-[#c0971c] text-black text-xs font-semibold px-3 py-1 rounded-full font-poppins">
          {item.tag}
        </div>
      )}
    </div>

    {/* CONTENT */}
    <div className="p-5 flex flex-col justify-between flex-1">
      <div>
        <h2 className="text-[20px] font-bold text-white leading-[30px] font-poppins">
          {item.title}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #281000 5.95%, #C0971C 29.93%, #FFE976 52.51%, #C0971C 76.02%, #281000 100%)",
            }}
          >
            {item.highlight}
          </span>
        </h2>
        <p className="text-sm text-[#CCCCCC] mt-3 font-poppins">{item.desc}</p>
      </div>
      <div className="mt-4">
        <a
          href="#"
          className="text-[#5A8FFF] text-sm font-medium hover:underline font-poppins"
        >
          Read More →
        </a>
      </div>
    </div>
  </div>
);

const LatestNews = () => {
  return (
    <div className="w-full bg-black py-12 px-4 overflow-hidden">
      <h1 className="text-center text-[28px] md:text-[36px] font-bold text-white mb-12 font-poppins">
        Latest News
      </h1>

      {/* Top two cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-[1300px] mx-auto mb-12">
        {newsData.slice(0, 2).map((item) => (
          <div key={item.id} className="w-full md:w-1/2">
            <NewsCard item={item} isHorizontal={true} />
          </div>
        ))}
      </div>

      {/* Scrolling Cards */}
      <div className="relative max-w-[1300px] mx-auto overflow-hidden group">
        <div className="flex gap-6 w-max animate-scrollX group-hover:pause items-stretch">
          {[...newsData.slice(2), ...newsData.slice(2)].map((item, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-[300px] h-[500px] flex flex-col"
            >
              <NewsCard item={item} isHorizontal={false} />
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      {/* <div className="mt-10 flex justify-center">
        <button className="bg-gradient-to-r from-[#ffe976] to-[#c0971c] text-black font-semibold px-6 py-2 rounded-full text-sm hover:brightness-105 transition font-poppins">
          View More →
        </button>
      </div> */}
    </div>
  );
};

export default LatestNews;
