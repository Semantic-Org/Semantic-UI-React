import config from './config'

export default () => ({
  webpack: (webpackConfig, { stage }) => {
    webpackConfig.entry =
      stage === 'prod'
        ? {
          main: [config.paths.docsSrc('index.js'), config.paths.src('index.js')],
        }
        : webpackConfig.entry
    webpackConfig.externals =
      stage === 'node'
        ? webpackConfig.externals
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

    // This path matches to jsLoader:
    // https://github.com/nozzle/react-static/blob/master/packages/react-static/src/static/webpack/rules/jsLoader.js
    // - Here we including our sources directory to this loader
    // TODO rework this
    webpackConfig.module.rules[0].oneOf[1].include.push(config.paths.src())

    webpackConfig.resolve.alias = {
      'semantic-ui-react': config.paths.src('index.js'),
    }
    webpackConfig.resolve.modules.push(config.paths.base())
    // // Heads up!
    // // There modules should be manually transipiled because they are not compatible with IE11
    // path.resolve(__dirname, 'node_modules/ansi-styles'),
    //   path.resolve(__dirname, 'node_modules/debug'),
    //
    //   path.resolve(__dirname, 'docs'),
    //   path.resolve(__dirname, 'src'),
    //   path.resolve(__dirname, 'tmp'),
    return webpackConfig
  },
})
