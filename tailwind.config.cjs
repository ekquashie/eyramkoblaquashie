/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",], theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/src/assets/space.jpeg')",
      }, fontFamily: {
        source: ["Source Serif Pro, sans-serif", {fontFeatureSettings: '"cv11", "ss01"'},],
      }, keyframes: {
        fadeIn: {
          '0%': {opacity: '0'}, '100%': {opacity: '1'},
        }, slideLeft: {
          'from': {'marginLeft': '200px'}, 'to': {'marginLeft': '0px'},
        }, bounce1: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
          }, '50%': {
            transform: 'translateY(0)',
          }
        }
      }, animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideLeft: 'slideLeft 2s ease-in-out',
        bounce1: 'bounce1 2s ease-in-out infinite'
      }
    },
  }, plugins: [],
}
