module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'pattern-bg': "url('/src/images/pattern-bg.png')",
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
      fontWeight: {
        light: 400,
        normal: 500,
        medium: 700,
      },
      backgroundSize: {
        height: '300px',
      },
      letterSpacing: {
        mostwide: '0.12rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
