import { useState } from "react";
import logoImage from "../assets/setting/image1.png";
import faviconImage from "../assets/setting/logo.png";

const UploadCard = ({ title, imgSrc, name, onUpload, onRemove }) => {
  return (
    <div className="bg-[#121117] border border-[#1e1e25] rounded-xl p-4 w-full md:w-[48%] shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left Side: Larger Image */}
        <div className="bg-[#1d1b25] w-2/3  h-60 rounded-lg flex items-center justify-center overflow-hidden">
          <img src={imgSrc} alt={title} className="" />
        </div>

        {/* Right Side: Text + Buttons center aligned */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="mb-4">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-400">Size: 194 Width * 53 Height</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <label className="px-4 py-1.5 rounded-full text-sm font-semibold text-black cursor-pointer bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] hover:opacity-90">
              Upload
              <input
                type="file"
                name={name}
                onChange={onUpload}
                className="hidden"
              />
            </label>
            <button
              onClick={onRemove}
              className="text-gray-300 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LogoFaviconUpload() {
  const [logo, setLogo] = useState(logoImage);
  const [favicon, setFavicon] = useState(faviconImage);
  const handleIconUplaod = (e) => {
    const { name, files } = e.target;
  };
  return (
    <div className="flex flex-col md:flex-row justify-between flex-wrap gap-6 md:gap-4">
      <UploadCard
        title="Logo Change"
        imgSrc={logo}
        name="logo"
        onUpload={handleIconUplaod}
        // onRemove={}
      />
      <UploadCard
        title="Favicon Change"
        imgSrc={favicon}
        name="favicon"
        onUpload={handleIconUplaod}
        // onRemove={() => setFavicon("")}
      />
    </div>
  );
}
