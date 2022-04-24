module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    // import React 시 React 객체를 직접 사용하지 않아 해결 불가능한 에러 때문에 off
    'import/extensions': 'off',
    // import 시 확장자를 붙이지 않고 import 하는 것이 권장되므로 off
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // .tsx 에서 jsx를 사용 불가능 하다는 해결 불가능한 에러 때문에 off
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
