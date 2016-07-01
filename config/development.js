module.exports = (config) => {
  // We use an explicit public path in development to resolve this issue:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  const __BASE__ = `http://${config.server_host}:${config.server_port}/`

  return {
    compiler_devtool: 'eval-cheap-module-source-map',
    compiler_public_path: __BASE__,
    compiler_globals: Object.assign({}, config.compiler_globals, {
      __BASE__: JSON.stringify(__BASE__),
    }),
  }
}
