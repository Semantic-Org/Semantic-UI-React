import { task, series, parallel } from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import rimraf from 'rimraf'
import webpack from 'webpack'

import sh from '../sh'
import config from '../../config'

const { paths } = config
const g = loadPlugins()
const { log, PluginError } = g.util

// ----------------------------------------
// Clean
// ----------------------------------------

task('clean:dist', (cb) => {
  rimraf(`${config.paths.dist()}/*`, cb)
})

// ----------------------------------------
// Build
// ----------------------------------------

task('build:dist:commonjs:js', (cb) => {
  sh(`cross-env NODE_ENV=build babel ${paths.src()} -d ${paths.dist('commonjs')}`, cb)
})

task('build:dist:commonjs', parallel('build:dist:commonjs:js'))

task('build:dist:es', (cb) => {
  sh(`cross-env NODE_ENV=build-es babel ${paths.src()} -d ${paths.dist('es')}`, cb)
})

task('build:dist:umd', (cb) => {
  process.env.NODE_ENV = 'build'
  const webpackUMDConfig = require('../../webpack.umd.config').default
  const compiler = webpack(webpackUMDConfig)

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

task('build:dist', parallel('build:dist:commonjs', 'build:dist:es', 'build:dist:umd'))

// ----------------------------------------
// Default
// ----------------------------------------

task('dist', series('clean:dist', 'build:dist'))
