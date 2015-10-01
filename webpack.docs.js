var paths = require('./paths');
var webpack = require('webpack');

/**
 * This config builds and serves the doc site with webpack dev server.
 * @type {{}}
 */
module.exports = {
  entry: {
    app: [
      // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      paths.docsApp + '/DocsApp.js'
    ],
    vendor: [
      'lodash',
      'react',
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
    lodash: '_',
  },
  devTool: 'source-map',
  resolve: {
    root: paths.root,
    modulesDirectories: [
      'node_modules',
      '.',
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
