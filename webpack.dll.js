const webpack = require('webpack')
const config = require('./config')

const { paths } = config
const webpackDllConfig = { module: {} }

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
  path: paths.dll(),
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

module.exports = webpackDllConfig
