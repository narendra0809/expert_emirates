import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import successImage from "../assets/auth/pana.png";
import logo from "../assets/navlogo.png";
import bgVideo from "../assets/auth/bgVideo.mp4";

const PasswordChanged = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.warn("Autoplay blocked:", err);
        });
      }
    };
    playVideo();

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") playVideo();
    });

    return () => {
      document.removeEventListener("visibilitychange", playVideo);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* ✅ Right Side Video */}
      <div className="absolute right-0 top-0 w-1/2 h-full -z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-bottom rotate-180 pointer-events-none"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ✅ Left Side - Success Message */}
      <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center z-10 p-6">
        <div className="w-full max-w-md p-8 text-center bg-black/80 backdrop-blur-sm rounded-xl">
          <img
            src={successImage}
            alt="Success"
            className="w-72 mx-auto mb-6"
          />
          <h2 className="text-yellow-400 text-2xl sm:text-3xl font-semibold mb-2 font-poppins">
            Password Successfully <br /> Changed!
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6 font-poppins px-2">
            Your password was successfully changed. You can now log in with your new password.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-yellow-400 to-yellow-700 hover:from-yellow-500 hover:to-yellow-800 text-black font-semibold py-3 px-10 rounded-full shadow-md transition-all duration-300"
          >
            Login
          </button>
        </div>
      </div>

      {/* ✅ Right Side Logo Block over video */}
      <div className="w-full md:w-1/2 flex items-center justify-center z-10 p-4">
        <div className="text-center w-96 h-auto bg-black/80 backdrop-blur-sm rounded-xl p-4">
          <img
            src={logo}
            alt="Expert Emirates Logo"
            className="w-full h-full mx-auto mb-4 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordChanged;
