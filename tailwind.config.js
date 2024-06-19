import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage:{
        'main_bckg': 'url(./assets/bckg.jpg)',
        'moon_bckg': 'url(./assets/Moon.svg)',
        'EspLed': 'url(/projectImages/esp_led.png)',
      },
      fontFamily:{
        'roboto': ['Roboto'],
        'Oswald': ['Oswald']
      },
      backgroundColor:{
        'dark_main_color' : 'rgb(12,18,34)',
        'dark_main_color2' : 'rgb(6,9,17)',
        'light_main_color' : '#F5F5F5',
        'light_main_color2' : '#fcfafa',
      },
      animation:{
        'pong': 'pong 1s ease-in-out forwards',
        'slide': 'slide 1s ease-in-out forwards',
        'littlejump': 'littleJump 0.4s ease-in-out forwards',
        'littlejumpInfinite': 'littleJump 1s ease-in-out infinite',
      },

    },
  },
  plugins: [flowbite.plugin()],
};
