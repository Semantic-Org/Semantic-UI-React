const c = require('ansi-colors')
const glob = require('glob')
const path = require('path')
const terserVersion = require('terser/package.json').version
const TerserWebpackPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { argv } = require('yargs')

const config = require('../config')

// Ensures that production settings for Babel are used
process.env.NODE_ENV = 'build-es'

/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

//
// Webpack config
//

const makeWebpackConfig = (entry) => ({
  devtool: false,
  mode: 'production',
  target: 'web',

  entry,
  output: {
    filename: path.basename(entry),
    path: config.paths.base('bundle-size', 'dist'),

    ...(argv.debug && {
      pathinfo: true,
    }),
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'reactDOM',
  },

  ...(argv.debug && {
    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,

          terserOptions: {
            mangle: false,
            output: {
              beautify: true,
              comments: true,
              preserve_annotations: true,
            },
          },
        }),
      ],
    },
  }),

  performance: {
    hints: false,
  },
  plugins: [
    argv.debug &&
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        logLevel: 'warn',
        openAnalyzer: false,
        reportFilename: `${path.basename(entry, '.js')}.html`,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      'semantic-ui-react': config.paths.dist('es', 'index.js'),
    },
  },
})

function webpackAsync(webpackConfig) {
  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig)

    compiler.run((err, stats) => {
      if (err) {
        reject(err)
      }

      const info = stats.toJson()

      if (stats.hasErrors()) {
        reject(new Error(info.errors.toString()))
      }
      if (stats.hasWarnings()) {
        reject(new Error(info.warnings.toString()))
      }

      resolve(info)
    })
  })
}

//
//
//

;(async () => {
  const fixtures = glob.sync('fixtures/*.size.js', {
    cwd: __dirname,
  })

  console.log(c.cyan(`ℹ Using Webpack ${webpack.version} & Terser ${terserVersion}`))

  console.log(c.cyan('ℹ Running following fixtures:'))
  console.log(c.cyan(fixtures.map((fixture) => `  - ${fixture}`).join('\n')))

  for (const fixture of fixtures) {
    const fixturePath = config.paths.base('bundle-size', fixture)

    await webpackAsync(makeWebpackConfig(fixturePath))
    console.log(c.green(`✔ Completed: ${fixture}`))
  }
})()
