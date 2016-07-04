let debug
const noop = () => undefined

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  debug = require('debug')
  localStorage.debug = localStorage.debug || 'stardust:*'
} else {
  debug = () => noop
}

/**
 * Create a namespaced debug function.
 * @param {String} namespace Usually a component name.
 * @example
 * import { makeDebugger } from 'src/utils/debug'
 * const debug = makeDebugger('namespace')
 *
 * debug('Some message')
 * @returns {Function}
 */
export const makeDebugger = (namespace) => {
  return debug(`stardust:${namespace}`)
}

/**
 * Default debugger, simple log.
 * @example
 * import debug from 'src/utils/debug'
 * debug('Some message')
 */
export default makeDebugger('log')
