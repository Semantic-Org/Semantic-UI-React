const options = process.env.BABEL_ENV === 'es' ? { modules: false } : {}
const plugins = process.env.BABEL_ENV === 'es' ? [] : ['lodash']

module.exports = {
  presets: [
    ['es2015', options],
  ],
  plugins,
}
