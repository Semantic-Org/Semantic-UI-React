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
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
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
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
}

if (env === 'production') {
  webpackConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
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
