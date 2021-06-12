const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      milk: '#f6f6f4',
      ...colors
    }
  }
}
