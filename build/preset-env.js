const env = process.env.NODE_ENV

const plugins = env === 'build' || env === 'build-es' ? [
  ['filter-imports', {
    imports: {
      debug: ['default'],
      '../../lib': ['makeDebugger'],
    },
  }],
] : []
const browsers = [
  'last 8 versions',
  'safari > 8',
  'firefox > 23',
  'chrome > 24',
  'opera > 15',
  'not ie < 11',
  'not ie_mob <= 11',
]

module.exports = {
  presets: [['env', {
    targets: { browsers },
  }]],
  plugins,
}
