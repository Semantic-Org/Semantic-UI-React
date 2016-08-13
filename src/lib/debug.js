let _debug
const noop = () => undefined

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  _debug = require('debug')
  // Safari private mode throws when writing to localStorage
  // https://github.com/TechnologyAdvice/stardust/issues/332
  try {
    if (typeof localStorage === 'object') localStorage.debug = localStorage.debug || 'stardust:*'
  } catch (err) {
    /* eslint-disable no-console */
    console.log('Stardust debug disabled. Could not write to localStorage.', err)
    /* eslint-enable no-console */
  }
} else {
  _debug = () => noop
}

/**
 * Create a namespaced debug function.
 * @param {String} namespace Usually a component name.
 * @example
 * import { makeDebugger } from 'src/lib'
 * const debug = makeDebugger('namespace')
 *
 * debug('Some message')
 * @returns {Function}
 */
export const makeDebugger = (namespace) => {
  return _debug(`stardust:${namespace}`)
}

/**
 * Default debugger, simple log.
 * @example
 * import { debug } from 'src/lib'
 * debug('Some message')
 */
export const debug = makeDebugger('log')
