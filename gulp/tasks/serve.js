import { series, task } from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import express from 'express'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'
import historyApiFallback from 'connect-history-api-fallback'

import config from '../../config'

const g = loadPlugins()
const { log, colors } = g.util

const serve = (cb) => {
  const webpackConfig = require('../../webpack.config')
  const app = express()
  const compiler = webpack(webpackConfig)

  app
    .use(express.static(config.paths.docsDist()))

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

    .listen(config.server_port, config.server_host, () => {
      log(colors.yellow('Server running at http://%s:%d'), config.server_host, config.server_port)
      cb()
    })
}

task('serve', series('dll', serve))
