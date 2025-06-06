const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx}',
    './layouts/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './helpers/**/*.{js,jsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: {
        DEFAULT: '#C4D3D0',
        light: '#F2F2F2',
        medium: '#95ACA8',
        dark: '#000F0C',
      },
      green: {
        DEFAULT: '#00A887',
        alert: '#00AB27',
        light: '#05C280',
        dark: '#1C6147',
      },
      blue: {
        fish: {
          DEFAULT: '#00A6DE',
          light: '#4DC2E8',
        },
      },
      yellow: {
        warning: '#FFD600',
      },
      beige: {
        DEFAULT: '#F7EEE2',
        light: '#FEF8F0',
      },
      orange: {
        bird: {
          DEFAULT: '#F2991C',
          light: '#F5B85E',
        },
      },
      pink: {
        pork: {
          DEFAULT: '#FF5C78',
          light: '#FF8CA1',
        },
      },
      red: {
        danger: '#E90016',
        bovine: {
          DEFAULT: '#78332B',
          light: '#916B6B',
        },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '1.5xl': '1440px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        showUp: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        showUp: 'showUp .5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards',
      },
      fontFamily: {
        'lato-black': '"latoBlack", sans-serif',
        'lato-bold': '"latoBold", sans-serif',
        'lato-hairline': '"latoHairline", sans-serif',
        'lato-light': '"latoLight", sans-serif',
        'lato-regular': '"latoRegular", sans-serif',
        'lato-thin': '"latoThin", sans-serif',
        'modern-black': '"modernaBlack", sans-serif',
        'modern-medium': '"modernaMedium", sans-serif',
        'modern-condensed-black': '"modernaCondensedBlack", sans-serif',
        'modern-condensed-bold': '"modernaCondensedBold", sans-serif',
        'modern-condensed-light': '"modernaCondensedLight", sans-serif',
        'modern-condensed-medium': '"modernaCondensedMedium", sans-serif',
        'modern-condensed-unicase-black':
          '"ModernaCondensedUnicaseBlack", sans-serif',
        'modern-condensed-unicase-bold':
          '"ModernaCondensedUnicaseBold", sans-serif',
        'piepie-regular': '"PiePieRegular", sans-serif',
      },
      fontSize: {
        0: '0px',
      },
      transitionDelay: {
        0: '0ms',
      },
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
    require('./config/tailwind/container.js'),
    require('./config/tailwind/presets.js'),
    plugin(function ({ addVariant }) {
      addVariant('group-active', () => {
        return `:merge(.group).active &`
      })
    }),
  ],
}
