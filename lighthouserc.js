module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:8080/',
        'http://localhost:8080/articles/2_how-to-set-up-new-flutter-project-june-2023',
      ],
      startServerCommand: 'cd ./packages/takudev-web-old && yarn start -p 8080',
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
        'categories:performance': ['error', { minScore: 0.3 }],
      },
    },
  },
};
