const nodeEnv = process.env.NODE_ENV

const esBuild = nodeEnv === 'build-es'
const libBuild = nodeEnv === 'build' || esBuild
const docsBuild = nodeEnv === 'development' || nodeEnv === 'production'

const browsers = [
  'last 8 versions',
  'safari > 8',
  'firefox > 23',
  'chrome > 24',
  'opera > 15',
  'not ie < 11',
  'not ie_mob <= 11',
]

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-syntax-dynamic-import',
  [
    '@babel/plugin-transform-runtime',
    {
      polyfill: false,
      regenerator: docsBuild,
    },
  ],
  // Plugins that allow to reduce the target bundle size
  'lodash',
  'transform-react-handled-props',
  [
    'transform-react-remove-prop-types',
    {
      mode: 'wrap',
    },
  ],
  // A plugin for react-static
  docsBuild && [
    'universal-import',
    {
      disableWarnings: true,
    },
  ],
  // A plugin for removal of debug in production builds
  libBuild && [
    'filter-imports',
    {
      imports: {
        debug: ['default'],
        '../../lib': ['makeDebugger'],
      },
    },
  ],
].filter(Boolean)

module.exports = () => ({
  compact: false,
  presets: [
    [
      '@babel/env',
      {
        modules: esBuild ? false : 'commonjs',
        targets: { browsers },
      },
    ],
    '@babel/react',
  ],
  plugins,
  env: {
    development: {
      plugins: ['react-hot-loader/babel'],
    },
    test: {
      plugins: [['istanbul', { include: ['src'] }]],
    },
  },
})
