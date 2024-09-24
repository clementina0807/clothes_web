/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#FF8A8A",
        "opacity-pink-300": "rgba(255,138,138,0.3)",
        "Bottom-pink":"#F4A7B9",
        "title-pink":"#DB4D6D",
        "line-green":"#86C166",
        "fb-blue":"#7DB9DE",
        "button" :"#dedede",
        "background":"#ffffff", 
        "sellout":"#BDC0BA",
        "cart":"#F9F9E0",
        "red":"B8001F",
        "gray":"#BDC0BA",
        "blue":"#4E4F97"
      },
    },
  },
  plugins: [],
};
