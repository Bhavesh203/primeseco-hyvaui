const {spacing} = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports ={
  theme: {
   
    container: {
      center: true, // centers the container
      padding: '1rem', // adds padding on both sides
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '100%',
        'xl': '100%',
        '2xl': '1440px'
      }
    },
    extend: {
       screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',       
      // => @media (min-width: 768px) { ... }
      'lg': '1025px',
      // => @media (min-width: 1025px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1440px',
    },
      fontFamily: {
        sans: ["Quicksand", "Helvetica Neue", "Arial", "sans-serif"]
      },
      colors: {
              primary: {
                lighter: '#B5DBAB',
                "DEFAULT": '#85A33F',
                darker: '#333F1B'
              },
              secondary: {
                lighter: colors.blue['100'],
                "DEFAULT": '#85A33F',
                darker: '#333F1B'
              },
              background: {
                lighter: colors.blue['100'],
                "DEFAULT": '#85A33F',
                darker: '#333F1B'
              },
              green: colors.emerald,
              yellow: colors.amber,
              purple: colors.violet,
              'theme-color': "#85A33F",
              'theme-light':"#B5DBAB",
              'primes': "#85A33F",
              'theme-dark':'#333F1B',
              'theme-bg-light':'#D7E6D3',
              'white-fox': '#FAFAFA',
              'light-gray':'#727272',
              'dove-gray': '#666666',
              'caper':'#D5EBAA'

            },
      textColor: {
        orange: colors.orange,
        red: {
          ...colors.red,
          "DEFAULT": colors.red['500']
        },
        primary: {
          lighter: colors.gray['700'],
          "DEFAULT": colors.gray['800'],
          darker: colors.gray['900']
        },
        secondary: {
          lighter: colors.gray['400'],
          "DEFAULT": colors.gray['600'],
          darker: colors.gray['800']
        }
      },
      backgroundColor: {
        primary: {
          lighter: colors.blue['600'],
          "DEFAULT": colors.blue['700'],
          darker: colors.blue['800']
        },
        secondary: {
          lighter: colors.blue['100'],
          "DEFAULT": colors.blue['200'],
          darker: colors.blue['300']
        },
        container: {
          lighter: '#ffffff',
          "DEFAULT": '#fafafa',
          darker: '#f5f5f5'
        }
      },
      borderColor: {
        primary: {
          lighter: colors.blue['600'],
          "DEFAULT": colors.blue['700'],
          darker: colors.blue['800']
        },
        secondary: {
          lighter: colors.blue['100'],
          "DEFAULT": colors.blue['200'],
          darker: colors.blue['300']
        },
        container: {
          lighter: '#f5f5f5',
          "DEFAULT": '#e7e7e7',
          darker: '#b6b6b6'
        }
      },
      minWidth: {
        8: spacing["8"],
        20: spacing["20"],
        40: spacing["40"],
        48: spacing["48"]
      },
      minHeight: {
        14: spacing["14"],
        a11y: '44px',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
      maxHeight: {
        '0': '0',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-75': '75vh'
      },
    },
    
  },  
};