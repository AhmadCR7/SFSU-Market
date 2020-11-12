module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'plugin:json/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'object-curly-newline': 0,
    'func-names': 0,
    'comma-dangle': 0,
    'import/no-unresolved': 0,
    'no-console': 0,
    'react/react-in-jsx-scope': 0,
    semi: 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        semi: false,
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        endOfLine: 'auto',
      },
    ],
  },
}
