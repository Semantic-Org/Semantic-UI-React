const ExtractTextPlugin = require('extract-text-webpack-plugin') // webpack 3
// const MiniCssExtractPlugin = require('mini-css-extract-plugin') // webpack 4
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // webpack 4
const CopyWebpackPlugin = require('copy-webpack-plugin')
const paths = require('./paths')

// common function to get style loaders
const { themesRelativePaths, resolveApp, getStyleLoaders } = require('./helpers')

// This is the production configuration.
// It compiles slowly and is focused on producing a fast and minimal bundle.
// The development configuration is different and lives in a separate file.
module.exports = theme => ({
  // mode: 'production', // webpack 4
  // Don't attempt to continue if there are any errors.
  bail: true,
  // In production, we only want to load the app code.
  entry: paths.themesIndex,
  output: {
    // The build folder.
    path: paths.themesDist,
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    // We don't currently advertise code splitting but Webpack supports it.
    filename: '[name].js',
  },
  // webpack 4
  // optimization: {
  //   minimizer: [new OptimizeCSSAssetsPlugin({})],
  // },
  resolve: {
    alias: {
      '../../theme.config$': `${paths.themesSrc}/themes/${theme}/theme.less`,
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
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
          // webpack 3
          {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: getStyleLoaders(),
            }),
          },
          // webpack 4
          // {
          //   test: [/\.less$/],
          //   loader: getStyleLoaders(),
          // },
          // "file" loader makes sure assets end up in the `build` folder.
          // When you `import` an asset, you get its filename.
          // This loader doesn't use a "test" so it will catch all modules
          // that fall through the other loaders.
          {
            loader: require.resolve('file-loader'),
            // Exclude `js` files to keep "css" loader working as it injects
            // it's runtime that would otherwise be processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.overrides$/, /\.variables$/],
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
    // webpack 3
    // Note: this won't work without ExtractTextPlugin.extract(..) in `loaders`.
    new ExtractTextPlugin({
      filename: `sui-${theme}.css`,
    }),
    // webpack 4
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: `sui-${theme}.css`,
    // }),
    new CopyWebpackPlugin([
      { from: `${paths.themesSrc}/palette.less`, to: 'palette.less' },
      { from: `${paths.themesSrc}/palette.less`, to: 'palette.scss' },
      { from: `${paths.themesSrc}/palette.less`, to: 'palette.css' },
    ]),
  ],
  // Turn off performance processing because we utilize
  // our own hints via the FileSizeReporter
  performance: false,
})
