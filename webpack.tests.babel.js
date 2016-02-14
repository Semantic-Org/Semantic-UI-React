import paths from './paths'
import statConfig from './webpack-stats'

/**
 * This config is for writing tests.  Results are shown in browser with livereload.
 * It also includes linting results in browser.
 * @type {{}}
 */
module.exports = {
  entry: './test/tests.bundle.js',
  output: {
    path: './',
    filename: 'testBundle.js',
  },
  devtool: 'inline-source-map',
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
        exclude: paths.node_modules,
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        exclude: paths.node_modules,
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
    alias: {
      // When these key names are require()'d, the value will be supplied instead
      jquery: paths.testMocks + '/SemanticjQuery-mock.js',
      stardust: `${paths.src}/index.js`,
    },
  },
  plugins: [],
  devServer: {
    progress: false,
    stats: statConfig,
    debug: true,
    noInfo: false,
    quiet: false,
  },
  debug: true,
}
