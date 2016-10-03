const config = require('./config')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const pkg = require('./package.json')

const { paths } = config

const webpackUMDConfig = {
  target: 'web',
  devtool: false,
  entry: {
    [pkg.name]: paths.src('umd.js'),
  },
  output: {
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'semanticUIReact',
    path: paths.dist('umd'),
    publicPath: '/',
    pathinfo: true,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    Babel: 'babel-standalone',
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
