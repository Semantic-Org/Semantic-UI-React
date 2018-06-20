import path from 'path'
import webpack from 'webpack'

import babelPreset from './.babel-preset'
import config from './config'
import getRoutes from './static.routes'
import Document from './docs/src/components/Document'

export default {
  bundleAnalyzer: true,
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
  inlineCss: true,
  paths: {
    src: 'docs/src',
    public: 'docs/public',
  },
  siteRoot: 'https://react.semantic-ui.com',
  webpack: (webpackConfig, { defaultLoaders }) => ({
    ...webpackConfig,
    devtool: false,
    externals:
      webpackConfig.externals.length > 0
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
      noParse: [/\.json$/, /anchor-js/, /@babel\/standalone/, /faker/],
      rules: [
        {
          oneOf: [
            {
              ...defaultLoaders.jsLoader,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    ...babelPreset,
                    babelrc: false,
                    cacheDirectory: true,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    plugins: [
      ...webpackConfig.plugins,
      new webpack.optimize.CommonsChunkPlugin({
        name: 'suir',
        minChunks: (module, count) => {
          if (!module.resource) return false

          const relative = path.relative(config.paths.src(), module.resource)
          return !!relative && !relative.startsWith('..') && !path.isAbsolute(relative)
          // return module.resource &&
        },
      }),
    ],
    resolve: {
      alias: {
        'semantic-ui-react': config.paths.src('index.js'),
      },
      modules: [...webpackConfig.resolve.modules, config.paths.base(), 'node_modules'],
    },
  }),
}
