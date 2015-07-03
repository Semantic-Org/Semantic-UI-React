var gulp = require('gulp');
var runSequence = require('run-sequence');
var g = require('gulp-load-plugins')();

var paths = {
  root: __dirname + '/',
  components: __dirname + '/components/',
  node_modules: __dirname + '/node_modules/',
  entryFile: __dirname + '/App.js'
};


//
// Build
//

gulp.task('build', function(cb) {
  var webpack = require('webpack');

  // http://webpack.github.io/docs/configuration.html
  var webpackOpts = {
    entry: paths.entryFile,
    output: {
      path: paths.root,
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
    resolveLoader: {
      root: paths.node_modules
    }
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
    paths.root + '**/*.js',           // all js
    '!' + paths.node_modules,         // except node_modules
    '!' + paths.root + 'bundle.js'    // except bundle.js (circular builds)
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
