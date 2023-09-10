import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'styled-system',

  globalCss: {
    '*': {
      fontFamily:
        'forma-djr-micro, system-ui, -apple-system, "Segoe UI", robot, helvetica, arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    _before: {
      fontFamily:
        'forma-djr-micro, system-ui, -apple-system, "Segoe UI", robot, helvetica, arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    _after: {
      fontFamily:
        'forma-djr-micro, system-ui, -apple-system, "Segoe UI", robot, helvetica, arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
  },
});
