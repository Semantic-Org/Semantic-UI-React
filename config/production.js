const __BASE__ = '/stardust/'

export default (config) => ({
  compiler_fail_on_warning: true,
  compiler_hash_type: 'chunkhash',
  compiler_devtool: false,
  compiler_public_path: __BASE__,
  compiler_globals: {
    ...config.compiler_globals,
    __BASE__: JSON.stringify(__BASE__),
  },
})
