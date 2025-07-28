import { useState } from "react";
import logoImage from "../assets/setting/image1.png";
import faviconImage from "../assets/setting/logo.png";

const UploadCard = ({ title, imgSrc, onUpload, onRemove }) => {
  return (
    <div className="bg-[#121117] border border-[#1e1e25] rounded-xl p-4 w-full md:w-[48%] shadow-md">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left Side: Larger Image */}
        <div className="bg-[#1d1b25] h-60 w-96 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Right Side: Text + Buttons center aligned */}
        <div className="flex flex-col justify-center h-full w-full text-center md:text-left">
          <div className="mb-4">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-400">Size: 194 Width * 53 Height</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <label className="px-4 py-1.5 rounded-full text-sm font-semibold text-black cursor-pointer bg-gradient-to-l from-[#452e06] via-[#d1bf5a] to-[#452e06] hover:opacity-90">
              Upload
              <input type="file" onChange={onUpload} className="hidden" />
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

  return (
    <div className="w-full bg-black p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-between flex-wrap">
        <UploadCard
          title="Logo Change"
          imgSrc={logo}
          onUpload={(e) => {
            const file = e.target.files[0];
            if (file) setLogo(URL.createObjectURL(file));
          }}
          onRemove={() => setLogo("")}
        />
        <UploadCard
          title="Favicon Change"
          imgSrc={favicon}
          onUpload={(e) => {
            const file = e.target.files[0];
            if (file) setFavicon(URL.createObjectURL(file));
          }}
          onRemove={() => setFavicon("")}
        />
      </div>
    </div>
  );
}
