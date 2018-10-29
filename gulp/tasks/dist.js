import { dest, task, series, src, parallel } from 'gulp'
import rimraf from 'rimraf'

import sh from '../sh'
import config from '../../config'

const { paths } = config

// ----------------------------------------
// Clean
// ----------------------------------------

task('clean:dist', (cb) => {
  rimraf(`${config.paths.dist()}/*`, cb)
})

// ----------------------------------------
// Build
// ----------------------------------------

task('build:dist:commonjs:js', (cb) => {
  sh(`yarn cross-env NODE_ENV=build babel ${paths.src()} -d ${paths.dist('commonjs')}`, cb)
})

task('build:dist:commonjs:tsd', () =>
  src(paths.src('**/*.d.ts')).pipe(dest(paths.dist('commonjs'))),
)

task('build:dist:commonjs', parallel('build:dist:commonjs:js', 'build:dist:commonjs:tsd'))

task('build:dist:es', (cb) => {
  sh(`yarn cross-env NODE_ENV=build-es babel ${paths.src()} -d ${paths.dist('es')}`, cb)
})

task('build:dist:umd', (cb) => {
  sh(
    `yarn cross-env NODE_ENV=build-umd webpack --config ${paths.base('webpack.umd.config.js')}`,
    cb,
  )
})

task('build:dist', parallel('build:dist:commonjs', 'build:dist:es', 'build:dist:umd'))

// ----------------------------------------
// Default
// ----------------------------------------

task('dist', series('clean:dist', 'build:dist'))
