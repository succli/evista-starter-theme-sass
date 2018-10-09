const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CrudeTimingPlugin = require('./crude-timing-plugin')

const themeName = path.basename(process.cwd())

const configs = [{
  mode: 'production',
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
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
        use: `file-loader?context=assets/&name=[path][name].[ext]&publicPath=/wp-content/themes/${themeName}/build/`
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new CrudeTimingPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          booleans: false,
          collapse_vars: false,
          comparisons: false,
          hoist_funs: false,
          hoist_props: false,
          hoist_vars: false,
          if_return: false,
          inline: false,
          join_vars: false,
          keep_infinity: true,
          loops: false,
          negate_iife: false,
          properties: false,
          reduce_funcs: false,
          reduce_vars: false,
          sequences: false,
          side_effects: false,
          switches: false,
          top_retain: false,
          toplevel: false,
          typeofs: false,
          unused: false,

          // Switch off all types of compression except those needed to convince
          // react-devtools that we're using a production build
          conditionals: true,
          dead_code: true,
          evaluate: true
        },
        mangle: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css',
      chunkFilename: '[id].css'
    })
  ]
}
]

module.exports = configs
