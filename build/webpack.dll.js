import webpack from 'webpack'

import config from '../config'
const webpackDllConfig = { module: {} }

const { paths } = config

// ------------------------------------
// Entry Points
// ------------------------------------
webpackDllConfig.entry = {
  vendor: config.compiler_vendor,
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackDllConfig.output = {
  ...webpackDllConfig.output,
  path: 'dll',
  filename: `dll.[name].[${config.compiler_hash_type}].js`,
  library: '[name]_[hash]',
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackDllConfig.plugins = [
  new webpack.DllPlugin({
    path: paths.base('dll', '[name]-manifest.json'),
    name: '[name]_[hash]',
  }),
]

// ------------------------------------
// Pre-Loaders
// ------------------------------------
webpackDllConfig.module.preLoaders = []

// ------------------------------------
// Loaders
// ------------------------------------
webpackDllConfig.module.loaders = [{
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

export default webpackDllConfig
