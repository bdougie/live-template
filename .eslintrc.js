const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'standard',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'jsx-a11y/anchor-is-valid': RULES.OFF,
    'jsx-a11y/accessible-emoji': RULES.OFF,
    'no-console': RULES.WARN,
    'no-nested-ternary': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'react/jsx-curly-newline': RULES.OFF,
    'react/jsx-props-no-spreading': RULES.OFF,
    'react/jsx-wrap-multilines': RULES.OFF,
    'react/no-unknown-property': [RULES.WARN, {}],
    'react/require-default-props': RULES.OFF,
  },
  settings: { react: { version: 'detect' } },
};
