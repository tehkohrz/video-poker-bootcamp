module.exports = {
  env: {
    browser: true,
    es2020: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['jest'],
  rules: {
    // Don't enforce control flow closing curly brace needs to be
    // on same line as next control flow opening statement
    'brace-style': 'off',
    // Disable linebreak style to prevent ESLint errors on Windows line endings
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': 'off',
    // Allow console for students to debug
    'no-console': 'off',
    // Allow function param reassign for array or object elements or properties
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 'off',
  },
};
