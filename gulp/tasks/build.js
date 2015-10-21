import del from 'del';
import defaultGulp from 'gulp';
import helpConfig from '../gulphelp';
import loadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';
import webpack from 'webpack';

const g = loadPlugins();
const gulp = g.help(defaultGulp, helpConfig);

import ENV from '../../ENV';
import paths from '../../paths';
import statsConfig from '../../webpack-stats';
import config from '../../webpack.prod.babel';

gulp.task('build', 'build stardust', cb => {
  runSequence(
    'clean-build',
    'webpack-build',
    cb
  );
});

gulp.task('clean-build', cb => {
  del.sync(paths.dist);
  cb();
});

gulp.task('webpack-build', cb => {
  webpack(config, (err, stats) => {
    if (err) {
      throw new g.util.PluginError('webpack', err);
    }

    g.util.log(
      g.util.colors.cyan('Build bundle:'),
      stats.toString(statsConfig)
    );

    cb(err);
  });
});
