var paths = require('./paths');
var statConfig = require('./webpack-stats');
var friendlyFormatter = require('eslint-friendly-formatter');

/**
 * This config is for writing tests.  Results are shown in browser with livereload.
 * It also includes linting results in browser.
 * @type {{}}
 */
module.exports = {
  entry: './test/tests.bundle.js',
  output: {
    path: './',
    filename: 'testBundle.js'
  },
  devtool: 'inline-source-map',
  eslint: {
    formatter: friendlyFormatter,
  },
  module: {
    loaders: [
      {
        // Sinon has a screwed up AMD module definition that breaks webpack
        // This removes the `define` method to monkey patch it for webpack
        // https://github.com/webpack/webpack/issues/177
        //
        // Note we also have to use this sinon:
        // git://github.com/cjohansen/Sinon.JS#b672042043517b9f84e14ed0fb8265126168778a
        test: /sinon.*\.js$/,
        loader: 'imports?define=>false',
        include: [paths.node_modules],
      },
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        include: [paths.components, paths.test],
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: [paths.components, paths.test],
      },
    ],
    postLoaders: [
      {
        test: /(setup|-test)\.js$/,
        loader: 'mocha',
        include: [paths.test],
      },
    ],
  },
  resolve: {
    root: paths.root,
    modulesDirectories: [
      'node_modules',
      '.',
    ],
    alias: {
      // When these key names are require()'d, the value will be supplied instead
      jquery: paths.testMocks + '/SemanticjQuery-mock.js',
    },
  },
  plugins: [],
  devServer: {
    progress: false,
    stats: statConfig,
    debug: true,
    noInfo: true,
    quiet: false
  },
  debug: true
};
