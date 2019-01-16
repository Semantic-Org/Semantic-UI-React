const webpack = require('webpack')
const config = require('./config')

const { paths } = config

const webpackConfig = {
  name: 'client',
  mode: 'development',
  target: 'web',
  devtool: config.compiler_devtool,
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
]

// ------------------------------------
// Externals
// ------------------------------------
webpackConfig.externals = {
  '@babel/standalone': 'Babel',
  lodash: '_',
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-dom/server': 'ReactDOMServer',
}

// ------------------------------------
// No Parse
// ------------------------------------
webpackConfig.module.noParse = [...webpackConfig.module.noParse, /typescript\/lib/]

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
        cacheDirectory: true,
      },
    },
  },
]

module.exports = webpackConfig
