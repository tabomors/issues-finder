module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    '@typescript-eslint',
    'react-hooks',
    'jsx-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // Without it, you will get errors since NextJs does not require you to import React into each component
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 1,
    'react-hooks/rules-of-hooks': 'error', // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/exhaustive-deps': 'warn', // https://reactjs.org/docs/hooks-rules.html
    'prefer-object-spread': 'error', // Prefer use of an object spread over Object.assign
    'jsx-a11y/anchor-is-valid': 'warn', // Warn because we have RouterLink which passes href to child link
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
