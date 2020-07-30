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
      },
      faker: require('faker/package.json').version,
      propTypes: require('prop-types/package.json').version,
      prismjs: require('prismjs/package.json').version,
      react: require('react/package.json').version,
      // Heads up!
      // https://github.com/Semantic-Org/Semantic-UI/issues/6646
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/3345
      // `semantic-ui-css` and `semantic-ui-less` packages are not properly released:
      //  - prebuilt CSS of 2.4.1 points to 2.4.0
      //  - 2.4.2 is missing on NPM
      // sui: require('semantic-ui-css/package.json').version,
      sui: '2.4.2',
      suir: require('./package.json').version,
    },
  }),
  getRoutes,
  paths: {
    dist: config.paths.docsDist(),
    src: config.paths.docsSrc(),
    public: config.paths.docsPublic(),
  },
  siteRoot: process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://react.semantic-ui.com',
  webpack,
}
