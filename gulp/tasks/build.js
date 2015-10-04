var g = require('gulp-load-plugins')();
var gulp = g.help(require('gulp'), require('../gulphelp'));
var runSequence = require('run-sequence');
var del = require('del');
var ENV = require('../../ENV');
var paths = require('../../paths');

gulp.task('build', 'build doc sites', function(cb) {
  runSequence(
    'clean',
    'build-doc-html',
    'generate-doc-json',
    'webpack',
    cb
  );
});

gulp.task('clean', function(cb) {
  del.sync(paths.docsBuild);
  cb();
});

gulp.task('generate-doc-json', function(cb) {
  var gulpReactDocgen = require('../plugins/gulp-react-docgen');

  return gulp.src([
    paths.src + '/components/**/*.js',
    '!' + paths.src + '/**/Style.js'
  ])
    .pipe(g.plumber())
    .pipe(gulpReactDocgen())
    .pipe(gulp.dest(paths.docsApp));
});

gulp.task('webpack', function(cb) {
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
  var replaceOpts = {
    keepUnassigned: true    // keep build blocks without a defined replacement
  };
  var replaceTasks = {};
  replaceTasks[ENV.isProduction() ? 'development' : 'production'] = '';

  return gulp.src(paths.docsApp + '/**/*.html')
    .pipe(g.htmlReplace(replaceTasks, replaceOpts))
    .pipe(gulp.dest(paths.docsBuild));
});
