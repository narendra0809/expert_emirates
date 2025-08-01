import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../assets/auth/facebook.png";
import google from "../assets/auth/google.png";
import apple from "../assets/auth/apple.png";
import axios from "axios";

import { SERVER_URI } from "../constants/index.d";

export default function SignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (Object.values(form).some((v) => v === "")) {
        setError("All fields are required.");
        return;
      }

      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      setError("");

      const response = await axios.post(`${SERVER_URI}/register`, {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        password: form.password,
        password_confirmation: form.confirmPassword,
      });
      if (response.status != 201) {
        setError("Failed to regiter. Please try again");
        throw new Error("Failed to register user !");
      }
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
    <div className="min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-black">
      {/* Left Side - Form */}
      <div className="min-h-screen w-full md:w-1/2 bg-black text-white flex items-center justify-center p-6">
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
              disabled={loading}
              className="btn-gradient text-black rounded-full w-full px-4 py-3 font-bold transition-colors hover:brightness-110  disabled:opacity-70"
            >
              {loading ? "Signing Up ..." : "Sign Up"}
            </button>
          </form>
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

          <p className="mt-6 text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-500 font-medium underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Logo */}
      <div className="hidden w-full md:w-1/2 sm:flex items-center justify-center">
        <video
          ref={videoRef}
          src="/src/assets/Expert_Emirates.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[121%] object-cover object-bottom pointer-events-none"
        ></video>
      </div>
    </div>
  );
}
