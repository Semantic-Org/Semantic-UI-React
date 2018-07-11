import HtmlWebpackPlugin from 'html-webpack-plugin'
import _ from 'lodash'
import webpack from 'webpack'
import { CheckerPlugin as AsyncTypeScriptChecker } from 'awesome-typescript-loader'

import config from './config'

const { paths } = config
const { __DEV__, __PROD__ } = config.compiler_globals

const webpackConfig: any = {
  name: 'client',
  target: 'web',
  entry: {
    app: paths.docsSrc('index'),
    vendor: config.compiler_vendor,
  },
  output: {
    filename: `[name].[${config.compiler_hash_type}].js`,
    path: config.compiler_output_path,
    pathinfo: true,
    publicPath: config.compiler_public_path,
  },
  devtool: config.compiler_devtool,
  externals: {
    'anchor-js': 'AnchorJS',
    'prop-types': 'PropTypes',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dom/server': 'ReactDOMServer',
  },
  node: {
    fs: 'empty',
    module: 'empty',
  },
  module: {
    noParse: [/\.json$/, /anchor-js/],
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          useCache: true,
          configFileName: paths.base('build/tsconfig.docs.json'),
          errorsAsWarnings: __DEV__,
        },
      },
    ],
  },
  plugins: [
    new AsyncTypeScriptChecker(),
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
        jsBeautify: require('js-beautify/package.json').version,
        lodash: require('lodash/package.json').version,
        propTypes: require('prop-types/package.json').version,
        react: require('react/package.json').version,
        reactDOM: require('react-dom/package.json').version,
        sui: require('semantic-ui-css/package.json').version,
        suir: require('./package.json').version,
      },
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      stardust: paths.src(),
      src: paths.src(),
      docs: paths.base('docs'),
      'package.json': paths.base('package.json'),
    },
  },
}

// ------------------------------------
// Environment Configuration
// ------------------------------------
if (__DEV__) {
  const webpackHotPath = `${config.compiler_public_path}__webpack_hmr`
  const webpackHotMiddlewareEntry = `webpack-hot-middleware/client?${_.map(
    {
      path: webpackHotPath, // The path which the middleware is serving the event stream on
      timeout: 2000, // The time to wait after a disconnection before attempting to reconnect
      overlay: true, // Set to false to disable the DOM-based client-side overlay.
      reload: true, // Set to true to auto-reload the page when webpack gets stuck.
      noInfo: false, // Set to true to disable informational console logging.
      quiet: false, // Set to true to disable all console logging.
    },
    (val, key) => `&${key}=${val}`,
  ).join('')}`

  webpackConfig.entry.app = [webpackHotMiddlewareEntry].concat(webpackConfig.entry.app)
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

export default webpackConfig
