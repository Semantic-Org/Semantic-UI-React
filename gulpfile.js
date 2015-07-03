var gulp = require('gulp');
var runSequence = require('run-sequence');
var g = require('gulp-load-plugins')();
var del = require('del');
var webpack = require('webpack');

var paths = {
  root: __dirname + '/',
  dist: __dirname + '/dist/',
  docs: __dirname + '/docs/',
  src: __dirname + '/src/',
  test: __dirname + '/test/',
};

// http://webpack.github.io/docs/node.js-api.html#stats
var webpackOutputOpts = {
  hash: false,            // the hash of the compilation
  version: false,         // webpack version info
  timings: true,          // timing info
  assets: true,           // assets info
  chunks: false,          // chunk info
  colors: false,          // with console colors
  chunkModules: false,    // built modules info to chunk info
  modules: false,         // built modules info
  cached: false,          // also info about cached (not built) modules
  reasons: false,         // info about the reasons why modules are included
  source: false,          // the source code of modules
  errorDetails: false,    // details to errors (like resolving log)
  chunkOrigins: false,    // the origins of chunks and chunk merging info
  modulesSort: '',        // (string) sort the modules by that field
  chunksSort: '',         // (string) sort the chunks by that field
  assetsSort: ''          // (string) sort the assets by that field
};


//
// Build
//
gulp.task('clean-build', function(cb) {
  del(paths.dist, cb);
});

gulp.task('build', function(cb) {
  runSequence(
    'clean-build',
    [
      'build-docs',
      'build-components'
    ],
    cb
  )
});

gulp.task('build-components', function(cb) {
  return gulp.src([
    paths.src + '**/*.js'
  ])
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build-docs', function(cb) {
  // http://webpack.github.io/docs/configuration.html
  var webpackOpts = {
    entry: paths.docs + 'App.js',
    output: {
      path: paths.docs,
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'jsx-loader?harmony'
        }
      ]
    },
    resolve: {
      root: __dirname
    }
  };

  // run webpack
  webpack(webpackOpts, function(err, stats) {
    if (err) {
      throw new g.util.PluginError('webpack', err);
    }

    g.util.log(
      g.util.colors.green('[webpack]'),
      stats.toString(webpackOutputOpts)
    );

    cb();
  });
});

//
// Serve
//

gulp.task('serve', function() {
  return gulp.src(paths.root)
    .pipe(g.webserver({
      host: 'localhost',
      port: 8080,
      livereload: {
        enable: true,
        filter: function(filePath) {
          var isNodeModule = filePath.match(/node_modules/);
          var shouldReload = !isNodeModule;

          console.log(shouldReload, filePath);

          return shouldReload;
        }
      },
      fallback: 'index.html',
      open: false
    }));
});

//
// Watch
//

gulp.task('watch', function() {
  return gulp.watch([
    paths.src + '**/*.js',            // all js
    paths.test + '**/*.js',           // all js
    paths.docs + '**/*.js',           // all js
    '!' + paths.docs + 'bundle.js'    // except bundle.js (circular builds)
  ], ['build-docs']);
});

//
// Default
//

gulp.task('default', function(cb) {
  runSequence(
    'build-docs',
    'watch',
    'serve',
    cb
  );
});
