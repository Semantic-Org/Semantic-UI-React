import config from '../config'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import _ from 'lodash'

const { paths } = config
const { __BASE__, __DEV__, __TEST__ } = config.compiler_globals

const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    root: paths.base(),
    alias: {
      stardust: paths.src('index.js'),
    },
  },
  module: {},
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

const APP_ENTRY = [
  paths.docsSrc('index.js'),
]

webpackConfig.entry = __DEV__ ? {
  app: [
    webpackHotMiddlewareEntry,
    ...APP_ENTRY,
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
  filename: `[name].[${config.compiler_hash_type}].js`,
  path: config.compiler_output_path,
  publicPath: config.compiler_public_path,
  pathinfo: true,
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.compiler_globals),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
  }),
  new HtmlWebpackPlugin({
    template: paths.docsSrc('index.ejs'),
    baseHref: __BASE__,
    hash: false,
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true,
    },
  }),
]

if (__DEV__) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  )
} else if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    })
  )
}

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
  webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor'],
  }))
}

// ------------------------------------
// No Parse
// ------------------------------------
webpackConfig.module.noParse = [
  /autoit.js/,    // highlight.js dep throws if parsed
]

// ------------------------------------
// Pre-Loaders
// ------------------------------------
webpackConfig.module.preLoaders = []

// ------------------------------------
// Loaders
// ------------------------------------
webpackConfig.module.loaders = [{
  //
  // Babel
  //
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    cacheDirectory: true,
  },
}, {
  //
  // JSON
  //
  test: /\.json$/,
  loader: 'json',
}, {
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
}]

export default webpackConfig
