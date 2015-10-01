var paths = require('./paths');
var statConfig = require('./webpack-stats');
var friendlyFormatter = require('eslint-friendly-formatter');

/**
 * This config is for running tests on the command line and will fail on errors.
 * @param {{}} config Karma config object.
 * @type {{}}
 */
module.exports = function(config) {
  config.set({
    browsers: [
      'PhantomJS'
    ],
    singleRun: true,
    reporters: ['dots'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/tests.bundle.js'
    ],
    frameworks: [
      'mocha'
    ],
    preprocessors: {
      '**/*.bundle.js': ['webpack', 'sourcemap']
    },
    client: {
      mocha: {
        // require: '',
        reporter: 'html',   // change Karma's debug.html to mocha web reporter
        ui: 'bdd'
      }
    },
    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies
      devtool: 'inline-source-map',
      eslint: {
        formatter: friendlyFormatter,
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loaders: ['babel', 'eslint'],
            include: [paths.components, paths.test],
          },
          {
            test: /\.json$/,
            loaders: ['json'],
            include: [paths.components, paths.test],
          }
        ]
      },
      resolve: {
        root: paths.root,
        modulesDirectories: [
          'node_modules',
          '.',
        ],
        alias: {
          // When these key names are require()'d, the value will be supplied instead
          lodash: paths.bower_components + '/lodash/lodash.min.js',
          jquery: paths.testMocks + '/SemanticjQuery-mock.js',
        },
      },
      plugins: [
        require('./webpack-exit-plugin')
      ],
    },
    webpackServer: {
      progress: false,
      stats: statConfig,
      debug: true,
      noInfo: true,
      quiet: false
    }
  });
};
