const __BASE__ = '/stardust/'

module.exports = (config) => ({
  compiler_fail_on_warning: true,
  compiler_hash_type: 'chunkhash',
  compiler_devtool: false,
  compiler_public_path: __BASE__,
  compiler_globals: Object.assign({}, config.compiler_globals, {
    __BASE__: JSON.stringify(__BASE__),
  }),
})
