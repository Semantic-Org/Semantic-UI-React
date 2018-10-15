import { task, src, dest, lastRun, parallel, series, watch } from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import remember from 'gulp-remember'
import path from 'path'
import { build, reloadRoutes, start } from 'react-static/node'
import rimraf from 'rimraf'

import sh from '../sh'
import config from '../../config'
import gulpComponentInfo from '../plugins/gulp-component-info'
import gulpComponentMenu from '../plugins/gulp-component-menu'
import gulpExampleMenu from '../plugins/gulp-example-menu'
import gulpExampleSources from '../plugins/gulp-example-source'
import gulpReactDocgen from '../plugins/gulp-react-docgen'

const { paths } = config
const g = loadPlugins()
const { log } = g.util

const handleWatchChange = filename =>
  log(`File ${path.basename(filename)} was changed, running tasks...`)

const handleWatchUnlink = group => (filename) => {
  log(`File ${path.basename(filename)} was deleted, running tasks...`)
  remember.forget(group, filename)
}

// ----------------------------------------
// Clean
// ----------------------------------------

task('clean:docs:component-info', (cb) => {
  rimraf(paths.docsSrc('componentInfo'), cb)
})

task('clean:docs:component-menu', (cb) => {
  rimraf(paths.docsSrc('componentMenu.json'), cb)
})

task('clean:docs:dist', (cb) => {
  rimraf(paths.docsDist(), cb)
})

task('clean:docs:example-menus', (cb) => {
  rimraf(paths.docsSrc('exampleMenus'), cb)
})

task('clean:docs:example-sources', (cb) => {
  rimraf(paths.docsSrc('exampleSources.json'), cb)
})

task(
  'clean:docs',
  parallel(
    'clean:docs:component-info',
    'clean:docs:component-menu',
    'clean:docs:dist',
    'clean:docs:example-menus',
    'clean:docs:example-sources',
  ),
)

// ----------------------------------------
// Build docs with React Static
// ----------------------------------------

task('build:docs:static:build', (cb) => {
  build().then(cb)
})

task('build:docs:static:reload', (cb) => {
  reloadRoutes()
  cb()
})

task('build:docs:static:start', (cb) => {
  start()
  cb()
})

// ----------------------------------------
// Build
// ----------------------------------------

const componentsSrc = [
  `${paths.posix.src()}/addons/*/*.js`,
  `${paths.posix.src()}/behaviors/*/*.js`,
  `${paths.posix.src()}/elements/*/*.js`,
  `${paths.posix.src()}/collections/*/*.js`,
  `${paths.posix.src()}/modules/*/*.js`,
  `${paths.posix.src()}/views/*/*.js`,
  '!**/index.js',
]

const examplesSectionsSrc = `${paths.posix.docsSrc()}/examples/*/*/*/index.js`
const examplesSrc = `${paths.posix.docsSrc()}/examples/*/*/*/!(*index).js`

task('build:docs:cname', (cb) => {
  sh(`echo react.semantic-ui.com > ${paths.docsDist('CNAME')}`, cb)
})

task('build:docs:docgen', () =>
  src(componentsSrc, { since: lastRun('build:docs:docgen') })
    .pipe(remember('component-info'))
    .pipe(gulpReactDocgen())
    .pipe(gulpComponentInfo())
    .pipe(dest(paths.docsSrc('componentInfo'))),
)

task('build:docs:component-menu', () =>
  src(componentsSrc, { since: lastRun('build:docs:component-menu') })
    .pipe(gulpComponentMenu())
    .pipe(dest(paths.docsSrc())),
)

task('build:docs:example-menu', () =>
  src(examplesSectionsSrc, { since: lastRun('build:docs:example-menu') })
    .pipe(remember('example-menu'))
    .pipe(gulpExampleMenu())
    .pipe(dest(paths.docsSrc('exampleMenus'))),
)

task('build:docs:example-sources', () =>
  src(examplesSrc, { since: lastRun('build:docs:example-sources') })
    .pipe(remember('example-sources'))
    .pipe(gulpExampleSources())
    .pipe(dest(paths.docsSrc())),
)

task(
  'build:docs:json',
  parallel(
    'build:docs:docgen',
    'build:docs:component-menu',
    'build:docs:example-menu',
    'build:docs:example-sources',
  ),
)

task('build:docs:toc', (cb) => {
  sh(`doctoc ${paths.base('.github/CONTRIBUTING.md')} --github --maxlevel 4`, cb)
})

task(
  'build:docs',
  series(
    parallel('build:docs:toc', series('clean:docs', 'build:docs:json')),
    'build:docs:static:build',
  ),
)

// ----------------------------------------
// Deploy
// ----------------------------------------

task('deploy:docs', (cb) => {
  const relativePath = path.relative(process.cwd(), paths.docsDist())
  sh(`gh-pages -d ${relativePath} -m "deploy docs [ci skip]"`, cb)
})

// ----------------------------------------
// Watch
// ----------------------------------------

task('watch:docs', () => {
  // rebuild component info
  watch(componentsSrc, series('build:docs:docgen', 'build:docs:static:reload'))
    .on('change', handleWatchChange)
    .on('unlink', handleWatchUnlink('component-info'))

  // rebuild example menus
  watch(examplesSectionsSrc, series('build:docs:example-menu', 'build:docs:static:reload'))
    .on('change', handleWatchChange)
    .on('unlink', handleWatchUnlink('example-menu'))

  // rebuild example sources
  watch(examplesSrc, series('build:docs:example-sources', 'build:docs:static:reload'))
    .on('change', handleWatchChange)
    .on('unlink', handleWatchUnlink('example-sources'))
})

// ----------------------------------------
// Start
// ----------------------------------------

task('start:docs', series('clean:docs', 'build:docs:json', 'build:docs:static:start', 'watch:docs'))
