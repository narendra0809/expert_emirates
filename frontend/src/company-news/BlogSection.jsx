import React from "react";
import chart1 from "../assets/blog/image1.png";
import chart2 from "../assets/blog/image2.png";
import chart3 from "../assets/blog/image3.png";
import chart4 from "../assets/blog/image4.png";
import chart5 from "../assets/blog/image5.png";
import chart6 from "../assets/blog/image6.png";
import chart7 from "../assets/blog/image7.png";

const posts = [
  {
    title: "PENDLEUSDT → Resistance retest. One step away from distribution",
    desc: "PENDLEUSDT is preparing for distribution after a prolonged consolidation. The price is testing a key resistance level, which, if broken, will trigger a rally...",
    status: "CRYPTO FORECAST",
    time: "20.05.2025",
    views: 45,
    shares: 11,
    img: chart1,
  },
  // Add more posts here...
];

export default function PostGrid() {
  return (
    <div className="bg-black px-4 md:px-10 py-10">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6 bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-100 bg-clip-text text-transparent">
          Latest Market Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-[#3C3A44] rounded-2xl p-5 hover:scale-[1.02] transition-transform duration-300 shadow-md"
            >
              <span
                className={`inline-block mb-4 px-4 py-1 text-xs font-semibold rounded-full ${
                  post.status === "CRYPTO FORECAST"
                    ? "bg-[#A2E6E8] text-black"
                    : "bg-yellow-400 text-black"
                }`}
              >
                {post.status}
              </span>

              <img
                src={post.img}
                alt={post.title}
                className="w-full h-44 object-cover rounded-xl mb-4 hover:scale-105 transition duration-300"
              />

              <h3 className="text-white text-lg md:text-xl font-bold leading-snug mb-2">
                {post.title}
              </h3>

              <p className="text-gray-300 text-sm mb-3">{post.desc}</p>

              <p className="text-sm text-gray-400 mb-4">{post.time}</p>

              <div className="flex items-center gap-6 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  👁️ {post.views}
                </span>
                <span className="flex items-center gap-1">
                  🔄 {post.shares}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
