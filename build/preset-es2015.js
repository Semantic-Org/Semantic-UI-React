let options = {}
let plugins = []

if (process.env.BABEL_ENV === 'es') {
  options = { modules: false }
  plugins = [['transform-rename-import', { original: './debug.cjs', replacement: './debug.es' }]]
}

module.exports = {
  plugins,
  presets: [
    ['es2015', options],
  ],
}
