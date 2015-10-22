import childProcess from 'child_process';
import defaultGulp from 'gulp';
import helpConfig from '../gulphelp';
import loadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

const g = loadPlugins();
const gulp = g.help(defaultGulp, helpConfig);

import paths from '../../paths';
import statsConfig from '../../webpack-stats';
import webpackConfig from '../../webpack.dev.babel';

gulp.task('serve', 'serve, build (in memory only), and watch the app', cb => {
  const host = 'localhost';
  const port = '8080';
  const protocol = 'http';
  const serverUrl = `${protocol}://${host}:${port}`;

  // http://webpack.github.io/docs/webpack-dev-server.html#api
  const devMiddlewareConfig = {
    contentBase: paths.docsBuild,
    historyApiFallback: true,
    hot: true,
    quiet: false,                    // log nothing
    noInfo: true,                    // log only warnings and errors

    // http://webpack.github.io/docs/node.js-api.html#stats
    stats: statsConfig
  };

  // http://webpack.github.io/docs/configuration.html
  const compiler = webpack(webpackConfig);

  function onComplete(err, stdout, stderr) {
    cb(err);
  }

  new WebpackDevServer(compiler, devMiddlewareConfig)
    .listen(port, host, err => {
      if (err) {
        throw new g.util.PluginError('webpack-dev-server', err);
      }

      g.util.log(
        g.util.colors.green('[webpack-dev-server]'),
        serverUrl
      );

      childProcess.exec('open ' + serverUrl, onComplete);
    });
});
