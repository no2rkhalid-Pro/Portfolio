/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./routes/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cherry: ["Cherry Cream Soda", "cursive"],
        bomb: ["Cherry Bomb One", "cursive"],
      },

      colors: {
        whiteColor: "#ffffff",
        mainColor: "#14848E",
        secondaryColor: "#97E7E1",
        mainColorHover: "#1DAE0D",
        blackColor: "#000000",
        tagColor1: "#2F74C0",
        tagColor2: "#E6EEF8",
        textColor: "#e45e67",
        backColor: "#e45e67",
        secondColor: "#e45e67",        
      },
    },
  },
  plugins: [],
};
