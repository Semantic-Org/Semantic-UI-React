import Document from './docs/src/components/Document'
import { getComponentMenu } from './docs/static/utils'
import config from './config'
import pkg from './package'
import getRoutes from './static.routes'
import webpack from './static.webpack'

export default {
  Document,
  getSiteData: async ({ dev }) => ({
    dev,
    componentMenu: getComponentMenu(),
    pkg: {
      description: pkg.description,
      name: pkg.name,
    },
    title: 'Semantic UI React',
    versions: {
      anchor: require('anchor-js/package.json').version,
      babel: {
        standalone: require('@babel/standalone/package.json').version,
        standaloneEnv: require('@babel/preset-env-standalone/package.json').version,
      },
      faker: require('faker/package.json').version,
      prettier: require('prettier/package.json').version,
      propTypes: require('prop-types/package.json').version,
      react: require('react/package.json').version,
      sui: require('semantic-ui-css/package.json').version,
      suir: require('./package.json').version,
    },
  }),
  getRoutes,
  paths: {
    dist: config.paths.docsDist(),
    src: config.paths.docsSrc(),
    public: config.paths.docsPublic(),
  },
  siteRoot: 'https://react.semantic-ui.com',
  webpack,
}
