/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #0C273D 0%, #359D9E 100%)',
         'hero-gradient': 'linear-gradient(180deg, #0C273D 100%, #359D9E 0%)',
      },
    },
  },
  plugins: [],
};
