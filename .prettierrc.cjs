/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  useTabs: false,
  singleQuote: true,
  printWidth: 120,
  singleAttributePerLine: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.{json,babelrc,prettierrc}',
      options: {
        tabWidth: 2,
        useTabs: false,
      },
    },
    {
      files: '*.scss',
      options: {
        printWidth: 80,
        tabWidth: 2,
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 80,
        trailingComma: 'none',
        arrowParens: 'avoid',
        proseWrap: 'never',
      },
    },
  ],
  astroAllowShorthand: false,
};
