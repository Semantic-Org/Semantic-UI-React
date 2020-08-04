import path from 'path'
import uglifyPlugin from 'react-static/node_modules/uglifyjs-webpack-plugin'
import webpack from 'react-static/node_modules/webpack'
import TerserLegacyPlugin from 'terser-webpack-plugin-legacy'

import config from './config'

export default (webpackConfig, { stage }) => ({
  ...webpackConfig,
  devtool: config.compiler_devtool,
  entry:
    stage === 'prod'
      ? {
          main: [config.paths.docsSrc('index.js'), config.paths.src('index.js')],
        }
      : webpackConfig.entry,
  externals:
    stage === 'node'
      ? webpackConfig.externals
      : {
          'anchor-js': 'AnchorJS',
          '@babel/standalone': 'Babel',
          faker: 'faker',
          'prop-types': 'PropTypes',
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-dom/server': 'ReactDOMServer',
        },
  module: {
    ...webpackConfig.module,
    rules: [
      {
        test: /\.js$/,
        include: [
          // Heads up!
          // There modules should be manually transpiled because they are not compatible with IE11
          path.resolve(__dirname, 'node_modules/ansi-styles'),
          path.resolve(__dirname, 'node_modules/chalk'),
          path.resolve(__dirname, 'node_modules/debug'),
          path.resolve(__dirname, 'node_modules/leven'),
          path.resolve(__dirname, 'node_modules/prettier'),

          path.resolve(__dirname, 'docs'),
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'tmp'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: stage === 'dev',
            configFile: path.resolve(__dirname, '.babelrc'),
          },
        },
      },
      {
        test: /.mdx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          '@mdx-js/loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __PATH_SEP__: JSON.stringify(path.sep),
    }),
    // Disable outdated "uglifyjs-webpack-plugin", can be removed after migration to RS7
    ...webpackConfig.plugins.filter((plugin) => plugin.constructor !== uglifyPlugin),
    stage === 'prod' &&
      new TerserLegacyPlugin({
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      'semantic-ui-react': config.paths.src('index.js'),
    },
    // Heads up!
    // We need this to prefer own node_modules instead of react-static's.
    modules: [
      config.paths.base(),
      config.paths.base('node_modules'),
      ...webpackConfig.resolve.modules,
    ],
  },
  resolveLoader: {
    // Heads up!
    // We need this to resolve our own babel-loader for Babel 7. Can be safely removed when
    // react-static will use Babel 7.
    modules: [config.paths.base('node_modules'), 'node_modules'],
  },
})
