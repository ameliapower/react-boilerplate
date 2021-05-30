const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    // port: 3000,
    disableHostCheck: true // Fixes Console Error: client:168 Invalid Host/Origin header [WDS] Disconnected!
  },
  devServer: {
    historyApiFallback: true // Ensures 404 works, and in the case of page reload, fixes pesky "Cannot GET /somefunkyurl" error
  },
  devtool: 'source-map' // map to source for easy debugging
})
