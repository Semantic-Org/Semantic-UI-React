import del from 'del'
import { task, src, dest, series } from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import webpack from 'webpack'

import config from '../../config'
import webpackConfig from '../../build/webpack.config'

const g = loadPlugins()
const { log, PluginError } = g.util

task('clean-docs', () => del(config.paths.docsDist()))

task('generate-docs-json', () => {
  const gulpReactDocgen = require('../plugins/gulp-react-docgen')

  return src([
    `${config.paths.src()}/addons/**/*.js`,
    `${config.paths.src()}/elements/**/*.js`,
    `${config.paths.src()}/collections/**/*.js`,
    `${config.paths.src()}/modules/**/*.js`,
    `${config.paths.src()}/views/**/*.js`,
  ])
  // do not remove the function keyword
  // we need 'this' scope here
    .pipe(g.plumber(function handleError(err) {
      log(err.toString())
      this.emit('end')
    }))
    .pipe(gulpReactDocgen())
    .pipe(dest(config.paths.docsSrc()))
})

task('webpack-docs', (cb) => {
  const compiler = webpack(webpackConfig)

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

task('docs-html', (cb) => {
  return src(config.paths.docsSrc('404.html'))
    .pipe(dest(config.paths.docsDist()))
})

task('docs', series('clean-docs', 'generate-docs-json', 'webpack-docs', 'docs-html'))
