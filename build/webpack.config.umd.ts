import webpack from 'webpack'

import config from '../config'
import pkg from '../package.json'
import webpackConfig from '../webpack.config'

const { paths } = config

const webpackUMDConfig = {
  target: 'web',
  devtool: false,
  entry: {
    [pkg.name]: paths.src('umd.ts'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  output: {
    filename: 'stardust-ui-react.min.js',
    libraryTarget: 'umd',
    library: 'Stardust',
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
  resolve: webpackConfig.resolve,
  module: {
    noParse: webpackConfig.module.noParse,
    rules: webpackConfig.module.rules,
  },
}

export default webpackUMDConfig
