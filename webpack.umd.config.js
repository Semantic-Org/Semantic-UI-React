import webpack from 'webpack'

import config from './config'
import pkg from './package.json'
import webpackConfig from './webpack.config.babel'

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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
    }),
  ],
  module: {
    noParse: webpackConfig.module.noParse,
    rules: webpackConfig.module.rules,
  },
}

export default webpackUMDConfig
