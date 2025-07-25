import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/navlogo.png";
import bgVideo from "../assets/auth/bgVideo.mp4";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setMessage("Please fill out both fields.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Simulated password reset success
    alert("Password has been reset successfully!");
    navigate("/login");
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
          className="w-full h-full object-cover rotate-180 pointer-events-none"
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
            className="text-sm text-gray-400 mb-4 hover:underline"
          >
            ← Back
          </button>

          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1">
            Reset Password
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Enter a strong password and confirm your new password to finish
            securely.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded-full"
              />
            </div>

            <div>
              <label className="text-sm text-white">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded-full"
              />
            </div>

            {message && <p className="text-red-500 text-sm">{message}</p>}

            <button
              type="submit"
              className="btn-gradient text-black rounded-full w-full px-4 py-3 font-bold transition-colors"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Right Side Logo with video background */}
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
