module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    }
  },
  variants: {
    extend: {},
    borderWidth: ['responsive', 'first', 'hover', 'focus']
  },
  plugins: []
}
