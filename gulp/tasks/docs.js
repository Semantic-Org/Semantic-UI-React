import { task, src, dest, lastRun, parallel, series, watch } from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import path from 'path'
import { build, start } from 'react-static/node'
import rimraf from 'rimraf'

import sh from '../sh'
import config from '../../config'
import gulpComponentMenu from '../plugins/gulp-component-menu'
import gulpExampleMenu from '../plugins/gulp-example-menu'
import gulpExampleSources from '../plugins/gulp-example-source'
import gulpReactDocgen from '../plugins/gulp-react-docgen'

const { paths } = config
const g = loadPlugins()
const { log } = g.util

const handleWatchChange = e => log(`File ${e.path} was ${e.type}, running tasks...`)

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

task('build:docs:static:start', (cb) => {
  start()
  cb()
})

// ----------------------------------------
// Build
// ----------------------------------------

const componentsSrc = [
  `${paths.src()}/addons/*/*.js`,
  `${paths.src()}/behaviors/*/*.js`,
  `${paths.src()}/elements/*/*.js`,
  `${paths.src()}/collections/*/*.js`,
  `${paths.src()}/modules/*/*.js`,
  `${paths.src()}/views/*/*.js`,
  '!**/index.js',
]

const examplesSectionsSrc = `${paths.docsSrc()}/examples/*/*/*/index.js`
const examplesSrc = `${paths.docsSrc()}/examples/*/*/*/!(*index).js`

task('build:docs:cname', (cb) => {
  sh(`echo react.semantic-ui.com > ${paths.docsDist('CNAME')}`, cb)
})

task('build:changelog', (cb) => {
  const cmd = [
    'github_changelog_generator',
    '--no-issues',
    '--no-unreleased',
    '--release-branch master',
    '--since-tag $(git describe --abbrev=0 --tags $(git rev-parse HEAD~300))',
  ].join(' ')

  sh(cmd, cb)
})

task('build:docs:docgen', () =>
  src(componentsSrc, { since: lastRun('build:docs:docgen') })
    .pipe(gulpReactDocgen())
    .pipe(dest(paths.docsSrc('componentInfo'))),
)

task('build:docs:component-menu', () =>
  src(componentsSrc, { since: lastRun('build:docs:component-menu') })
    .pipe(gulpComponentMenu())
    .pipe(dest(paths.docsSrc())),
)

task('build:docs:example-menu', () =>
  src(examplesSectionsSrc, { since: lastRun('build:docs:example-menu') })
    .pipe(gulpExampleMenu())
    .pipe(dest(paths.docsSrc('exampleMenus'))),
)

task('build:docs:example-sources', () =>
  src(examplesSrc, { since: lastRun('build:docs:example-sources') })
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

task('build:docs:images', () =>
  src(`${paths.docsPublic()}/**/*.{png,jpg,gif}`).pipe(dest(paths.docsDist())),
)

task('build:docs:toc', (cb) => {
  sh(`doctoc ${paths.base('.github/CONTRIBUTING.md')} --github --maxlevel 4`, cb)
})

task(
  'build:docs',
  parallel(
    'build:docs:toc',
    series('clean:docs', parallel('build:docs:json', 'build:docs:images')),
  ),
)

// ----------------------------------------
// Deploy
// ----------------------------------------

task('deploy:changelog', (cb) => {
  const cmd = [
    'git add CHANGELOG.md',
    "git commit -m 'docs(changelog): update changelog [ci skip]'",
    'git push',
  ].join(' && ')

  sh(cmd, cb)
})

task('deploy:docs', (cb) => {
  const relativePath = path.relative(process.cwd(), paths.docsDist())
  sh(`gh-pages -d ${relativePath} -m "deploy docs [ci skip]"`, cb)
})

// ----------------------------------------
// Watch
// ----------------------------------------

task('watch:docs', (cb) => {
  // rebuild component info
  watch(componentsSrc, series('build:docs:docgen')).on('change', handleWatchChange)

  // rebuild example menus
  watch(examplesSectionsSrc, series('build:docs:example-menu')).on('change', handleWatchChange)

  // rebuild images
  watch(`${config.paths.docsPublic()}/**/*.{png,jpg,gif}`, series('build:docs:images')).on(
    'change',
    handleWatchChange,
  )
  cb()
})

// ----------------------------------------
// Default
// ----------------------------------------

task('docs', series('build:docs', 'build:docs:static:start', 'watch:docs'))
