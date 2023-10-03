module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['jsx-a11y', '@typescript-eslint/eslint-plugin', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.astro'],
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
  },
  env: {
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
    },
    {
      files: ['*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      files: ['*.cjs'],
      env: {
        node: true,
      },
    },
  ],
};
