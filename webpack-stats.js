/**
 * Webpack dev server command line output config.  Used after a bundle is created.
 * @type {{}}
 */
module.exports = {
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
  assetsSort: ''          // (string) sort the assets by that field
};
