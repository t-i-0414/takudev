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
        'csp-xss': 'off',
        'non-composited-animations': 'off',
        'font-display': 'off',
        'uses-rel-preconnect': 'off',
        'unused-javascript': [
          'error',
          { maxWastedBytes: 100000, maxLength: 1 },
        ],
        'categories:performance': ['error', { minScore: 0.9 }],
      },
    },
  },
};
