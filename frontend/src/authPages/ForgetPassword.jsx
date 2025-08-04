import { useState, useEffect, useRef } from "react";
import facebook from "../assets/auth/facebook.png";
import google from "../assets/auth/google.png";
import apple from "../assets/auth/apple.png";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import api from "../axios/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    try {
      const response = await api.post("/forgot-password", { email });
      if (response.status !== 200) {
        toast.error("Failed to sent opt. Please try again later", {
          duration: 3000,
        });
        return;
      }
      navigate("/otp-verification", {
        state: { from: "forgot-password", email },
      });
      toast.success(response.data.message, { duration: 3000 });
      console.log(response.data);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
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
    <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-black">
      {/* ✅ Left Side - Form */}
      <div className="w-full md:w-1/2  text-white flex items-center justify-center p-6 z-10">
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
            Enter your email to get the OTP to reset your password. We’ll send a
            4-digit code.
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
              <button>
                <img src={facebook} alt="Facebook" />
              </button>
              <button>
                <img src={google} alt="Google" />
              </button>
              <button>
                <img src={apple} alt="Apple" />
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-400">
            Return to{" "}
            <Link to="/login" className="text-yellow-500 font-medium underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* ✅ Right Side Logo Block */}
      <div className="hidden w-full md:w-1/2 sm:flex items-center justify-center z-10">
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
