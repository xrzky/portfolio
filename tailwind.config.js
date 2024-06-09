/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
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
        "black": "#020617",
        "white": "#ffffff",
        "grey": "#374151",
        "neutral": "#262626",
        "red": "#dc2626",
        "blue": "#2563eb",
        "yellow": "#eab308",
        "cyan": "#22d3ee",
        "sky": "#0369a1",
        "light-grey": "#f3f4f6",
        "green": "#4ade80"
      },
    },
  },
  plugins: [],
};
