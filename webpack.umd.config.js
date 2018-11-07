const webpack = require('webpack')

const config = require('./config')
const pkg = require('./package.json')
const webpackConfig = require('./webpack.config.babel')

const { paths } = config

const webpackUMDConfig = {
  target: 'web',
  devtool: false,
  entry: {
    [pkg.name]: paths.src('umd.js'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  output: {
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'semanticUIReact',
    path: paths.dist('umd'),
    publicPath: '/',
    pathinfo: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
      output: { comments: false },
    }),
  ],
  module: {
    noParse: webpackConfig.module.noParse,
    rules: webpackConfig.module.rules,
  },
}

module.exports = webpackUMDConfig
