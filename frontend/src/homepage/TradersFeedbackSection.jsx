import React from 'react';
import ImageGallery from './ImageGallery';
import { div } from 'framer-motion/client';

const TradersFeedbackSection = () => {
  return (
   <div className='w-full bg-black py-12'>
     <div className="w-full bg-black py-12 flex justify-center items-center">
      <div className="w-[575px] h-[197px] flex flex-col items-center justify-center gap-[33px] text-center text-white font-['Helvetica Neue']">
        {/* Button */}
        <button className="px-4 py-1 text-white text-[14px] rounded-full border border-black bg-gray-900 font-sans font-semibold">
          Traders Feedback
        </button>

        {/* Gradient Heading */}
        <h2 className="text-3xl font-bold leading-[100%] bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent tracking-widest">
          Our Traders <span className="text-red-500">L❤️ve</span> Us
        </h2>

        {/* Description */}
        {/* <p className="text-[18px] font-normal leading-[100%]">
          Treasure Funded shines with traders like you! See what real traders<br />
          have to say about our best-in-class prop trading firm.
        </p> */}

        {/* Rating */}
        <div className="text-xl leading-[100%] my-4">
          <p>
            <span className="font-bold">Excellent - </span>
            <span className="text-yellow-400">★★★★</span> <span>★</span>
          </p>
          <p className='my-3'>Rated 4.5 / 5 based on 20,000 reviews on</p>
        </div>
      </div>
    </div>
      <ImageGallery/>
   </div>
  );
};

export default TradersFeedbackSection;
