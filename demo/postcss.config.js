module.exports = {
  parser: 'postcss-scss',
  sourceMap: 'inline',
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'precss': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  }
}
