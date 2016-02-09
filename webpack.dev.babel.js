import paths from './paths'
import webpack from 'webpack'

/**
 * This config builds and serves the doc site with webpack dev server.
 * @type {{}}
 */
export default {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      paths.docsApp + '/DocsApp.js',
    ],
    vendor: [
      'bluebird',
      'classnames',
      'faker',
      'jquery',
      'lodash',
      'react',
      'react-highlight',
    ],
  },
  output: {
    path: paths.docsBuild,
    filename: '[name].js',
  },
  module: {
    noParse: [/autoit.js/],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel', 'eslint'],
        exclude: paths.node_modules,
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        exclude: paths.node_modules,
      },
    ],
  },
  externals: {
    bluebird: 'Promise',
    faker: 'faker',
    jquery: 'jQuery',
    lodash: '_',
  },
  devtool: 'source-map',
  resolve: {
    root: [
      paths.docsRoot,
    ],
    modulesDirectories: [
      'node_modules',
      '.',
    ],
    alias: {
      stardust: `${paths.src}/index.js`,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ],
}
