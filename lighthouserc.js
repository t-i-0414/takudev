module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080/'],
      startServerCommand: 'cd ./packages/takudev-web && yarn start -p 8080',
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
        'categories:performance': ['error', { minScore: 0.9 }],
      },
    },
  },
};
