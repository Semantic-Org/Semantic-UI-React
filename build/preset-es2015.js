const options = process.env.BABEL_ENV === 'es' ? { modules: false } : {}

module.exports = {
  presets: [
    ['es2015', options],
  ],
}
