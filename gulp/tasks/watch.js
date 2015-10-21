import defaultGulp from 'gulp';
import helpConfig from '../gulphelp';
import loadPlugins from 'gulp-load-plugins';

const g = loadPlugins();
const gulp = g.help(defaultGulp, helpConfig);

import paths from '../../paths';

gulp.task('watch', 'watch and build docs', cb => {
  gulp.watch([paths.src + '/**/*.js'], [
    'build',                // rebuild the library
    'generate-doc-json',    // rebuild doc info
  ]);
  gulp.watch([paths.docsRoot + '/**/*.html'], ['build-doc-html']);
  cb();
});
