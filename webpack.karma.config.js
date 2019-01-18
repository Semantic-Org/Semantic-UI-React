const webpack = require('webpack')
const config = require('./config')

const { paths } = config

const webpackConfig = {
  mode: 'development',
  externals: {
    '@babel/standalone': 'Babel',
    lodash: '_',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dom/server': 'ReactDOMServer',
  },
  devtool: config.compiler_devtool,
  module: {
    noParse: [/typescript\/lib/],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [new webpack.DefinePlugin(config.compiler_globals)],
  resolve: {
    modules: [paths.base(), 'node_modules'],
    alias: {
      'semantic-ui-react': paths.src('index.js'),
    },
  },
}

module.exports = webpackConfig
