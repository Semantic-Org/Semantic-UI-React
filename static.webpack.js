import path from 'path'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import config from './config'
import { getStyleLoaders, getThemes } from './themes/config/helpers'

const getTheme = () => process.env.THEME || getThemes()[0]

export default (webpackConfig, { stage }) => ({
  ...webpackConfig,
  devtool: config.compiler_devtool,
  entry:
    stage === 'prod'
      ? {
        main: [config.paths.docsSrc('index.js')],
      }
      : webpackConfig.entry,
  externals:
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
      },
  module: {
    ...webpackConfig.module,
    rules: [
      // // First, run the linter.
      // // It's important to do this before Babel processes the JS.
      // {
      //   test: /\.(js)$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       options: {
      //         formatter: require.resolve('react-dev-utils/eslintFormatter'),
      //         eslintPath: require.resolve('eslint'),
      //
      //       },
      //       loader: require.resolve('eslint-loader'),
      //     },
      //   ],
      //   include: config.paths.docsSrc,
      // },
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: stage === 'dev',
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
          // "url" loader works just like "file" loader but it also embeds
          // assets smaller than specified size as data URLs to avoid requests.
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 30000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: [/\.less$/],
            use: stage === 'dev' ?
              [
                { loader: require.resolve('style-loader') },
                ...getStyleLoaders(),
              ] :
              require.resolve('null-loader'),
          },
          // "file" loader makes sure assets end up in the `dist` folder.
          // When you `import` an asset, you get its filename.
          // This loader doesn't use a "test" so it will catch all modules
          // that fall through the other loaders.
          {
            loader: require.resolve('file-loader'),
            // Exclude `js` files to keep "css" loader working as it injects
            // it's runtime that would otherwise be processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.overrides$/, /\.variables$/, /.mdx?$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __PATH_SEP__: JSON.stringify(path.sep),
    }),
    new CopyWebpackPlugin([
      ...getThemes().map(theme => ({
        from: config.paths.themesDist(`sui-${theme}.css`),
        to: config.paths.docsDist(`css/sui-${theme}.css`),
      })),
      {
        from: config.paths.base('node_modules/semantic-ui-less/themes/default/assets/fonts'),
        to: config.paths.docsDist('webfonts'),
      },
      {
        from: config.paths.base('node_modules/@fortawesome/fontawesome-free/css/all.min.css'),
        to: config.paths.docsDist('css/fa.css'),
      },
      {
        from: config.paths.base('node_modules/@fortawesome/fontawesome-free/webfonts'),
        to: config.paths.docsDist('webfonts'),
      },
    ]),
    ...webpackConfig.plugins,
  ],
  resolve: {
    alias: {
      'semantic-ui-react': config.paths.src('index.js'),
      '../../theme.config$': config.paths.themesSrc(`themes/${getTheme()}/theme.less`),
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
