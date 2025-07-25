import React from "react";
import { Link } from "react-router-dom";
import { cardsData } from "../blogdetail/data";

const BlogCryptoForecastCards = ({ blogType }) => {
  const filteredCards = cardsData.filter((blog) => blog.type === blogType);
  if (filteredCards.length === 0) {
    return (
      <div className="bg-black py-10 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p>No cards found for the selected category.</p>
        </div>
      </div>
    );
  }


  return (
    <div className="bg-black py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCards.map((card, idx) => (
          <Link to={`/blog/read-blog/${card.blogId}`} key={idx}>
            <div
              className="flex flex-col md:flex-row rounded-xl shadow-md overflow-hidden h-full"
              style={{ backgroundColor: "#121117", color: "#ffffff" }}
            >
              {/* Text Section */}
              <div className="p-5 flex flex-col justify-between md:w-1/2 relative">
                {/* Badge Button - Golden Styled */}
               <div className="absolute left-4 top-4">
  <div
    className="text-[12px] px-4 py-[5px]  rounded-full font-semibold text-black shadow-[0px_0px_10px_rgba(254,214,0,0.25)] shadow-[inset_0px_0px_10px_rgba(255,215,0,0.25)] outline outline-[0.8px] outline-yellow-600/50"
    style={{
      background:
        "linear-gradient(270deg, #281000 -4.65%, #C0971C 23.29%, #FFE976 49.59%, #C0971C 76.98%, #281000 104.92%)",
      border: "1px solid",
      borderImageSource:
        "linear-gradient(266.31deg, rgba(200, 161, 39, 0.5) 0%, rgba(102, 102, 102, 0) 100%)",
    }}
  >
    {card.badge}
  </div>
</div>


                {/* Title & Description */}
                <h3 className="text-lg font-semibold py-8">{card.title}</h3>
                <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                  {card.desc}
                </p>

                {/* Date + Footer */}
                <div className="mt-4 text-xs text-gray-500">
                  {card.date}
                  <div className="mt-2 flex gap-4 text-sm">
                    <span>👁️ {card.views || 4}</span>
                    <span>💬 {card.comments || 4}</span>
                    <span>🔗</span>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 h-48 md:h-64">
                <img
                  src={card.image}
                  alt="Chart"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCryptoForecastCards;
