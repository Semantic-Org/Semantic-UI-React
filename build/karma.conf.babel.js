import { argv } from 'yargs'
import config from '../config'
import webpackConfig from './webpack.config'
const { paths } = config

module.exports = (karmaConfig) => {
  karmaConfig.set({
    basePath: process.cwd(),
    browsers: ['PhantomJS'],
    singleRun: !argv.watch,
    reporters: ['mocha'],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './test/tests.bundle.js',
    ],
    frameworks: ['mocha'],
    preprocessors: {
      '**/*.bundle.js': ['webpack', 'sourcemap'],
    },
    client: {
      mocha: {
        reporter: 'html',   // change Karma's debug.html to mocha web reporter
        ui: 'bdd',
      },
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        ...webpackConfig.module,
        loaders: [
          {
            test: /sinon\.js$/,
            loader: 'imports?define=>false,require=>false',
          },
          {
            test: /\.js$/,
            loaders: ['babel', 'eslint'],
            exclude: paths.base('node_modules'),
          },
          {
            test: /\.json$/,
            loaders: ['json'],
            exclude: paths.base('node_modules'),
          },
        ],
      },
      resolve: {
        ...webpackConfig.resolve,
        alias: {
          ...webpackConfig.resolve.alias,
          jquery: `${paths.test('mocks')}/SemanticjQuery-mock.js`,
          sinon: 'sinon/pkg/sinon',
        },
      },
    },
    webpackServer: {
      progress: false,
      stats: config.compiler_stats,
      debug: true,
      noInfo: false,
      quiet: false,
    },
  })
}
