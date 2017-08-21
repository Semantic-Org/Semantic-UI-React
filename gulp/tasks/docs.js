import historyApiFallback from 'connect-history-api-fallback'
import express from 'express'
import { task, src, dest, parallel, series, watch } from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import rimraf from 'rimraf'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'

import config from '../../config'
import gulpReactDocgen from '../plugins/gulp-react-docgen'

const g = loadPlugins()
const { colors, log, PluginError } = g.util

const handleWatchChange = e => log(`File ${e.path} was ${e.type}, running tasks...`)

// ----------------------------------------
// Clean
// ----------------------------------------

task('clean:docs', (cb) => {
  rimraf(config.paths.docsDist(), cb)
})

// ----------------------------------------
// Build
// ----------------------------------------

task('build:docs:docgen', () => src([
  `${config.paths.src()}/addons/**/*.js`,
  `${config.paths.src()}/behaviors/**/*.js`,
  `${config.paths.src()}/elements/**/*.js`,
  `${config.paths.src()}/collections/**/*.js`,
  `${config.paths.src()}/modules/**/*.js`,
  `${config.paths.src()}/views/**/*.js`,
  '!**/index.js',
])
  // do not remove the function keyword
  // we need 'this' scope here
  .pipe(g.plumber(function handleError(err) {
    log(err.toString())
    this.emit('end')
  }))
  .pipe(gulpReactDocgen())
  .pipe(dest(config.paths.docsSrc())))

task('build:docs:html', () => src(config.paths.docsSrc('404.html'))
  .pipe(dest(config.paths.docsDist())))

task('build:docs:images', () => src(`${config.paths.docsSrc()}/**/*.{png,jpg,gif}`)
  .pipe(dest(config.paths.docsDist())))

task('build:docs:webpack', (cb) => {
  const webpackConfig = require('../../webpack.config.babel').default
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

task('build:docs', series(
  parallel(
    'dll',
    series(
      'clean:docs',
      parallel(
        'build:docs:docgen',
        'build:docs:html',
        'build:docs:images',
      ),
    ),
  ),
  'build:docs:webpack',
))

// ----------------------------------------
// Serve
// ----------------------------------------

task('serve:docs', (cb) => {
  const app = express()
  const webpackConfig = require('../../webpack.config.babel').default
  const compiler = webpack(webpackConfig)

  app
    .use(historyApiFallback({
      verbose: false,
    }))

    .use(WebpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: config.paths.docsSrc(),
      hot: true,
      quiet: false,
      noInfo: true, // must be quiet for hot middleware to show overlay
      lazy: false,
      stats: config.compiler_stats,
    }))

    .use(WebpackHotMiddleware(compiler))

    .use(express.static(config.paths.docsDist()))

    .listen(config.server_port, config.server_host, () => {
      log(colors.yellow('Server running at http://%s:%d'), config.server_host, config.server_port)
      cb()
    })
})

// ----------------------------------------
// Watch
// ----------------------------------------

task('watch:docs', (cb) => {
  // rebuild doc info
  watch(`${config.paths.src()}/**/*.js`, series('build:docs:docgen'))
    .on('change', handleWatchChange)

  // rebuild images
  watch(`${config.paths.src()}/**/*.{png,jpg,gif}`, series('build:docs:images'))
    .on('change', handleWatchChange)
  cb()
})

// ----------------------------------------
// Default
// ----------------------------------------

task('docs', series(
  'build:docs',
  'serve:docs',
))
