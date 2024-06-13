import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage:{
        'main_bckg': 'url(./assets/bckg.jpg)',
        'moon_bckg': 'url(./assets/Moon.svg)',
      },
      fontFamily:{
        'roboto': ['Roboto']
      },
      backgroundColor:{
        'dark_main_color' : 'rgb(12,18,34)',
        'light_main_color' : '#F5F5F5',
      },
      animation:{
        'pong': 'pong 1s ease-in-out forwards',
        'slide': 'slide 1s ease-in-out forwards',
      }
    },
  },
  plugins: [flowbite.plugin()],
};
