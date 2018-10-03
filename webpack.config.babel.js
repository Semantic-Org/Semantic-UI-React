const webpack = require('webpack')
const config = require('./config')

const { paths } = config
const { __TEST__, __PROD__ } = config.compiler_globals

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
    modules: [paths.base(), 'node_modules'],
    alias: {
      'semantic-ui-react': paths.src('index.js'),
    },
  },
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
webpackConfig.plugins = [
  ...webpackConfig.plugins,
  new webpack.DefinePlugin(config.compiler_globals),
  new webpack.DllReferencePlugin({
    context: paths.base('node_modules'),
    manifest: require(paths.base('dll/vendor-manifest.json')),
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
    '@babel/standalone': 'Babel',
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
webpackConfig.module.noParse = [
  ...webpackConfig.module.noParse,
  /\.json$/,
  /anchor-js/,
  /@babel\/standalone/,
  /typescript\/lib/,
]

if (!__TEST__) {
  webpackConfig.module.noParse = [
    ...webpackConfig.module.noParse,
    // Do not parse browser ready modules loaded via CDN (faster builds)
    /faker/,
  ]
}

// ------------------------------------
// Rules
// ------------------------------------
webpackConfig.module.rules = [
  ...webpackConfig.module.rules,
  {
    //
    // Babel
    //
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: __TEST__,
      },
    },
  },
]

module.exports = webpackConfig
