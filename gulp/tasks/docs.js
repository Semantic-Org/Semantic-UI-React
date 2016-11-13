const historyApiFallback = require('connect-history-api-fallback')
const del = require('del')
const express = require('express')
const { task, src, dest, parallel, series, watch } = require('gulp')
const loadPlugins = require('gulp-load-plugins')
const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')

const config = require('../../config')

const g = loadPlugins()
const { colors, log, PluginError } = g.util

const handleWatchChange = (e) => log(`File ${e.path} was ${e.type}, running tasks...`)

// ----------------------------------------
// Clean
// ----------------------------------------

task('clean:docs', (cb) => {
  del.sync(config.paths.docsDist())
  cb()
})

// ----------------------------------------
// Build
// ----------------------------------------

task('build:docs:docgen', () => {
  const gulpReactDocgen = require('../plugins/gulp-react-docgen')

  return src([
    `${config.paths.src()}/addons/**/*.js`,
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
    .pipe(dest(config.paths.docsSrc()))
})

task('build:docs:html', () => {
  return src(config.paths.docsSrc('404.html'))
    .pipe(dest(config.paths.docsDist()))
})

task('build:docs:images', () => {
  return src(`${config.paths.docsSrc()}/**/*.{png,jpg,gif}`)
    .pipe(dest(config.paths.docsDist()))
})

task('build:docs:webpack', (cb) => {
  const webpackConfig = require('../../webpack.config')
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
        'build:docs:images'
      )
    )
  ),
  'build:docs:webpack'
))

// ----------------------------------------
// Serve
// ----------------------------------------

task('serve:docs', (cb) => {
  const webpackConfig = require('../../webpack.config')
  const app = express()
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
  'serve:docs'
))
