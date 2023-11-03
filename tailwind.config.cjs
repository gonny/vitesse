/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,vue,ts,md}'],
  corePlugins: {
    preflight: true,
  },
  theme: {
    fontFamily: {
      body: 'Inter, Open Sans, sans-serif',
    },
    extend: {
      screens: {
        'xl': '1190px',
        '2xl': '1190px',
      },
      fontSize: {
        '28px': ['1.75rem', '2.1rem'],
      },
    },
  },
  plugins: [
    // ...
    // require('@tailwindcss/forms')
  ],
}
