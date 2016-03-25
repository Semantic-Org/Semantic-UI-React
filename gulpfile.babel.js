/**
 * Tasks live in the tasks directory.
 * This file just loads all the gulp tasks.
 */
import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('./gulp/tasks')

// do not use tasks/default
// the default task must be loaded after all other tasks
// requireDir above loads all our tasks in alphabetical order
gulp.task('default', gulp.series('serve'))
