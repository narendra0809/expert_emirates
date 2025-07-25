import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cardsData } from "./data";
import { GoArrowLeft } from "react-icons/go";
import FeatureSection from "../homepage/FeatureSection";

const ReadBlog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = cardsData.find((card) => card.blogId === parseInt(blogId));

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl bg-black min-h-screen">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="bg-black text-white py-10 px-4 min-h-screen">
      {/* Back Icon */}
      <div className="flex items-start justify-start mb-6">
        <GoArrowLeft
          onClick={() => navigate(-1)}
          className="text-white cursor-pointer text-3xl"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2 leading-snug">
          {blog.title}
        </h1>

        {/* Date & Badge */}
        <div className="text-center text-sm text-gray-500 mb-4">
          {blog.date} · {blog.badge}
        </div>

        {/* Image with Updated Badge Button */}
        <div className="relative mb-3">
          <img
            src={blog.image}
            alt="Blog Visual"
            className="w-full h-[250px] sm:h-[350px] object-cover rounded-xl"
          />

          {/* Gradient Hover Styled Button */}
          <div className="absolute bottom-4 right-4">
            <button
              className="text-white text-[10px] sm:text-sm font-bold px-4 py-1.5 rounded-full bg-black border border-yellow-400 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#C0971C] hover:to-[#FFE976]"
            >
              {blog.badge}
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-sm text-white px-4 py-1.5 rounded-full transition"
          >
            <GoArrowLeft className="mr-2 text-lg" />
            Back
          </button>
        </div>

        {/* Blog Content */}
        <div className="text-sm md:text-base leading-relaxed space-y-4">
          <p>
            BTCUSDT held up quite strongly during the market fall and largely
            weathered the storm, while the stock market and indices were in free
            fall. The improvement in the fundamental situation has once again
            heightened interest in the asset among traders and investors.
          </p>
          <p>
            Earlier, I pointed out that against the backdrop of falling markets
            (due to Trump’s policies and tariff wars), Bitcoin is holding up
            fairly well. It cannot be compared to gold, which maintains its
            status as a safe haven, but overall it has stayed out of the 75K
            risk zone.
          </p>
          <p>
            Countries are continuing negotiations in the US, which generally
            points to an improvement in the trade situation, but all attention
            remains on relations between China and the US, and a resolution may
            be close.
          </p>
          <p>
            Technically, on the oddly-weekly timeframe, the price has broken
            through the trend resistance and the asset has moved from the sell
            zone to the buy zone, which in general only increases interest in
            the flagship. Bitcoin is stuck in the 95K-97K range. A false
            breakout of resistance provokes a correction, and now we need to
            monitor where and when the correction will stop. This will show us
            important support that could become the basis for continuation.
          </p>

          <p className="font-semibold">Resistance levels: 95K, 100K, 102.5K</p>
          <p className="font-semibold">Support levels: 93.5, 93.2, 92, 91K</p>

          <p>
            To break through 95K and continue growing, Bitcoin must form
            consolidation. There is none at the moment, and a correction and
            halt may indicate the beginning of consolidation. However, the focus
            is on 93.5 – 92K. If the price manages to vary within the local
            boundaries and continues to bounce off support and resistance, we’ll
            have a chance for a breakthrough and continued growth to 100K.
            Otherwise, Bitcoin may form a deeper correction, for example to 91–
            88K!
          </p>
        </div>

        {/* Author Footer */}
        <div className="text-sm text-gray-500 mt-8 text-left">
          Best regards, <br />
          <strong className="text-white">R. Linda</strong>
        </div>
      </div>

      {/* Feature Section */}
      <FeatureSection />
    </div>
  );
};

export default ReadBlog;
