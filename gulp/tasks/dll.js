import { task } from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import webpack from 'webpack'

import config from '../../config'

const g = loadPlugins()
const { log, PluginError } = g.util

task('dll', (cb) => {
  const webpackDLLConfig = require('../../build/webpack.dll')
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
