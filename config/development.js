export default (config) => ({
  compiler_devtool: 'source-map',

  // We use an explicit public path in development to resolve this issue:
  // http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
  compiler_public_path: `http://${config.server_host}:${config.server_port}/`,
})
