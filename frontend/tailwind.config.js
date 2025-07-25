/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        smoothBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-50px)" },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollPingPong: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        smoothBounce: "smoothBounce 3s ease-in-out infinite",
        marqueeLeft: "marqueeLeft 60s linear infinite",
        scrollPingPong: "scrollPingPong 30s linear infinite alternate", // 👈 this is for back-and-forth
      },
      
    },
  },
  plugins: [],
};
