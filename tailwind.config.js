/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Light_gray: "hsl(212, 45%, 89%)",
        Grayish_blue: "hsl(220, 15%, 55%)",
        Dark_blue: "hsl(218, 44%, 22%)",
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
