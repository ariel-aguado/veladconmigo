/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      display: '"Montserrat Regular"',
      body: '"Inconsolata Regular"',
    },
    extend: {
      colors: {
        'light-orange': '#ffb900d9',
        'dark-orange': '#ff7730d9',
        scripture: {
          50: '#F6F6F6',
          100: '#EDEDED',
          200: '#D3D3D3',
          300: '#B8B8B8',
          400: '#828282',
          500: '#4D4D4D',
          600: '#454545',
          700: '#2E2E2E',
          800: '#232323',
          900: '#171717',
        },
      },
    },
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
