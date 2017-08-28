import path from 'path'

// ------------------------------------
// Environment vars
// ------------------------------------
const env = process.env.NODE_ENV || 'development'
const __DEV__ = env === 'development'
const __TEST__ = env === 'test'
const __PROD__ = env === 'production'

const envConfig = {
  env,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: __dirname,
  dir_src: 'src',
  dir_dist: 'dist',
  dir_dll: 'dll',
  dir_docs_dist: 'docs/build',
  dir_docs_src: 'docs/app',
  dir_umd_dist: 'dist/umd',
}

// ------------------------------------
// Paths
// ------------------------------------
const base = (...args) => path.resolve(...[envConfig.path_base, ...args])

const paths = {
  base,
  src: base.bind(null, envConfig.dir_src),
  dist: base.bind(null, envConfig.dir_dist),
  dll: base.bind(null, envConfig.dir_dll),
  docsDist: base.bind(null, envConfig.dir_docs_dist),
  docsSrc: base.bind(null, envConfig.dir_docs_src),
  umdDist: base.bind(null, envConfig.dir_umd_dist),
}

const config = {
  ...envConfig,
  paths,

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host: 'localhost',
  server_port: process.env.PORT || 8080,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_devtool: (__DEV__ || __TEST__) && 'cheap-source-map',
  compiler_globals: {
    process: {
      env: {
        NODE_ENV: JSON.stringify(env),
      },
    },
    __DEV__,
    __PATH_SEP__: JSON.stringify(path.sep),
    __TEST__,
    __PROD__,
  },
  compiler_hash_type: __PROD__ ? 'chunkhash' : 'hash',
  compiler_fail_on_warning: __TEST__ || __PROD__,
  compiler_output_path: paths.base(envConfig.dir_docs_dist),
  compiler_public_path: '/',
  compiler_stats: {
    hash: false,            // the hash of the compilation
    version: false,         // webpack version info
    timings: true,          // timing info
    assets: true,           // assets info
    chunks: false,          // chunk info
    colors: true,           // with console colors
    chunkModules: false,    // built modules info to chunk info
    modules: false,         // built modules info
    cached: false,          // also info about cached (not built) modules
    reasons: false,         // info about the reasons modules are included
    source: false,          // the source code of modules
    errorDetails: true,     // details to errors (like resolving log)
    chunkOrigins: false,    // the origins of chunks and chunk merging info
    modulesSort: '',        // (string) sort the modules by that field
    chunksSort: '',         // (string) sort the chunks by that field
    assetsSort: '',         // (string) sort the assets by that field
  },
  compiler_vendor: [
    'babel-standalone',
    'brace',
    'brace/ext/language_tools',
    'brace/mode/jsx',
    'brace/mode/html',
    'brace/theme/tomorrow',
    'classnames',
    'copy-to-clipboard',
    'faker',
    'react',
    'react-ace',
    'react-dom',
  ],
}

export default config
