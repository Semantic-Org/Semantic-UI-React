let debug
const noop = () => undefined

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  debug = require('debug')
  // Safari private mode throws when writing to localStorage
  // https://github.com/TechnologyAdvice/stardust/issues/332
  try {
    localStorage.debug = localStorage.debug || 'stardust:*'
  } catch (err) {
    /* eslint-disable no-console */
    console.log('Stardust debug disabled. The browser could not write to localStorage.', err)
    /* eslint-enable no-console */
  }
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
