module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  extends: ['plugin:prettier/recommended', 'prettier', 'prettier/vue'],
  plugins: ['prettier', 'html', 'transform-object-rest-spread'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error'
  }
}
