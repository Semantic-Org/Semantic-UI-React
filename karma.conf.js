import paths from './paths';
import statConfig from './webpack-stats';
import friendlyFormatter from 'eslint-friendly-formatter';
import exitPlugin from './webpack-exit-plugin';
import ENV from './ENV';

/**
 * This config is for running tests on the command line and will fail on errors.
 * @param {{}} config Karma config object.
 * @type {{}}
 */
export default config => {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: !ENV.isDevelopment(),
    reporters: ['mocha'],
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
            exclude: paths.node_modules
          },
          {
            test: /\.json$/,
            loaders: ['json'],
            exclude: paths.node_modules
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
          jquery: paths.testMocks + '/SemanticjQuery-mock.js',
          stardust: `${paths.src}/index.js`,
        },
      },
      plugins: !ENV.isDevelopment()
        ? [exitPlugin]
        : [],
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
