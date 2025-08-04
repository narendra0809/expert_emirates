import { useState, useRef, useEffect } from "react";
import logo from "../assets/navlogo.png";
import bgVideo from "../assets/auth/bgVideo.mp4";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import api from "../axios/api";
import toast from "react-hot-toast";

export default function OtpVerificationPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(120);
  const inputsRef = useRef([]);
  const videoRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { email, from } = location.state;

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");

    if (fullOtp.length < 5) {
      setMessage("Please enter all 6 digits");
      return;
    }
    try {
      const response = await api.post("/verify-otp", { otp: fullOtp, email });
      if (!response.data.success) {
        toast.error(response.data.message, {
          duration: 3000,
        });
        return;
      }
      toast.success(response.data.message, { duration: 3000 });
      navigate("/reset-password", {
        state: {
          from: "otp-verification",
          email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleResend = () => {
    alert("OTP Resent (Simulated)");
    setOtp(["", "", "", ""]);
    setTimer(120);
    inputsRef.current[0].focus();
  };

  const handleContinue = () => {
    const from = location.state?.from;

    if (from === "login" || from === "sign-up") {
      navigate("/dashboard");
    } else if (from === "forgot-password") {
      navigate("/reset-password");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (from === "forgot-password") {
      inputsRef.current[0].focus();
    }
  }, []);

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
  }, []);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  if (from !== "forgot-password") {
    return <Navigate to={"/"} replace />;
  }
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
      <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center z-10 p-6">
        <div className="w-full max-w-md p-8 text-center bg-black/80 backdrop-blur-sm rounded-xl">
          <h2 className="text-2xl font-bold bg-gradient-to-b from-yellow-900 via-yellow-300 to-yellow-900 bg-clip-text text-transparent mb-1">
            OTP Verification
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Enter 4-digit code sent to your email.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-4 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-xl bg-zinc-900 text-white border border-zinc-700 rounded-full"
                />
              ))}
            </div>

            <p className="text-lg font-semibold text-yellow-400 mb-4">
              {formatTime(timer)}
            </p>

            {message && <p className="text-red-500 text-sm mb-2">{message}</p>}

            <button
              type="submit"
              onClick={handleContinue}
              className="btn-gradient text-black rounded-full w-full px-4 py-3 font-bold transition-colors"
            >
              Continue
            </button>

            <p className="text-sm text-zinc-400 mt-4">
              Didn’t receive the code?{" "}
              <button
                type="button"
                onClick={handleResend}
                className="text-yellow-500 font-medium underline"
              >
                Resend
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* ✅ Right Side - Logo Over Video */}
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
