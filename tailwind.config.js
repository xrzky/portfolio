/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        "gelap": "#020617",
        "terang": "#ffffff",
        "abu": "#374151",
        "netral": "#262626",
        "merah": "#dc2626",
        "biru": "#2563eb",
        "kuning": "#eab308",
        "cyan": "#22d3ee",
        "awan": "#0369a1",
        "abu-muda": "#f3f4f6"
      },
    },
  },
  plugins: [],
};
