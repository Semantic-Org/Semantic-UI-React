import HtmlWebpackPlugin from 'html-webpack-plugin'
import _ from 'lodash'
import webpack from 'webpack'

import config from './config'

const { paths } = config
const { __DEV__, __TEST__, __PROD__ } = config.compiler_globals

const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  externals: {},
  module: {
    noParse: [],
    rules: [],
  },
  plugins: [],
  resolve: {
    modules: [
      paths.base(),
      'node_modules',
    ],
    alias: {
      'semantic-ui-react': paths.src('index.js'),
    },
  },
}

// ------------------------------------
// Entry Points
// ------------------------------------

const webpackHotPath = `${config.compiler_public_path}__webpack_hmr`
const webpackHotMiddlewareEntry = `webpack-hot-middleware/client?${_.map({
  path: webpackHotPath,   // The path which the middleware is serving the event stream on
  timeout: 2000,          // The time to wait after a disconnection before attempting to reconnect
  overlay: true,          // Set to false to disable the DOM-based client-side overlay.
  reload: true,           // Set to true to auto-reload the page when webpack gets stuck.
  noInfo: false,          // Set to true to disable informational console logging.
  quiet: false,           // Set to true to disable all console logging.
}, (val, key) => `&${key}=${val}`).join('')}`

const APP_ENTRY = paths.docsSrc('index.js')

webpackConfig.entry = __DEV__ ? {
  app: [
    'react-hot-loader/patch',
    webpackHotMiddlewareEntry,
    APP_ENTRY,
  ],
  vendor: [
    webpackHotMiddlewareEntry,
    ...config.compiler_vendor,
  ],
} : {
  app: APP_ENTRY,
  vendor: config.compiler_vendor,
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  ...webpackConfig.output,
  filename: `[name].[${config.compiler_hash_type}].js`,
  path: config.compiler_output_path,
  pathinfo: true,
  publicPath: config.compiler_public_path,
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [...webpackConfig.plugins,
  new webpack.DefinePlugin(config.compiler_globals),
  new webpack.DllReferencePlugin({
    context: paths.base('node_modules'),
    manifest: require(paths.base('dll/vendor-manifest.json')),
  }),
  new HtmlWebpackPlugin({
    template: paths.docsSrc('index.ejs'),
    filename: 'index.html',
    hash: false,
    inject: 'body',
    minify: {
      collapseWhitespace: true,
    },
    versions: {
      babel: require('babel-standalone/package.json').version,
      faker: require('faker/package.json').version,
      jsBeautify: require('js-beautify/package.json').version,
      lodash: require('lodash/package.json').version,
      propTypes: require('prop-types/package.json').version,
      react: require('react/package.json').version,
      reactDOM: require('react-dom/package.json').version,
      sui: require('semantic-ui-css/package.json').version,
      suir: require('./package.json').version,
    },
  }),
]

if (!__TEST__) {
  webpackConfig.plugins.push(
    // Don't split bundles during testing as karma can only import one bundle
    // https://github.com/webpack-contrib/karma-webpack/issues/22
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
    }),
  )
}

if (__DEV__) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  )
}

if (__PROD__) {
  webpackConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    }),
  )
}

// ------------------------------------
// Externals
// ------------------------------------
if (!__TEST__) {
  // find modules loaded via CDN on the window
  webpackConfig.externals = {
    ...webpackConfig.externals,
    'anchor-js': 'AnchorJS',
    'babel-standalone': 'Babel',
    faker: 'faker',
    'prop-types': 'PropTypes',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dom/server': 'ReactDOMServer',
  }
}

// ------------------------------------
// No Parse
// ------------------------------------
webpackConfig.module.noParse = [...webpackConfig.module.noParse,
  /\.json$/,
  /anchor-js/,
  /babel-standalone/,
  /typescript\/lib/,
]

if (!__TEST__) {
  webpackConfig.module.noParse = [...webpackConfig.module.noParse,
    // Do not parse browser ready modules loaded via CDN (faster builds)
    /faker/,
  ]
}

// ------------------------------------
// Rules
// ------------------------------------
const jsLoaders = [{
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
  },
}]
if (__DEV__) jsLoaders.unshift('react-hot-loader/webpack')

webpackConfig.module.rules = [...webpackConfig.module.rules, {
  //
  // Babel
  //
  test: /\.js$/,
  exclude: /node_modules/,
  use: jsLoaders,
}]

export default webpackConfig
