module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      '3xl': {'max': '3535px'},

      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1024px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      // => @media (max-width: 375px) { ... }
      'xsm': {'max': '375'},
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [],
}


// module.exports = {
//   theme: {
//     screens: {
//       '2xl': {'max': '1535px'},
//       // => @media (max-width: 1535px) { ... }

//       'xl': {'max': '1279px'},
//       // => @media (max-width: 1279px) { ... }

//       'lg': {'max': '1023px'},
//       // => @media (max-width: 1023px) { ... }

//       'md': {'max': '767px'},
//       // => @media (max-width: 767px) { ... }

//       'sm': {'max': '639px'},
//       // => @media (max-width: 639px) { ... }
//     }
//   }
// }