const { NODE_ENV } = process.env

const isESBuild = NODE_ENV === 'build-es'
const isUMDBuild = NODE_ENV === 'build-umd'
const isLibBuild = NODE_ENV === 'build' || isESBuild || isUMDBuild
const isDocsBuild = NODE_ENV === 'development' || NODE_ENV === 'production'

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
      regenerator: isDocsBuild,
    },
  ],
  // Plugins that allow to reduce the target bundle size
  'lodash',
  'transform-react-handled-props',
  [
    'transform-react-remove-prop-types',
    {
      mode: isUMDBuild ? 'remove' : 'wrap',
      removeImport: isUMDBuild,
    },
  ],
  // A plugin for react-static
  isDocsBuild && [
    'universal-import',
    {
      disableWarnings: true,
    },
  ],
  // A plugin for removal of debug in production builds
  isLibBuild && [
    'filter-imports',
    {
      imports: {
        './makeDebugger': ['default'],
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
        modules: isESBuild || isUMDBuild ? false : 'commonjs',
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
