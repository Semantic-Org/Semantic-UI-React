import fs from 'fs'
import puppeteer from 'puppeteer'

import config from './config'
import webpackConfig from './webpack.karma.config'

process.env.CHROME_BIN = puppeteer.executablePath()

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
      './node_modules/@babel/standalone/babel.js',
      './node_modules/lodash/lodash.js',
      './node_modules/react/umd/react.development.js',
      './node_modules/react-dom/umd/react-dom.development.js',
      './node_modules/react-dom/umd/react-dom-server.browser.development.js',

      { pattern: 'docs/public/logo.png', watched: false, included: false, served: true },
      { pattern: 'docs/public/**/*.jpg', watched: false, included: false, served: true },
      { pattern: 'docs/public/**/*.png', watched: false, included: false, served: true },
      './test/tests.bundle.js',
    ],
    formatError,
    frameworks: ['mocha'],
    // make karma serve all files that the web server does: /* => /docs/app/*
    proxies: fs.readdirSync(paths.docsPublic()).reduce((acc, file) => {
      const isDir = fs.statSync(paths.docsPublic(file)).isDirectory()
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
      ...webpackConfig,
      entry: './test/tests.bundle.js',
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
