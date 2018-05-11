import { createRenderer } from 'fela'
import felaPluginFallbackValue from 'fela-plugin-fallback-value'
import felaPluginPlaceholderPrefixer from 'fela-plugin-placeholder-prefixer'
import felaPluginPrefixer from 'fela-plugin-prefixer'

const felaRenderer = createRenderer({
  plugins: [],
  middleware: [
    felaPluginPlaceholderPrefixer(),
    felaPluginPrefixer(),
    // Heads up!
    // This is required after fela-plugin-prefixer to resolve the array of fallback values prefixer produces.
    felaPluginFallbackValue(),
  ],
  enhancers: [],
})

export default felaRenderer
