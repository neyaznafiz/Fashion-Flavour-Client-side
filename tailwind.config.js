module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require("daisyui")
  ],
}

// , './node_modules/tw-elements/dist/js/**/*.js'