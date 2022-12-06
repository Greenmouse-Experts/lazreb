/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      spacing: {
        '01': '590px',
        '02': '440px',
        '03': '500px',
        '100': '230%'
      },
       backgroundImage: {
        hero: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669209031/lazreb/hero_nw9ja9.png')",
        second: "linear-gradient(to right bottom, rgba(255, 120, 0, 0.7),rgba(255, 120, 0, 0.7)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669195306/lazreb/abouthome_ma6irv.png')",
        review: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669234868/lazreb/Group_46589_1_pumicq.png')",
        about: "linear-gradient(to right bottom, #042B5499, #042B5499), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669609285/lazreb/Rectangle_61_ij8ozh.png')",
        grads: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669610612/lazreb/Group_46597_ffqr6c.png')",
        grad: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669610612/lazreb/Group_46596_oitdag.png')",
        service: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669634012/lazreb/bg-service_nnklm5.png')",
        contact: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669635851/lazreb/Group_46596_1_1_smrwnz.png')",
        login: "linear-gradient(to right bottom, rgba(4, 43, 84, 0.9), rgba(4, 43, 84, 0.9)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669646604/lazreb/login_p6smcr.jpg')",
        register: "linear-gradient(to right bottom, rgba(4, 43, 84, 0.6), rgba(4, 43, 84, 0.9)), url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669651462/lazreb/register_fhr2vv.jpg')",
        blog: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669715370/lazreb/Rectangle_61_4_owpvx9.png')",
        faq: "url('https://res.cloudinary.com/greenmouse-tech/image/upload/v1669713459/lazreb/Rectangle_61_3_wilmlo.png')",
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'body': ['DM Sans', 'sans-serif'],
      'primary':['Montserrat', 'sans-serif'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
});
