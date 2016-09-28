const _ = require('lodash')
const config = require('./config')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const pkg = require('./package.json')

const { paths } = config
const exposeName = _.camelCase(pkg.name)

const webpackUMDConfig = {
  target: 'web',
  devtool: 'inline-source-map',
  entry: {
    [exposeName]: paths.src('umd.js'),
  },
  output: {
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: exposeName,
    path: paths.dist('umd'),
    publicPath: '/',
    pathinfo: true,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    }),
  ],
  module: {
    noParse: webpackConfig.module.noParse,
    loaders: webpackConfig.module.loaders,
  },
}

module.exports = webpackUMDConfig
