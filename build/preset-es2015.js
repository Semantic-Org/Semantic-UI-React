const env = process.env.NODE_ENV
const options = env === 'build-es' ? { modules: false } : {}
const plugins = env === 'build' || env === 'build-es' ? [
  ['filter-imports', {
    imports: {
      debug: ['default'],
      '../../lib': ['makeDebugger'],
    },
  }],
] : []

module.exports = {
  presets: [
    ['es2015', options],
  ],
  plugins,
}
