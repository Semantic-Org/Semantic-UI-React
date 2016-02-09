import defaultGulp from 'gulp'
import helpConfig from '../gulphelp'
import loadPlugins from 'gulp-load-plugins'
import runSequence from 'run-sequence'

const g = loadPlugins()
const gulp = g.help(defaultGulp, helpConfig)

gulp.task('default', cb => {
  runSequence(
    'docs',
    'serve',
    'watch',
    cb
  )
})
