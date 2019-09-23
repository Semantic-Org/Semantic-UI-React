// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err
})

const chalk = require('chalk')
const fs = require('fs-extra')
const webpack = require('webpack')
const bfj = require('bfj')
const config = require('./webpack.config.prod')
const paths = require('./paths')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const FileSizeReporter = require('react-dev-utils/FileSizeReporter')
const printBuildError = require('react-dev-utils/printBuildError')
const path = require('path')
const shellJs = require('shelljs')
const { getThemes } = require('./helpers')

const measureFileSizesBeforeBuild =
  FileSizeReporter.measureFileSizesBeforeBuild
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.themesIndex])) {
  process.exit(1)
}

// Process CLI arguments
const argv = process.argv.slice(2)
const writeStatsJson = argv.indexOf('--stats') !== -1

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
measureFileSizesBeforeBuild(paths.themesDist)
  .then((previousFileSizes) => {
    // Remove all content but keep the directory so that
    // if you're in it, you don't end up in Trash
    fs.emptyDirSync(paths.themesDist)
    // Start the webpack build
    return build(previousFileSizes) // eslint-disable-line no-use-before-define
  })
  .then(
    (resolveArgs) => {
      resolveArgs.forEach(
        // eslint-disable-next-line object-curly-newline
        ({ theme, stats, previousFileSizes, warnings }) => {
          if (warnings.length) {
            console.log(chalk.yellow(`Theme ${theme} compiled with warnings.\n`)) // eslint-disable-line no-console
            console.log(warnings.join('\n\n')) // eslint-disable-line no-console
            console.log( // eslint-disable-line no-console
              '\nSearch for the ' + // eslint-disable-line prefer-template
                chalk.underline(chalk.yellow('keywords')) +
                ' to learn more about each warning.',
            )
            console.log( // eslint-disable-line no-console
              'To ignore, add ' + // eslint-disable-line prefer-template
                chalk.cyan('// eslint-disable-next-line') +
                ' to the line before.\n',
            )
          } else {
            console.log(chalk.green(`\nTheme '${theme}' compiled successfully.\n`)) // eslint-disable-line no-console
          }

          console.log('File sizes after gzip:\n') // eslint-disable-line no-console
          printFileSizesAfterBuild(
            stats,
            previousFileSizes,
            paths.themesDist,
            WARN_AFTER_BUNDLE_GZIP_SIZE,
            WARN_AFTER_CHUNK_GZIP_SIZE,
          )
          console.log() // eslint-disable-line no-console
        },
      )

      fs.removeSync(`${paths.themesDist}/static`)
      fs.removeSync(`${paths.themesDist}/main.js`)
      fs.removeSync(path.resolve(paths.themesDist, '../webfonts'))
    },
    (err) => {
      console.log(chalk.red('Failed to compile.\n')) // eslint-disable-line no-console
      printBuildError(err)
      process.exit(1)
    },
  )
  .catch((err) => {
    if (err && err.message) {
      console.log(err.message) // eslint-disable-line no-console
    }
    process.exit(1)
  })

// Create the production build and print the deployment instructions.
function build(previousFileSizes) {
  const themes = getThemes()
  if (themes.length < 1) {
    console.log('No themes were found.') // eslint-disable-line no-console
    return
  }

  console.log(`\nPreparing to build the following themes: ${themes}...`) // eslint-disable-line no-console

  return Promise.all(
    themes.map((theme) => {
      const compiler = webpack(config(theme))
      return new Promise((resolve, reject) => {
        console.log(`\nBuilding theme: ${theme}...`) // eslint-disable-line no-console
        compiler.run((err, stats) => {
          let messages
          if (err) {
            if (!err.message) {
              return reject(err)
            }
            messages = formatWebpackMessages({
              errors: [err.message],
              warnings: [],
            })
          } else {
            messages = formatWebpackMessages(
              stats.toJson({ all: false, warnings: true, errors: true }),
            )
          }
          if (messages.errors.length) {
            // Only keep the first error. Others are often indicative
            // of the same problem, but confuse the reader with noise.
            if (messages.errors.length > 1) {
              messages.errors.length = 1
            }
            return reject(new Error(messages.errors.join('\n\n')))
          }
          if (
            process.env.CI &&
            (typeof process.env.CI !== 'string' ||
              process.env.CI.toLowerCase() !== 'false') &&
            messages.warnings.length
          ) {
            console.log( // eslint-disable-line no-console
              chalk.yellow(
                '\nTreating warnings as errors because process.env.CI = true.\n' +
                  'Most CI servers set it automatically.\n',
              ),
            )
            return reject(new Error(messages.warnings.join('\n\n')))
          }

          const resolveArgs = {
            theme,
            stats,
            previousFileSizes,
            warnings: messages.warnings,
          }
          if (writeStatsJson) {
            return bfj
              .write(`${paths.themesDist}/bundle-stats.json`, stats.toJson())
              .then(() => resolve(resolveArgs))
              .catch(error => reject(new Error(error)))
          }

          return resolve(resolveArgs)
        })
      })
    }),
  )
}
