import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URI } from "../constants/index.d";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../features/user/userSlice";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
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
    try {
      dispatch(loginStart());

      if (!email || !password) {
        dispatch(loginFailure("Both fields are required"));
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        dispatch(loginFailure("Please enter a valid email address."));
        return;
      }
      const response = await axios.post(`${SERVER_URI}/login`, {
        email,
        password,
      });
      if (response.status != 200) {
        dispatch(loginFailure(response.data.error));
        return;
      }
      dispatch(loginSuccess(response.data));
      if (currentUser?.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      dispatch(loginFailure(err.response.data.error));
      console.error("Login error:", err);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden h-full bg-black">
      {/* Left Side - Form */}
      <div className="min-h-screen w-full md:w-1/2 bg-black flex items-center justify-center p-6 z-10">
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

            {error ? <p className="text-red-500 text-sm">{error}</p> : ""}

            <div className="text-right">
              <Link to="/forgot-password" className="text-red-500 text-sm">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-gradient text-black rounded-full w-full px-4 py-3 font-bold transition-colors hover:brightness-110 disabled:opacity-70"
            >
              {loading ? "Signing In ..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-400">
            Don't have an account?{" "}
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
