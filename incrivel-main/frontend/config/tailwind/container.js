const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.container': {
      width: '100%',
      marginRight: 'auto',
      marginLeft: 'auto',
      paddingRight: '24px',
      paddingLeft: '24px',
      maxWidth: 'inherit',
      maxWidth: '1300px',

      '@screen md': {
        paddingRight: '70px',
        paddingLeft: '70px',
      },

      '@screen 1.5xl': {
        paddingRight: '0px',
        paddingLeft: '0px',
      },
    },
  }

  addUtilities(newUtilities, {
    variants: ['responsive'],
  })
})
