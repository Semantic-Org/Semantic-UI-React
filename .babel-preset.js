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
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  ['@babel/plugin-proposal-optional-chaining', { loose: true }],
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-syntax-dynamic-import',
  [
    '@babel/plugin-transform-runtime',
    {
      regenerator: isDocsBuild,
      useESModules: isESBuild,
      // https://github.com/babel/babel/issues/10261
      version: require('@babel/runtime/package.json').version,
    },
  ],
  // Plugins that allow to reduce the target bundle size

  // `babel-plugin-lodash` is required for all kinds of modules to simplify the resolution of
  // modules and avoid modules that prevent tree-shaking:
  // https://github.com/lodash/lodash/issues/4119
  'lodash',
  // CJS modules are not tree-shakable in any bundler by default
  // https://github.com/formium/tsdx#using-lodash
  (isESBuild || isUMDBuild) && [
    'babel-plugin-transform-rename-import',
    {
      replacements: [{ original: 'lodash', replacement: 'lodash-es' }],
    },
  ],

  'transform-react-handled-props',
  [
    'transform-react-remove-prop-types',
    {
      mode: isUMDBuild ? 'remove' : 'wrap',
      removeImport: isUMDBuild,
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
        loose: true,
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
  overrides: [
    // A workaround to avoid collisions between "babel-plugin-dynamic-import-node" & "universal-import"
    {
      test: /react-static-routes.js/,
      plugins: [
        ['universal-import', { disableWarnings: true }],
        '@babel/plugin-transform-modules-commonjs',
      ],
      presets: [['@babel/env', { modules: false }]],
    },
  ],
})
