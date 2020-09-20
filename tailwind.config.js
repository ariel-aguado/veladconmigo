/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      display: '"MontserratRegular"',
      body: '"InconsolataRegular"',
      montbold: '"MontserratBold"',
      incbold: '"InconsolataBold"',
    },
    fontSize: {
      '2xs': '.70rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        'light-orange': '#ffb900d9',
        'dark-orange': '#ff7730d9',
      },
    },
    // typography: (theme) => ({
    //   default: {
    //     css: {
    //       color: theme('colors.orange.900'),
    //       strong: {
    //         color: theme('colors.orange.900'),
    //       },
    //       blockquote: {
    //         color: theme('colors.orange.900'),
    //         borderLeftColor: theme('colors.orange.900'),
    //       },
    //       h1: {
    //         color: theme('colors.orange.900'),
    //       },
    //       h2: {
    //         color: theme('colors.orange.900'),
    //       },
    //       h3: {
    //         color: theme('colors.orange.900'),
    //       },
    //       h4: {
    //         color: theme('colors.orange.900'),
    //       },
    //       h5: {
    //         color: theme('colors.orange.900'),
    //       },
    //       h6: {
    //         color: theme('colors.orange.900'),
    //       },
    //     },
    //   },
    // }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
