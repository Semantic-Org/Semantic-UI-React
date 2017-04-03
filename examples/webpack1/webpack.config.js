const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const webpack = require('webpack')

const env = process.env.NODE_ENV || 'development'

const webpackConfig = {
  name: 'client',
  target: 'web',

  entry: {
    app: path.resolve('src/main.js'),
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
    new BundleAnalyzerPlugin(),
  ],

  output: {
    filename: '[name].js',
    path: path.resolve('public/dist'),
    publicPath: '/',
  },

  resolve: {
    root: path.resolve('src'),
    extensions: ['', '.js', '.jsx'],
  },
}

if (env === 'production') {
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    })
  )
}

module.exports = webpackConfig
