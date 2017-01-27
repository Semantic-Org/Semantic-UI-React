const fs = require('fs')
const _ = require('lodash/fp')
const path = require('path')
const prettyBytes = require('pretty-bytes')
const webpack = require('webpack')
const { argv } = require('yargs')

const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

const config = require('./config')
const pkg = require('./package.json')

const { paths } = config
const { __DEV__, __PROD__, __TEST__ } = config.compiler_globals

const debug = require('debug')('suir:get-webpack-config')
const stringify = value => JSON.stringify(value, null, 2)

/**
 * Get a webpack config for building the library.
 * @param {object} options
 * @param {string} options.buildTarget
 * @param {string} options.outputPath
 * @return {object}
 */
const getWebpackConfig = (options) => { // eslint-disable-line complexity
  const {
    buildTarget,    // app, library
    outputPath,     // abs path
  } = options

  const minify = buildTarget === 'library' || __PROD__

  debug('options =', stringify(options))
  debug('minify =', minify)

  // ============================================================
  // Validation
  // ============================================================

  if (!_.includes(buildTarget, ['app', 'library'])) {
    throw new Error('buildTarget must be `app` or `library`: ' + buildTarget)
  }

  if (typeof outputPath !== 'string') throw new Error('outputPath must be a string: ' + typeof outputPath)

  // ============================================================
  // Base
  // ============================================================

  debug('creating base')

  const webpackConfig = {
    target: 'web',
    devtool: false,
    entry: {},
    output: {
      path: outputPath,
    },
    resolve: {
      alias: {},
    },
    module: {
      noParse: [/\.json$/],
      loaders: [],
    },
    externals: {},
    plugins: [],
    stats: config.compiler_stats,
  }

  debug('base config', webpackConfig)

  // ============================================================
  // Entry & Output
  // ============================================================

  // Docs
  // ----------------------------------------
  if (buildTarget === 'app') {
    debug('creating app entry/output')
    const webpackHotPath = `${config.compiler_public_path}__webpack_hmr`

    const webpackHotMiddlewareEntry = `webpack-hot-middleware/client?${_.map({
      path: webpackHotPath,   // The path which the middleware is serving the event stream on
      timeout: 2000,          // The time to wait after a disconnection before attempting to reconnect
      overlay: true,          // Set to false to disable the DOM-based client-side overlay.
      reload: true,           // Set to true to auto-reload the page when webpack gets stuck.
      noInfo: false,          // Set to true to disable informational console logging.
      quiet: false,           // Set to true to disable all console logging.
    }, (val, key) => `&${key}=${val}`).join('')}`

    const appEntry = paths.docsSrc('index.js')

    webpackConfig.entry = Object.assign({}, webpackConfig.entry, {
      app: __DEV__ ? [webpackHotMiddlewareEntry, appEntry] : appEntry,
      vendor: __DEV__ ? [webpackHotMiddlewareEntry, ...config.compiler_vendor] : config.compiler_vendor,
    })

    webpackConfig.output = Object.assign({}, webpackConfig.output, {
      filename: `[name].[${config.compiler_hash_type}].js`,
      path: paths.docsDist(),
      publicPath: config.compiler_public_path,
      pathinfo: __DEV__,
    })
  }

  // Library
  // ----------------------------------------
  if (buildTarget === 'library') {
    debug('creating library entry/output')
    // create an entry key/value pair for every component
    // {
    //   Button: '/abs-path-to/elements/Button',
    //   ...
    // }
    const componentEntries = ['addons', 'collections', 'elements', 'modules', 'views'].reduce((acc, dir) => {
      fs.readdirSync(paths.src(dir)).forEach(relPath => {
        const absPath = paths.src(dir, relPath)
        // Wrap the path in an array to workaround:
        // Error: a dependency to an entry point is not allowed
        // https://github.com/webpack/webpack/issues/300
        acc[_.kebabCase(path.basename(absPath))] = [absPath]
      })

      return acc
    }, {})

    webpackConfig.entry = Object.assign({}, webpackConfig.entry, {
      [pkg.name]: paths.src('index.js'),
    }, componentEntries)

    webpackConfig.output = Object.assign({}, webpackConfig.output, {
      filename: '[name].min.js',
      libraryTarget: 'umd',
      library: 'semanticUIReact',
      publicPath: '/',
    })
  }

  debug(buildTarget, 'entry =', stringify(webpackConfig.entry))
  debug(buildTarget, 'output =', stringify(webpackConfig.output))

  // ============================================================
  // Resolve
  // ============================================================

  debug('creating resolve')

  if (buildTarget === 'app') {
    webpackConfig.resolve = Object.assign({}, webpackConfig.resolve, {
      root: paths.base(),
      alias: Object.assign({}, webpackConfig.resolve.alias, {
        'semantic-ui-react': paths.src('index.js'),
      }),
    })
  }

  debug('resolve =', stringify(webpackConfig.resolve))

  // ============================================================
  // Loaders
  // ============================================================

  debug('creating loaders')

  webpackConfig.module.loaders = [
    ...webpackConfig.module.loaders,
    // Babel
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: [
          path.resolve(__dirname, 'build/preset-es2015'),
          'react',
          'stage-1',
        ],
        plugins: [
          'lodash',
          'transform-react-handled-props',
          ['transform-react-remove-prop-types', {
            mode: minify ? 'remove' : 'wrap',
          }],
          ['transform-runtime', {
            polyfill: false,
            regenerator: false,
          }],
        ],
      },
    },

    // JSON
    {
      test: /\.(json|.*rc)$/,
      loader: 'json',
    },
  ]

  debug('loaders =', stringify(webpackConfig.module.loaders))

  // ============================================================
  // Externals
  // ============================================================

  debug('creating externals')

  webpackConfig.externals = Object.assign({}, webpackConfig.externals, {
    react: 'React',
    'react-dom': 'ReactDOM',
  })

  debug('externals =', stringify(webpackConfig.externals))

  // ============================================================
  // Plugins
  // ============================================================

  // Docs
  // ----------------------------------------
  if (buildTarget === 'app') {
    debug('creating app plugins')

    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new webpack.DefinePlugin(config.compiler_globals),
      new webpack.DllReferencePlugin({
        context: paths.base('node_modules'),
        manifest: require(paths.base('dll/vendor-manifest.json')),
      }),
      new HtmlWebpackPlugin({
        template: paths.docsSrc('index.ejs'),
        hash: false,
        filename: 'index.html',
        inject: 'body',
        minify: {
          collapseWhitespace: true,
        },
        versions: {
          babel: require('babel-standalone/package.json').version,
          sui: require('semantic-ui-css/package.json').version,
          suir: require('./package.json').version,
          faker: require('faker/package.json').version,
          lodash: require('lodash/package.json').version,
          react: require('react/package.json').version,
          reactDOM: require('react-dom/package.json').version,
          jsBeautify: require('js-beautify/package.json').version,
        },
      }),
    ]

    if (__DEV__) {
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new WriteFilePlugin({
          // always write stats files even when serving from memory in webpack-dev-server
          test: /stats-.*\.md$/,
          log: false,
        }),
      ]
    }

    if (!__TEST__) {
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        // Don't split bundles during testing, since we only want to import one bundle
        new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] }),
      ]
    }
  }

  // Library
  // ----------------------------------------
  if (buildTarget === 'library') {
    debug('creating library plugins')

    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new webpack.optimize.CommonsChunkPlugin(`${pkg.name}-core.min.js`),
      new UnminifiedWebpackPlugin(),
    ]
  }

  // Other
  // ----------------------------------------
  debug('creating other plugins')
  if (minify) {
    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
        },
        compress: {
          unused: false,
          dead_code: false,
          warnings: false,
        },
      }),
    ]
  }

  if (!__TEST__) {
    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new CompressionPlugin(),
      new StatsWriterPlugin({
        // filename accepts paths relative to the output directory only
        filename: path.join(path.relative(outputPath, paths.base()), `stats-${buildTarget}.md`),
        fields: null,
        transform(data) {
          //
          // Markdown helpers
          //

          const code = val => `\`${val}\``
          const size = bytes => Number.isFinite(bytes) ? code(prettyBytes(bytes)) : '--'
          const col = (val, width = 10) => _.padEnd(width, val)
          const row = (head, ...tail) => [col(head, 25), ..._.map(t => col(t), tail)].join(' | ')

          const thead = (...args) => [
            row(...args),
            row(..._.times(() => ':---', args.length)),
          ].join('\n')

          const sizesTableHeader = name => thead(name, 'js', 'js.gz', ..._.compact([
            minify && 'min.js',
            minify && 'min.js.gz',
          ]))

          const sizesTableRow = (name, js, jsGz, minJs, minJsGz) => row(name, size(js), size(jsGz), ..._.compact([
            minify && size(minJs),
            minify && size(minJsGz),
          ]))

          //
          // Parse Webpack stats data
          // Build-up table markdown
          //

          // fs.writeFileSync(__dirname + '/stats.js', 'const stats = ' + JSON.stringify(data, null, 2))
          const { assets } = data

          let assetCount = 0
          let assetsSize = 0
          let assetsGzSize = 0
          let assetsMinSize = 0
          let assetsMinGzSize = 0

          let bundleCount = 0
          let bundlesSize = 0
          let bundlesGzSize = 0
          let bundlesMinSize = 0
          let bundlesMinGzSize = 0

          let bundlesTableMD = sizesTableHeader('Asset')
          let assetsTableMD = sizesTableHeader('Asset')

          _.flow(
            _.filter(({ name }) => !/(\.min|\.gz|\.html|hot-update)/.test(name)),
            _.sortBy('name'),
            _.forEach(asset => {  // eslint-disable-line complexity
              const basename = path.basename(asset.name, path.extname(asset.name))

              // find the related assets for this one
              const gzAsset = _.find({ name: `${basename}.js.gz` }, assets) || {}
              const minAsset = minify ? _.find({ name: `${basename}.min.js` }, assets) : {}
              const minGzAsset = minify ? _.find({ name: `${basename}.min.js.gz` }, assets) : {}

              const hashFreeName = asset.name.replace(/\..*/, '')
              const line = sizesTableRow(hashFreeName, asset.size, gzAsset.size, minAsset.size, minGzAsset.size)

              // increment counter and append table rows
              // separate bundles and components into different tables
              if (_.includes(pkg.name, asset.name)) {
                bundleCount += 1
                bundlesTableMD += '\n' + line

                bundlesSize += asset.size
                if (gzAsset) bundlesGzSize += gzAsset.size
                if (minAsset) bundlesMinSize += minAsset.size
                if (minGzAsset) bundlesMinGzSize += minGzAsset.size
              } else {
                assetCount += 1
                assetsTableMD += '\n' + line

                assetsSize += asset.size
                if (gzAsset) assetsGzSize += gzAsset.size
                if (minAsset) assetsMinSize += minAsset.size
                if (minGzAsset) assetsMinGzSize += minGzAsset.size
              }
            })
          )(assets)

          //
          // Write Markdown File
          //

          const statsMD = [
            `# ${_.startCase(buildTarget)} Stats`,
            '',
          ]

          if (bundleCount > 0) {
            statsMD.push(
              '## Bundles',
              '',
              'The `semantic-ui-react` bundle includes all components.',
              'You must **load `semantic-ui-react-core` first**.',
              '',
              sizesTableHeader('Total'),
              sizesTableRow(code(bundleCount), bundlesSize, bundlesGzSize, bundlesMinSize, bundlesMinGzSize),
              '',
              bundlesTableMD,
              ''
            )
          }

          if (assetCount > 0) {
            if (buildTarget === 'library') {
              statsMD.push(
                '## Components',
                '',
                'These can be used as standalone components.',
                'You must **load `semantic-ui-react-core` first**.',
                ''
              )
            } else {
              statsMD.push(
                '## Assets',
                ''
              )
            }

            statsMD.push(
              sizesTableHeader('Total'),
              sizesTableRow(code(assetCount), assetsSize, assetsGzSize, assetsMinSize, assetsMinGzSize),
              '',
              assetsTableMD
            )
          }

          // ohh, nice :)
          return statsMD.join('\n')
        },
      }),
    ]
  }

  debug('plugins =', webpackConfig.plugins)

  // ============================================================
  // Local Modules
  // ============================================================

  // For faster builds in dev, rely on prebuilt libraries
  // Local modules can still be enabled (ie for offline development)
  // in TEST we need local modules because karma uses a different index.html (no CDNs)
  if (__TEST__ || argv.localModules) {
    webpackConfig.module.loaders = [
      ...webpackConfig.module.loaders,
      {
        //
        // SASS
        //
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
      }, {
        //
        // Files
        //
        test: /\.(eot|ttf|woff|woff2|svg|png)$/,
        loader: 'file',
      },
    ]
  } else {
    // these are browser ready modules or aliased to empty
    // do not parse their source for faster builds
    webpackConfig.module.noParse = [
      ...webpackConfig.module.noParse,
      /faker/,
    ]

    // alias imports to empty
    webpackConfig.resolve.alias = Object.assign({}, webpackConfig.resolve.alias, {
      'semantic-ui-css/semantic.css': 'empty',
    })

    // find them on the window
    webpackConfig.externals = Object.assign({}, webpackConfig.externals, {
      faker: 'faker',
      'anchor-js': 'AnchorJS',
      'babel-standalone': 'Babel',
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-dom/server': 'ReactDOMServer',
    })
  }

  debug('COMPLETE')

  return webpackConfig
}

module.exports = getWebpackConfig
