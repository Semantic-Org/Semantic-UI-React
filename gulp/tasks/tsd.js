const { dest, src, task } = require('gulp')
const { paths } = require('../../config')

task('tsd', () => {
  return src(paths.src('**/*.d.ts'))
    .pipe(dest(paths.dist('commonjs')))
})
