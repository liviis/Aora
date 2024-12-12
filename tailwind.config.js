/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Deep navy blue
        secondary: {
          DEFAULT: "#E11D48", // Vibrant pinkish-red
          100: "#DB2777", // Lighter shade of pinkish-red
          200: "#BE185D", // Darker shade of pinkish-red
        },
        black: {
          DEFAULT: "#111827", // Slightly lighter black
          100: "#1F2937", // Cool grayish-black
          200: "#374151", // Neutral grayish-black
        },
        gray: {
          100: "#9CA3AF", // Soft medium gray
          200: "#6B7280", // Slightly darker gray
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Modern and clean sans-serif font
        serif: ["Merriweather", "serif"], // Elegant serif font
        mono: ["JetBrains Mono", "monospace"], // Developer-friendly monospace font
        body: ["Inter", "sans-serif"], // Default body font
        display: ["Poppins", "sans-serif"], // Default display font
      },
    },
  },
  plugins: [],
};
