import webpack from 'webpack'
import config from './config'

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
  filename: 'dll.[name].js',
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

export default webpackDllConfig
