var g = require('gulp-load-plugins')();
var gulp = g.help(require('gulp'), require('../gulphelp'));
var runSequence = require('run-sequence');
var del = require('del');

var paths = require('../../paths');

gulp.task('build-docs', 'generate docs', function(cb) {
  runSequence(
    'clean-docs',
    [
      'build-doc-html',
      'generate-doc-json',
    ],
    'webpack-docs',
    cb
  );
});

gulp.task('clean-docs', function(cb) {
  del(paths.docsBuild, cb);
});

gulp.task('generate-doc-json', function(cb) {
  var gulpReactDocgen = require('../plugins/gulp-react-docgen');

  return gulp.src([
    paths.components + '/stardust/**/*.js',
    paths.components + '/modules/**/*.js',
  ])
    .pipe(g.plumber())
    .pipe(gulpReactDocgen())
    .pipe(gulp.dest(paths.docsApp));
});

gulp.task('webpack-docs', function(cb) {
  var webpack = require('webpack');
  var config = require('../../webpack.docs');
  var statsConfig = require('../../webpack-stats');

  webpack(config, function(err, stats) {
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

gulp.task('build-doc-html', function(cb) {
  return gulp.src(paths.docsApp + '/**/*.html')
    .pipe(gulp.dest(paths.docsBuild));
});
