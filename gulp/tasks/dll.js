const del = require('del')
const { task, series } = require('gulp')
const loadPlugins = require('gulp-load-plugins')
const webpack = require('webpack')

const config = require('../../config')

const g = loadPlugins()
const { log, PluginError } = g.util

// ----------------------------------------
// Clean
// ----------------------------------------

task('clean:dll', (cb) => {
  del.sync(config.paths.base('dll'))
  cb()
})

// ----------------------------------------
// Build
// ----------------------------------------

task('build:dll', (cb) => {
  const webpackDLLConfig = require('../../webpack.dll')
  const compiler = webpack(webpackDLLConfig)

  compiler.run((err, stats) => {
    const { errors, warnings } = stats.toJson()

    log(stats.toString(config.compiler_stats))

    if (err) {
      log('Webpack compiler encountered a fatal error.')
      throw new PluginError('webpack', err.toString())
    }
    if (errors.length > 0) {
      log('Webpack compiler encountered errors.')
      throw new PluginError('webpack', errors.toString())
    }
    if (warnings.length > 0 && config.compiler_fail_on_warning) {
      throw new PluginError('webpack', warnings.toString())
    }

    cb(err)
  })
})

// ----------------------------------------
// Default
// ----------------------------------------

task('dll', series(
  'clean:dll',
  'build:dll'
))
