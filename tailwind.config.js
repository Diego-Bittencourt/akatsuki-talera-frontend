/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'back': '#423D38',
      'fore': '#A8443A',
      'front': '#E8D3B6'
    },
    extend: {
      fontFamily: {
        breath: 'Breath of fire'
      },
    },
  },
  plugins: [],
}

