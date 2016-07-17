export const typeOrder = [
  'element',
  'collection',
  'view',
  'module',
  'addon',
]

/**
 * Get the Webpack Context for all doc site examples.
 */
export const exampleContext = require.context('docs/app/Examples/', true, /\.js$/)
