import path from 'path'
import nodeExternals from 'webpack-node-externals'

import config from './config'

export default () => ({
  webpack: (webpackConfig, { defaultLoaders, stage }) => {
    webpackConfig.entry = [
      ...webpackConfig.entry,
      stage === 'prod' && config.paths.docsSrc('index.js'),
      stage === 'prod' && config.paths.src('index.js'),
    ].filter(Boolean)

    webpackConfig.externals =
      stage === 'node'
        ? nodeExternals({
          whitelist: ['react-universal-component', 'webpack-flush-chunks', 'react-static'],
        })
        : {
          'anchor-js': 'AnchorJS',
          '@babel/standalone': 'Babel',
          faker: 'faker',
          'prettier/standalone': 'prettier',
          'prop-types': 'PropTypes',
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-dom/server': 'ReactDOMServer',
        }

    webpackConfig.module.rules[0].oneOf[1].include.push(
      path.resolve(__dirname, 'node_modules/ansi-styles'),
      path.resolve(__dirname, 'node_modules/debug'),
      path.resolve(__dirname, 'src'),
    )
    webpackConfig.module.rules[0].oneOf[1].use[0].options.root = path.resolve(__dirname)

    webpackConfig.resolve.alias = {
      'semantic-ui-react': config.paths.src('index.js'),
    }
    webpackConfig.resolve.modules.push(config.paths.base())

    return webpackConfig
  },
})
