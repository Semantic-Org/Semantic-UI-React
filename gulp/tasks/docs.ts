import historyApiFallback from 'connect-history-api-fallback'
import express from 'express'
import { task, src, dest, lastRun, parallel, series, watch } from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import path from 'path'
import rimraf from 'rimraf'
import through from 'through2'
import webpack from 'webpack'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'

import sh from '../sh'
import config from '../../config'
import gulpComponentMenu from '../plugins/gulp-component-menu'
import gulpExampleMenu from '../plugins/gulp-example-menu'
import gulpReactDocgen from '../plugins/gulp-react-docgen'

const { paths } = config
const g = loadPlugins()
const { colors, log, PluginError } = g.util

const handleWatchChange = e => log(`File ${e.path} was ${e.type}, running tasks...`)

// ----------------------------------------
// Clean
// ----------------------------------------

task('clean:docs:component-info', cb => {
  rimraf(paths.docsSrc('componentInfo'), cb)
})

task('clean:docs:component-menu', cb => {
  rimraf(paths.docsSrc('componentMenu.json'), cb)
})

task('clean:docs:dist', cb => {
  rimraf(paths.docsDist(), cb)
})

task('clean:docs:example-menus', cb => {
  rimraf(paths.docsSrc('exampleMenus'), cb)
})

task(
  'clean:docs',
  parallel(
    'clean:docs:component-info',
    'clean:docs:component-menu',
    'clean:docs:dist',
    'clean:docs:example-menus',
  ),
)

// ----------------------------------------s
// Build
// ----------------------------------------

const componentsSrc = [`${config.paths.src()}/components/*/*.tsx`]

const examplesSrc = `${paths.docsSrc()}/examples/*/*/*/index.tsx`

task('build:docs:cname', cb => {
  sh(`echo react.semantic-ui.com > ${paths.docsDist('CNAME')}`, cb)
})

task('build:changelog', cb => {
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
  src(examplesSrc, { since: lastRun('build:docs:example-menu') })
    .pipe(gulpExampleMenu())
    .pipe(dest(paths.docsSrc('exampleMenus'))),
)

task(
  'build:docs:json',
  parallel('build:docs:docgen', 'build:docs:component-menu', 'build:docs:example-menu'),
)

task('build:docs:html', () => src(paths.docsSrc('404.html')).pipe(dest(paths.docsDist())))

task('build:docs:images', () =>
  src(`${paths.docsSrc()}/**/*.{png,jpg,gif}`).pipe(dest(paths.docsDist())),
)

task('build:docs:toc', () =>
  src(['.github/CONTRIBUTING.md', 'README.md', 'specifications/*.md']).pipe(
    through.obj((file, enc, done) => {
      sh(`doctoc ${file.path} --github --maxlevel 4 && git add ${file.path}`, done)
    }),
  ),
)

task('build:docs:webpack', cb => {
  const webpackConfig = require('../../webpack.config').default
  const compiler = webpack(webpackConfig)

  compiler.run((err, stats) => {
    const { errors, warnings } = stats.toJson()

    log(stats.toString(config.compiler_stats))

    if (err) {
      log('Webpack compiler encountered a fatal error.')
      throw new PluginError('webpack', err.toString())
    }
    if (errors.length > 0) {
      log('Webpack compiler encountered errors.')
      throw new PluginError('webpack', errors.toString())
    }
    if (warnings.length > 0 && config.compiler_fail_on_warning) {
      throw new PluginError('webpack', warnings.toString())
    }

    cb(err)
  })
})

task(
  'build:docs',
  series(
    parallel(
      'build:docs:toc',
      series('clean:docs', parallel('build:docs:json', 'build:docs:html', 'build:docs:images')),
    ),
    'build:docs:webpack',
  ),
)

// ----------------------------------------
// Deploy
// ----------------------------------------

task('deploy:changelog', cb => {
  const cmd = [
    'git add CHANGELOG.md',
    "git commit -m 'docs(changelog): update changelog [ci skip]'",
    'git push',
  ].join(' && ')

  sh(cmd, cb)
})

task('deploy:docs', cb => {
  const relativePath = path.relative(process.cwd(), paths.docsDist())
  sh(`gh-pages -d ${relativePath} -m "deploy docs [ci skip]"`, cb)
})

// ----------------------------------------
// Serve
// ----------------------------------------

task('serve:docs', cb => {
  const app = express()
  const webpackConfig = require('../../webpack.config').default
  const compiler = webpack(webpackConfig)

  app
    .use(
      historyApiFallback({
        verbose: false,
      }),
    )

    .use(
      WebpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        contentBase: paths.docsSrc(),
        hot: true,
        quiet: false,
        noInfo: true, // must be quiet for hot middleware to show overlay
        lazy: false,
        stats: config.compiler_stats,
      }),
    )

    .use(WebpackHotMiddleware(compiler))

    .use(express.static(paths.docsDist()))

    .listen(config.server_port, config.server_host, () => {
      log(colors.yellow('Server running at http://%s:%d'), config.server_host, config.server_port)
      cb()
    })
})

// ----------------------------------------
// Watch
// ----------------------------------------

task('watch:docs', cb => {
  // rebuild component info
  watch(componentsSrc, series('build:docs:docgen')).on('change', handleWatchChange)

  // rebuild example menus
  watch(examplesSrc, series('build:docs:example-menu')).on('change', handleWatchChange)

  // rebuild images
  watch(`${config.paths.src()}/**/*.{png,jpg,gif}`, series('build:docs:images')).on(
    'change',
    handleWatchChange,
  )
  cb()
})

// ----------------------------------------
// Default
// ----------------------------------------

task('docs', series('build:docs', 'serve:docs', 'watch:docs'))
