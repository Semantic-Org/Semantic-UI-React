import { argv } from 'yargs'
import webpack from 'webpack'

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
      require.resolve('babel-polyfill/browser'),
      './test/tests.bundle.js',
    ],
    frameworks: ['mocha'],
    preprocessors: {
      '**/*.bundle.js': ['webpack'],
    },
    client: {
      mocha: {
        reporter: 'html',   // change Karma's debug.html to mocha web reporter
        ui: 'bdd',
      },
    },
    webpack: {
      devtool: 'cheap-module-source-map',
      module: {
        ...webpackConfig.module,
        loaders: [
          {
            test: /sinon\.js$/,
            loader: 'imports?define=>false,require=>false',
          },
          ...webpackConfig.module.loaders,
        ],
      },
      plugins: [
        new webpack.DefinePlugin(config.compiler_globals),
      ],
      resolve: {
        ...webpackConfig.resolve,
        alias: {
          ...webpackConfig.resolve.alias,
          jquery: `${paths.test('mocks')}/SemanticjQuery-mock.js`,
          sinon: 'sinon/pkg/sinon',
          // These are internal deps specific to React 0.13 required() by enzyme
          // They shouldn't be requiring these at all, issues and fix proposed
          // https://github.com/airbnb/enzyme/issues/285
          'react/lib/ExecutionEnvironment': 'empty/object',
          'react/lib/ReactContext': 'empty/object',
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
