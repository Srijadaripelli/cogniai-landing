import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060508",
        ink: "#F2F1F3",
        muted: "#A49CA7",
        primary: {
          DEFAULT: "#39129A",
          900: "#1D095A"
        },
        surface: {
          50: "#F2F1F3",
          100: "#E6E5E8",
          200: "#D1CFD6",
          300: "#A49CA7",
          400: "#504E50",
          500: "#353750"
        }
      },
      boxShadow: { smooth: "0 10px 30px -10px rgba(0,0,0,0.4)" },
      fontFamily: { sans: ["Inter","ui-sans-serif","system-ui","Segoe UI","Roboto","Apple Color Emoji","Segoe UI Emoji"] }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
