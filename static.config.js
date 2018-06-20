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
  inlineCss: true,
  paths: {
    src: 'docs/src',
  },
  webpack: webpackConfig => ({
    ...webpackConfig,
    externals: {
      'anchor-js': 'AnchorJS',
      '@babel/standalone': 'Babel',
      faker: 'faker',
      'prop-types': 'PropTypes',
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-dom/server': 'ReactDOMServer',
    },
    resolve: {
      alias: {
        'semantic-ui-react': config.paths.src('index.js'),
      },
      modules: [...webpackConfig.resolve.modules, config.paths.base(), 'node_modules'],
    },
  }),
}
