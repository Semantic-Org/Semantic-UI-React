import { createRenderer } from 'fela'
import felaPluginFallbackValue from 'fela-plugin-fallback-value'
import felaPluginPlaceholderPrefixer from 'fela-plugin-placeholder-prefixer'
import felaPluginPrefixer from 'fela-plugin-prefixer'
import rtl from 'fela-plugin-rtl'

const createRendererConfig = (options: any = {}) => ({
  plugins: [
    felaPluginPlaceholderPrefixer(),
    felaPluginPrefixer(),
    // Heads up!
    // This is required after fela-plugin-prefixer to resolve the array of fallback values prefixer produces.
    felaPluginFallbackValue(),
    ...(options.isRtl ? [rtl()] : []),
  ],
  enhancers: [],
  ...(options.isRtl ? { selectorPrefix: 'rtl_' } : {}),
})

export const felaRenderer = createRenderer(createRendererConfig())
export const felaRtlRenderer = createRenderer(createRendererConfig({ isRtl: true }))

export default felaRenderer
