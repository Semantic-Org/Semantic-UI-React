import { task, series, parallel, src, dest } from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import merge2 from 'merge2'
import rimraf from 'rimraf'
import webpack from 'webpack'

import config from '../../config'

const { paths } = config
const g = loadPlugins()
const { log, PluginError } = g.util

// ----------------------------------------
// Clean
// ----------------------------------------

task('clean:dist', cb => {
  rimraf(`${config.paths.dist()}/*`, cb)
})

// ----------------------------------------
// Build
// ----------------------------------------
task('build:dist:commonjs', () => {
  const tsConfig = paths.base('build/tsconfig.commonjs.json')
  const settings = { declaration: true }
  const typescript = g.typescript.createProject(tsConfig, settings)

  const { dts, js } = src(paths.src('**/*.{ts,tsx}')).pipe(typescript())

  return merge2([dts.pipe(dest(paths.dist('types'))), js.pipe(dest(paths.dist('commonjs')))])
})

task('build:dist:es', () => {
  const typescript = g.typescript.createProject(paths.base('build/tsconfig.es.json'))
  return src(paths.src('**/*.{ts,tsx}'))
    .pipe(typescript())
    .pipe(dest(paths.dist('es')))
})

task('build:dist:umd', cb => {
  process.env.NODE_ENV = 'build'
  const webpackUMDConfig = require('../../build/webpack.config.umd').default
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
