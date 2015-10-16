var paths = require('./paths');
var webpack = require('webpack');
var pkg = require('./package.json');

/**
 * This config builds and serves the doc site with webpack dev server.
 * @type {{}}
 */
module.exports = {
  entry: {
    app: [
      'webpack/hot/only-dev-server',
      paths.docsApp + '/DocsApp.js'
    ],
    vendor: [
      'faker',
      'jquery',
      'lodash',
      'moment',
      'radium',
      'react-highlight',
    ]
  },
  output: {
    path: paths.docsBuild,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel', 'eslint'],
        exclude: paths.node_modules
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        exclude: paths.node_modules
      }
    ]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter'),
  },
  externals: {
    faker: 'faker',
    jquery: 'jQuery',
    lodash: '_',
    moment: 'moment',
  },
  devTool: 'source-map',
  resolve: {
    root: paths.root,
    modulesDirectories: [
      'node_modules',
      '.',
    ],
    alias: {
      stardust: pkg.main
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
