import del from 'del';
import defaultGulp from 'gulp';
import helpConfig from '../gulphelp';
import loadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

const g = loadPlugins();
const gulp = g.help(defaultGulp, helpConfig);

import ENV from '../../ENV';
import config from '../../webpack.dev.babel';
import paths from '../../paths';
import statsConfig from '../../webpack-stats';
import webpack from 'webpack';

gulp.task('docs', 'build doc sites', cb => {
  runSequence(
    'clean-docs',
    'build-docs-html',
    'generate-docs-json',
    'webpack-docs',
    cb
  );
});

gulp.task('clean-docs', cb => {
  del.sync(paths.docsBuild);
  cb();
});

gulp.task('generate-docs-json', cb => {
  const gulpReactDocgen = require('../plugins/gulp-react-docgen');

  return gulp.src([
    paths.srcAddons + '/**/*.js',
    paths.srcElements + '/**/*.js',
    paths.srcCollections + '/**/*.js',
    paths.srcModules + '/**/*.js',
    paths.srcViews + '/**/*.js',
    '!' + paths.src + '/**/Style.js'
  ])
    // do not remove the function keyword
    // we need 'this' scope here
    .pipe(g.plumber(function(err) {
      g.util.log(err);
      this.emit('end');
    }))
    .pipe(gulpReactDocgen())
    .pipe(gulp.dest(paths.docsApp));
});

gulp.task('webpack-docs', cb => {
  webpack(config, (err, stats) => {
    if (err) {
      throw new g.util.PluginError('webpack', err);
    }

    g.util.log(
      g.util.colors.cyan('Docs bundle:'),
      stats.toString(statsConfig)
    );

    cb(err);
  });
});

gulp.task('build-docs-html', cb => {
  const replaceOpts = {
    keepUnassigned: true    // keep build blocks without a defined replacement
  };
  const replaceTasks = {};
  replaceTasks[ENV.isProduction() ? 'development' : 'production'] = '';

  return gulp.src(paths.docsApp + '/**/*.html')
    .pipe(g.htmlReplace(replaceTasks, replaceOpts))
    .pipe(gulp.dest(paths.docsBuild));
});
