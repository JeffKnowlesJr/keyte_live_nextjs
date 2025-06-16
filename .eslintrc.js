module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable rules that might cause issues in the build
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'react/jsx-key': 'off',
    'react/no-unknown-property': 'off',
  },
}