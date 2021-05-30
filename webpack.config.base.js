const path = require('path') //node's path module
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'), // node's global __dirname
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          // without configuration @babel/preset-env will give us support for 2015,16,17,18 so core-js in analyzer is large filesize
          presets: [
            [
              '@babel/preset-env',
              {
                targets:
                  // with configuration, targeting browsers will reduce core-js size significantly
                  // specify actual browsers and versions
                  // chrome: '64',
                  // edge: '40'
                  // OR specify some catch-alls
                  ['last 2 versions', 'not dead', '> 0.25%', 'ie 11'],
                useBuiltIns: 'entry',
				"corejs":  "3.13.1",
              }
            ],
            '@babel/preset-react' //read es6, read react jsx
          ],
          plugins: [
            'react-hot-loader/babel', //plugin for react-hot-loader
            '@babel/plugin-syntax-dynamic-import',
			"@babel/plugin-transform-arrow-functions",
          ]
          // plugins: ['@babel/plugin-proposal-class-properties'] //if you want to use proposed JS syntax
        }
      },
      {
        test: /\.css$/,
        // css-loader handles syntax, style-loader injects css into html
        use: ['style-loader', 'css-loader'], // loaders (plural is deprecated), use use!
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
}
