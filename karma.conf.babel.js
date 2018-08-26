import fs from 'fs'
import { executablePath } from 'puppeteer'

import config from './config'
import webpackConfig from './webpack.config.babel'

process.env.CHROME_BIN = executablePath()

const { paths } = config

const formatError = (msg) => {
  // filter out empty lines and node_modules
  if (!msg.trim() || /~/.test(msg) || /node_modules\//.test(msg)) return ''

  // indent the error beneath the it() message
  let newLine = `  ${msg}`

  if (newLine.includes('webpack:///')) {
    // remove webpack:///
    newLine = newLine.replace('webpack:///', '')

    // remove bundle location, showing only the source location
    newLine = newLine.slice(0, newLine.indexOf(' <- '))
  }

  return `${newLine}\n`
}

export default (karmaConfig) => {
  karmaConfig.set({
    basePath: __dirname,
    browsers: ['puppeteer'],
    browserConsoleLogOptions: {
      level: 'log',
      terminal: true,
    },
    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to mocha web reporter
        ui: 'bdd',
      },
    },
    coverageReporter: {
      reporters: [{ type: 'lcov', dir: 'coverage', subdir: '.' }],
      includeAllSources: true,
    },
    customLaunchers: {
      puppeteer: {
        base: 'ChromeHeadless',
        flags: [
          '--disable-setuid-sandbox',
          '--no-sandbox',
          // Avoid "Maximum call stack size exceeded" errors on CircleCI
          '--stack-trace-limit 200000',
        ],
      },
    },
    files: [
      { pattern: 'docs/public/logo.png', watched: false, included: false, served: true },
      { pattern: 'docs/public/**/*.jpg', watched: false, included: false, served: true },
      { pattern: 'docs/public/**/*.png', watched: false, included: false, served: true },
      './test/tests.bundle.js',
    ],
    formatError,
    frameworks: ['mocha'],
    // make karma serve all files that the web server does: /* => /docs/app/*
    proxies: fs.readdirSync(paths.docsSrc()).reduce((acc, file) => {
      const isDir = fs.statSync(paths.docsSrc(file)).isDirectory()
      const trailingSlash = isDir ? '/' : ''

      const original = `/${file}${trailingSlash}`
      acc[original] = `/base/docs/public/${file}${trailingSlash}`
      return acc
    }, {}),
    reporters: ['mocha', 'coverage'],
    reportSlowerThan: 100,
    singleRun: true,
    preprocessors: {
      // do not include 'coverage' preprocessor for karma-coverage
      // code is already instrumented by babel-plugin-__coverage__
      'test/tests.bundle.js': ['webpack'],
    },
    webpack: {
      entry: './test/tests.bundle.js',
      externals: webpackConfig.externals,
      devtool: config.compiler_devtool,
      module: webpackConfig.module,
      plugins: webpackConfig.plugins,
      resolve: webpackConfig.resolve,
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
