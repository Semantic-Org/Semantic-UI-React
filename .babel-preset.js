const isDocs = !!process.env.REACT_STATIC_ENV
const nodeEnv = process.env.NODE_ENV

const buildFactory = () => {
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-syntax-dynamic-import',
    'lodash',
    'transform-react-handled-props',
    [
      'transform-react-remove-prop-types',
      {
        mode: 'wrap',
      },
    ],
    [
      '@babel/transform-runtime',
      {
        polyfill: false,
        regenerator: false,
      },
    ],
  ]

  if (nodeEnv === 'build' || nodeEnv === 'build-es')
    plugins.push([
      'filter-imports',
      {
        imports: {
          debug: ['default'],
          '../../lib': ['makeDebugger'],
        },
      },
    ])

  const browsers = [
    'last 8 versions',
    'safari > 8',
    'firefox > 23',
    'chrome > 24',
    'opera > 15',
    'not ie < 11',
    'not ie_mob <= 11',
  ]

  return {
    presets: [
      [
        '@babel/env',
        {
          modules: nodeEnv === 'build-es' ? false : 'commonjs',
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
  }
}

const docsPreset = {
  presets: ['react-static/babel-preset.js'],
  plugins: ['transform-react-handled-props'],
}

module.exports = isDocs ? docsPreset : buildFactory
