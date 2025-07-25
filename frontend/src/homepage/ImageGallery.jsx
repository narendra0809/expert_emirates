import { useState } from "react";
import user1 from "../assets/imageGallery/user1.png";
import user2 from "../assets/imageGallery/user2.jpg";
import user3 from "../assets/imageGallery/user3.jpg";
import user4 from "../assets/imageGallery/user4.jpg";
import user5 from "../assets/imageGallery/user5.jpg";
import user6 from "../assets/imageGallery/user6.jpg";
import user7 from "../assets/imageGallery/user7.jpg";
import user8 from "../assets/imageGallery/user8.jpg";
import user9 from "../assets/imageGallery/user9.jpg";

const images = [user1, user2, user3, user4, user5, user6, user7, user8, user9];

const ImageGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0); // ✅ First image open by default

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // toggle selection
  };

  return (
    <div className="relative bg-black py-10 flex items-center justify-center mx-auto">
      <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-none no-scrollbar">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Gallery ${idx}`}
            onClick={() => handleClick(idx)}
            className={`cursor-pointer object-cover rounded-3xl transition-all duration-300
              ${activeIndex === idx ? "h-96 w-96" : "h-96 w-28"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
