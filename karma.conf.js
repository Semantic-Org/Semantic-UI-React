const { argv } = require('yargs')
const config = require('./config')
const webpackConfig = require('./webpack.config')

module.exports = (karmaConfig) => {
  karmaConfig.set({
    basePath: process.cwd(),
    browsers: ['PhantomJS'],
    singleRun: !argv.watch,
    reporters: ['mocha', 'coverage'],
    files: [
      './test/tests.bundle.js',
    ],
    formatError(msg) {
      let haveSeenStack = false
      return msg
        .split('\n')
        .reduce((list, line) => {
          // filter out node_modules
          if (/~/.test(line)) return list

          // indent the error beneath the it() message
          let newLine = '  ' + line

          if (newLine.includes('webpack:///')) {
            if (haveSeenStack === false) {
              const indent = newLine.slice(0, newLine.search(/\S/))
              newLine = `\n${indent}Stack:\n${newLine}`
              haveSeenStack = true
            }

            // remove webpack:///
            newLine = newLine.replace('webpack:///', '')

            // remove bundle location, showing only the source location
            newLine = newLine.slice(0, newLine.indexOf(' <- '))
          }

          return list.concat(newLine)
        }, [])
        .join('\n')
    },
    frameworks: [
      'phantomjs-shim',
      'mocha',
    ],
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: 'coverage', subdir: '.' },
        { type: 'text-summary' },
      ],
      includeAllSources: true,
    },
    preprocessors: {
      // do not include 'coverage' preprocessor for karma-coverage
      // code is already instrumented by babel-plugin-__coverage__
      '**/*.bundle.js': ['webpack'],
    },
    client: {
      mocha: {
        reporter: 'html',   // change Karma's debug.html to mocha web reporter
        ui: 'bdd',
      },
    },
    webpack: {
      devtool: config.compiler_devtool,
      module: webpackConfig.module,
      plugins: webpackConfig.plugins,
      resolve: Object.assign({}, webpackConfig.resolve, {
        alias: Object.assign({}, webpackConfig.resolve.alias, {
          // These are internal deps specific to React 0.13 required() by enzyme
          // They shouldn't be requiring these at all, issues and fix proposed
          // https://github.com/airbnb/enzyme/issues/285
          'react/lib/ExecutionEnvironment': 'empty/object',
          'react/lib/ReactContext': 'empty/object',
          // this is a React 0.13 dep required by enzyme
          // ignore it since we don't have it
          'react/addons': 'empty/object',
        }),
      }),
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
