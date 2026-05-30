/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        paper: {
          50: "#fdfcf9",
          100: "#f8f6f1",
          200: "#f0ece3",
          300: "#e4dfd4",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          light: "#3d3d3d",
          muted: "#6b6b6b",
          faint: "#999999",
        },
        vermillion: {
          DEFAULT: "#e63946",
          dark: "#c1121f",
          light: "#ff6b6b",
        },
        code: {
          bg: "#1e1e1e",
          border: "#333333",
          text: "#d4d4d4",
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
