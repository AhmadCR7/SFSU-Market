module.exports = {
  extends: [
    'airbnb', // Uses the recommended rules from airbnb
    'airbnb/hooks',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        //below line only for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
  },
}
