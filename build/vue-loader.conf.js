var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('postcss-import')(),
    require('postcss-nested')(),
    require('postcss-quantity-queries'),
    require('postcss-cssnext')({
      features: {
        customMedia: {
          extensions: {
            '--small-viewport': '(max-width: 544px)'
          }
        }
      }
    }),
  ]
}
