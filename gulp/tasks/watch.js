var g = require('gulp-load-plugins')();
var gulp = g.help(require('gulp'), require('../gulphelp'));

var paths = require('../../paths');

gulp.task('watch', 'watch and build docs', function(cb) {
  gulp.watch([paths.src + '/**/*.js'], ['generate-doc-json']);
  gulp.watch([paths.docsRoot + '/**/*.html'], ['build-doc-html']);
  cb();
});
