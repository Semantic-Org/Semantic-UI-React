export default () => ({
  compiler_fail_on_warning: true,
  compiler_hash_type: 'chunkhash',
  compiler_devtool: false,
  // html-webpack-plugin will insert assets into the index.html based on public path
  // this needs to be relative on gh-pages otherwise assets try to serve from
  // technologyadvice.github.io/
  // ...instead of
  // technologyadvice.github.io/stardust
  compiler_public_path: '',
})
