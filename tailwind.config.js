/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "arkac-blue": {
          50: "#f0f7ff",
          100: "#e0f0ff",
          200: "#27B7F2",
          300: "#D8F0FF",
          500: "#0f96ff",
          600: "#0077ea",
          700: "#0062d1",
        },
        "arkac-text": "#333333",
        "arkac-gray": {
          100: "#A3A3A3",
          200: "#CCCCCC",
          300: "#BCBCBC",
          400: "#E5E5E5",
          500: "#E6E6E6",
          600: "#FAFAFA",
          700: "#444444",
          800: "#F8F8F8",
          900: "#78797D",
        },
      },
      boxShadow: {
        soft: "0 4px 14px 0 rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        avenir: ["Avenir Next", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        dealing: ["Dealing", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        floatLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        floatRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseText: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.98)" },
        },
      },
      animation: {
        "float-left": "floatLeft 15s linear infinite",
        "float-right": "floatRight 15s linear infinite",
        "pulse-text": "pulseText 3s ease-in-out infinite",
      },
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "95%",
        md: "1200px",
        lg: "1380px",
      },
    },
  },
  plugins: [],
};
