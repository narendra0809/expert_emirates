import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../assets/auth/facebook.png";
import google from "../assets/auth/google.png";
import apple from "../assets/auth/apple.png";
import logo from "../assets/navlogo.png";
import bgVideo from "../assets/auth/bgVideo.mp4";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some((v) => v === "")) {
      setError("All fields are required.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log("Registering user:", form);
    navigate("/otp-verification", { state: { from: "sign-up" } });
  };

  useEffect(() => {
    const tryPlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.warn("Autoplay blocked:", err);
        });
      }
    };

    tryPlay();
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") tryPlay();
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* ✅ Right Side Background Video */}
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

      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center z-10 p-6">
        <div className="w-full max-w-md p-8 bg-black/80 backdrop-blur-sm rounded-xl">
          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1">
            Create an account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="text-sm text-white">First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-3 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded-full"
              />
            </div>

            <div>
              <label className="text-sm text-white">Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-3 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded-full"
              />
            </div>

            <div>
              <label className="text-sm text-white">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded-full"
              />
            </div>

            <div>
              <label className="text-sm text-white">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded-full"
              />
            </div>

            <div>
              <label className="text-sm text-white">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 mt-1 bg-zinc-900 text-white border border-zinc-700 placeholder:text-zinc-500 rounded-full"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="btn-gradient text-black rounded-full w-full px-4 py-3 font-bold transition-colors"
            >
              Sign up
            </button>

            <div className="flex items-center justify-between gap-4 mt-4">
              <button>
                <img src={facebook} alt="facebook" />
              </button>
              <button>
                <img src={google} alt="google" />
              </button>
              <button>
                <img src={apple} alt="apple" />
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-500 font-medium underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Logo */}
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
