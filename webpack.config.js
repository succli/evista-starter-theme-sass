const path = require('path')
const webpack = require('webpack')

if (!process.env.WPTHEME) {
  throw new Error('WPTHEME env variable is unset. Please set it to the current folder\'s name.')
}

const themeName = (process.env.WPTHEME).trim()

const configs = [{
  entry: './assets/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader'
      },
      {
        test: /\.(ttf|eot)(\?[\s\S]+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: 'file-loader?context=assets/&name=[path][name].[ext]&publicPath=/wp-content/themes/' + themeName + '/build/'
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether'
    })
  ]
}
]

module.exports = configs
