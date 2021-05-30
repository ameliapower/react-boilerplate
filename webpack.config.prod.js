const {merge} = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // outputs a file to dist folder and opens up that file, default is to open up a server
      openAnalyzer: false // don't open on start
    })
  ],
  externals: {
    // pull these libraries in from a CDN in production
    react: 'React',
    'react-dom': 'ReactDOM'
  }
})
