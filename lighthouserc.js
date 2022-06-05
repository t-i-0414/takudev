module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'cd ./packages/takudev-web && yarn start',
    },
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'apple-touch-icon': 'off',
        'csp-xss': 'off',
        'font-display': 'off',
        'installable-manifest': 'off',
        'is-crawlable': 'off',
        'maskable-icon': 'off',
        'service-worker': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',
      },
    },
  },
};
