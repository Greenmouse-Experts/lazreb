/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '01': '560px',
        '02': '440px',
        '100': '6%'
      },
       backgroundImage: {
        hero: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669209031/lazreb/hero_nw9ja9.png')",
        second: "linear-gradient(to right bottom, rgba(255, 120, 0, 0.7),rgba(255, 120, 0, 0.7)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669195306/lazreb/abouthome_ma6irv.png')",
        review: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669234868/lazreb/Group_46589_1_pumicq.png')",
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'body': ['DM Sans', 'sans-serif'],
      'primary':['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
});
