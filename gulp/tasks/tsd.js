import { dest, src, task } from 'gulp'
import config from '../../config'

const { paths } = config

task('tsd', () => src(paths.src('**/*.d.ts'))
  .pipe(dest(paths.dist('commonjs'))))
