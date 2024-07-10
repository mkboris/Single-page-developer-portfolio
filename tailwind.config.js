/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "37.5rem",
      lg: "61.125rem",
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        dark: "hsl(0, 0%, 8%)",
        green: "hsl(153, 71%, 59%)",
        darkGrey: "hsl(0, 0%, 14%)",
        grey: "hsl(0, 0%, 85%)",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      maxWidth: {
        mdWidth: "69.375rem",
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
