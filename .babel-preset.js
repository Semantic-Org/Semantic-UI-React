const nodeEnv = process.env.NODE_ENV

const docsBuild = !!process.env.REACT_STATIC_ENV
const libBuild = nodeEnv === 'build' || nodeEnv === 'build-es'

const buildFactory = () => {
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-syntax-dynamic-import',
    'lodash',
    'transform-react-handled-props',
    // [
    //   'transform-react-remove-prop-types',
    //   {
    //     mode: 'wrap',
    //   },
    // ],
    [
      '@babel/transform-runtime',
      {
        polyfill: false,
        regenerator: true,
      },
    ],
  ]

  // if (libBuild)
  //   plugins.push([
  //     'filter-imports',
  //     {
  //       imports: {
  //         debug: ['default'],
  //         '../../lib': ['makeDebugger'],
  //       },
  //     },
  //   ])

  // if (docsBuild)
    plugins.push("universal-import")

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
        //   modules: nodeEnv === 'build-es' || docsBuild ? false : 'commonjs',
          targets: { browsers },
          node: "current",
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

module.exports = buildFactory
