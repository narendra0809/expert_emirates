import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/navlogo.png";
import bgVideo from "../assets/auth/bgVideo.mp4";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }

    const attemptPlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    };

    attemptPlay();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        attemptPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      navigate("/otp-verification", { state: { from: "login", email } });
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* ✅ Right Side Video Only */}
      <div className="absolute right-0 top-0 md:w-1/2 w-full h-full -z-10">
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
        <div className="absolute inset-0"></div>
      </div>

      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-6 z-10">
        <div className="w-full max-w-md p-8 bg-black/80 backdrop-blur-sm rounded-xl">
          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1">
            Welcome back
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Welcome back, please enter your details.
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

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="text-right">
              <Link to="/forgot-password" className="text-red-500 text-sm">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="btn-gradient text-black rounded-full w-full px-4 py-3 font-bold transition-colors"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-400">
            Don’t have an account?{" "}
            <Link
              to={"/sign-up"}
              className="text-yellow-500 font-medium underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Logo with video background */}
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
