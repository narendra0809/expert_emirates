import React, { useState, useEffect, useRef } from "react";
import facebook from "../assets/auth/facebook.png";
import google from "../assets/auth/google.png";
import apple from "../assets/auth/apple.png";
import logo from "../assets/navlogo.png";
import bgVideo from "../assets/auth/bgVideo.mp4";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("");
    console.log("Sending OTP to:", email);
    alert("OTP sent to your email (simulate API call)");

    navigate("/otp-verification", { state: { from: "forgot-password" } });
  };

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

      {/* ✅ Left Side - Form */}
      <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center p-6 z-10">
        <div className="w-full max-w-md p-8 bg-black/80 backdrop-blur-sm rounded-xl">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-white mb-4 inline-block"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Enter your email to get the OTP to reset your password. We’ll send a 4-digit code.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded-full"
              />
            </div>

            {message && <p className="text-red-500 text-sm">{message}</p>}

            <button
              type="submit"
              className="bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] text-black rounded-full w-full px-4 py-3 font-bold transition-colors"
            >
              Send OTP
            </button>

            <div className="flex items-center justify-between gap-4 mt-4">
              <button><img src={facebook} alt="Facebook" /></button>
              <button><img src={google} alt="Google" /></button>
              <button><img src={apple} alt="Apple" /></button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-400">
            Return to{" "}
            <Link
              to="/login"
              className="text-yellow-500 font-medium underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* ✅ Right Side Logo Block */}
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
}
