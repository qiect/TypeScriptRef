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
        dev: {
          bg: "#0d1117",
          surface: "#161b22",
          overlay: "#1c2128",
          border: "#30363d",
          "border-light": "#3d444d",
          text: "#e6edf3",
          "text-secondary": "#8b949e",
          "text-muted": "#656d76",
          accent: "#3178c6",
          "accent-bright": "#58a6ff",
          green: "#3fb950",
          orange: "#d29922",
          red: "#f85149",
          purple: "#bc8cff",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
