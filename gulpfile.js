var gulp = require('gulp');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')();

var paths = {
  root: __dirname + '/',
  node_modules: __dirname + '/node_modules/',
  modules: './modules/',
  tapFluxDist: '../../dist/'
};


//
// Build
//

gulp.task('build', function() {
  var webpackOpts = {
    output: {
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'jsx-loader'
        }
      ]
    },
    resolveLoader: {
      root: paths.node_modules
    }
  };

  return gulp.src(paths.root + 'components/App.js')
    .pipe($.webpack(webpackOpts))
    .pipe(gulp.dest(paths.root));
});


//
// Serve
//

gulp.task('serve', function() {
  return gulp.src(paths.root)
    .pipe($.webserver({
      host: 'localhost',
      port: 8080,
      livereload: true,
      fallback: 'index.html',
      open: false
    }));
});


//
// Watch
//

gulp.task('watch', function() {
  return gulp.watch([
    paths.tapFluxDist + '*.js',
    paths.root + 'app/**/*.js',
    '!' + paths.node_modules + '**/*'
  ], ['build']);
});


//
// Default
//

gulp.task('default', function(cb) {
  runSequence(
    'build',
    'watch',
    'serve',
    cb
  );
});