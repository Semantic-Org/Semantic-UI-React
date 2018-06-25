import webpack from 'webpack'

import config from './config'
import getRoutes from './static.routes'
import Document from './docs/src/components/Document'

export default {
  Document,
  getSiteData: async ({ dev }) => ({
    dev,
    title: 'Semantic UI React',
    versions: {
      anchor: require('anchor-js/package.json').version,
      babel: {
        standalone: require('@babel/standalone/package.json').version,
      },
      faker: require('faker/package.json').version,
      jsBeautify: require('js-beautify/package.json').version,
      propTypes: require('prop-types/package.json').version,
      react: require('react/package.json').version,
      sui: require('semantic-ui-css/package.json').version,
      suir: require('./package.json').version,
    },
  }),
  getRoutes,
  paths: {
    src: 'docs/src',
    public: 'docs/public',
  },
  siteRoot: 'https://react.semantic-ui.com',
  webpack: (webpackConfig, { stage }) => ({
    ...webpackConfig,
    devtool: config.compiler_devtool,
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
    entry:
      stage === 'prod'
        ? {
          main: config.paths.docsSrc('index.js'),
          suir: config.paths.src('index.js'),
        }
        : webpackConfig.entry,
    module: {
      ...webpackConfig.module,
      noParse: [/\.json$/, /anchor-js/, /brace/, /@babel\/standalone/, /faker/],
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        },
      ],
    },
    plugins: [
      stage === 'prod' &&
        new webpack.optimize.CommonsChunkPlugin({
          name: 'suir',
          minChunks: Infinity,
        }),
      // Heads up!
      // An order there is important because react-static already uses CommonChunkPlugin, it will save your life!
      // https://github.com/webpack/webpack/issues/4638
      ...webpackConfig.plugins,
    ].filter(Boolean),
    resolve: {
      alias: {
        'semantic-ui-react': config.paths.src('index.js'),
      },
      modules: [config.paths.base(), config.paths.base('node_modules'), ...webpackConfig.resolve.modules],
    },
    resolveLoader: {
      modules: [config.paths.base('node_modules'), 'node_modules'],
    },
  }),
}
