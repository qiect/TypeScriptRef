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
        cosmos: {
          bg: "#06060f",
          deep: "#0a0a1a",
          surface: "#0f0f24",
          panel: "#12122e",
          border: "#1e1e4a",
          "border-bright": "#2d2d6b",
          text: "#e8e8f0",
          dim: "#8888aa",
          muted: "#555580",
          accent: "#6c63ff",
          "accent-glow": "#8b83ff",
          cyan: "#00d4ff",
          "cyan-dim": "#0099bb",
          gold: "#ffd700",
          "gold-dim": "#b8960f",
          rose: "#ff6b9d",
          green: "#00ff88",
          orange: "#ff8c42",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      animation: {
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "float-gentle": "floatGentle 8s ease-in-out infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        floatGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
