const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.heading-xl': {
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      fontFamily: theme('fontFamily.modern-condensed-medium'),
    },
    '.heading-2xl': {
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      fontFamily: theme('fontFamily.modern-condensed-medium'),
    },
    '.heading-3xl': {
      fontSize: '1.75rem',
      lineHeight: '2rem',
      fontFamily: theme('fontFamily.modern-condensed-medium'),
    },
    '.heading-4xl': {
      fontSize: '2rem',
      lineHeight: '2.25rem',
      fontFamily: theme('fontFamily.modern-condensed-medium'),
    },
    '.heading-5xl': {
      fontSize: '2.5rem',
      lineHeight: '2.5rem',
      fontFamily: theme('fontFamily.modern-condensed-medium'),
    },
    '.heading-6xl': {
      fontSize: '3.625rem',
      lineHeight: '3.625rem',
      fontFamily: theme('fontFamily.modern-condensed-medium'),
    },
    '.heading-7xl': {
      fontSize: '5rem',
      lineHeight: '5rem',
      fontFamily: theme('fontFamily.modern-condensed-medium'),
    },
  })
})
