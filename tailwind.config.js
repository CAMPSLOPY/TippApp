const purge = process.env.NODE_ENV === 'production';
module.exports = {
  purge: {
    enabled: purge,
    content: ['./build/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight:{
        '1/20': '10vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}