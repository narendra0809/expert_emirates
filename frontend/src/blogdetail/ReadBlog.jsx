import { useLocation, useNavigate } from "react-router-dom";

import { GoArrowLeft } from "react-icons/go";
import FeatureSection from "../homepage/FeatureSection";

const ReadBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { blog } = location.state;

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl bg-black min-h-screen">
        Blog not found.
      </div>
    );
  }
  return (
    <div className="bg-black text-white py-10 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-2 leading-snug">
          {blog.title}
        </h1>

        {/* Date & Badge */}
        <div className="text-center text-sm text-gray-500 mb-4">
          {blog.published_at} · {blog.category}
        </div>

        {/* Image with Updated Badge Button */}
        <div className="relative mb-3">
          <img
            src={blog.blog_image}
            alt="Blog Visual"
            className="w-full h-[250px] sm:h-[350px] object-cover rounded-xl"
          />

          {/* Gradient Hover Styled Button */}
          <div className="absolute bottom-4 right-4">
            <button className="text-white text-[10px] sm:text-sm font-bold px-4 py-1.5 rounded-full bg-black border border-yellow-400 transition-all duration-300 hover:bg-gradient-to-b hover:from-[#C0971C] hover:to-[#FFE976]">
              {blog.category}
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
          <p>{blog.content}</p>
        </div>

        {/* Author Footer */}
        {/* <div className="text-sm text-gray-500 mt-8 text-left">
          Best regards, <br />
          <strong className="text-white">R. Linda</strong>
        </div> */}
      </div>

      {/* Feature Section */}
      <FeatureSection />
    </div>
  );
};

export default ReadBlog;
