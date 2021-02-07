const isProd = process.env.NODE_ENV !== 'development';
module.exports = {
  experimental: 'all',
  purge: {
    enabled: isProd,
    content: ['./src/**/*.html'],
  },
  theme: {
    screens: {
      mobile: { max: '639px' },
      desktop: '1024px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },

  corePlugins: {
    animation: false,
    preflight: false,
    container: false,
    boxShadow: false,
    ringOffsetColor: false,
    ringColor: false,
    ringOffsetWidth: false,
    ringOpacity: false,
    ringWidth: false,
    tableLayout: false,
    textOpacity: false,
  },
  plugins: [],
};
