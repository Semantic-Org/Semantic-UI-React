const path = require('path')
const yargs = require('yargs')

const { argv } = yargs

const env = process.env.NODE_ENV || 'development'
const __DEV__ = env === 'development'
const __STAGING__ = env === 'staging'
const __TEST__ = env === 'test'
const __PROD__ = env === 'production'

let config = {
  env,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: __dirname,
  dir_src: 'src',
  dir_dist: 'dist',
  dir_docs_root: 'docs',
  dir_docs_src: 'docs/app',
  dir_docs_dist: 'docs/build',
  dir_umd_dist: 'dist/umd',
  dir_server: 'server',
  dir_test: 'test',
}

// ------------------------------------
// Paths
// ------------------------------------
const base = (...args) => path.resolve(...[config.path_base, ...args])

const paths = {
  base,
  src: base.bind(null, config.dir_src),
  dist: base.bind(null, config.dir_dist),
  test: base.bind(null, config.dir_test),
  docsDist: base.bind(null, config.dir_docs_dist),
  umdDist: base.bind(null, config.dir_umd_dist),
  docsSrc: base.bind(null, config.dir_docs_src),
}

config = Object.assign({}, config, {
  paths,

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host: 'localhost',
  server_port: process.env.PORT || 8080,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_devtool: __DEV__ && 'cheap-source-map'
  || __TEST__ && 'cheap-source-map'
  || __STAGING__ && 'source-map',
  compiler_hash_type: __PROD__ ? 'chunkhash' : 'hash',
  compiler_inline_manifest: false,
  compiler_fail_on_warning: __TEST__ || __PROD__,
  compiler_lint: argv.lint !== false,
  compiler_quiet: false,
  compiler_output_path: paths.base(config.dir_docs_dist),
  compiler_public_path: __PROD__ ? '//cdn.rawgit.com/Semantic-Org/Semantic-UI-React/gh-pages/' : '/',
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
  compiler_globals: {
    process: {
      env: {
        NODE_ENV: JSON.stringify(env),
      },
    },
    __DEV__,
    __DEBUG__: !!argv.debug,
    __STAGING__,
    __PATH_SEP__: JSON.stringify(path.sep),
    __TEST__,
    __PROD__,
  },
})

module.exports = config
