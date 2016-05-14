let debug
const noop = () => undefined

if (process.env.NODE_ENV !== 'production') {
  debug = require('debug')
  localStorage.debug = 'stardust:*'
} else {
  debug = () => noop
}

/**
 * Create a namespaced debug function.  Extended with console.group* methods.
 * @param {String} namespace Usually a component name.
 * @example
 * import { makeDebugger } from 'src/utils/debug'
 * const debug = makeDebugger('namespace')
 *
 * debug('Some message')
 * @returns {Function}
 */
export const makeDebugger = (namespace) => {
  const msg = `stardust:${namespace}`
  const inst = debug(msg)

  // extend with group functionality
  if (process.env.NODE_ENV === 'production') {
    inst.group = noop
    inst.groupCollapsed = noop
    inst.groupEnd = noop
  } else {
    /* eslint-disable no-console */
    inst.group = console.group.bind(console, msg)
    inst.groupCollapsed = console.groupCollapsed.bind(console, msg)
    inst.groupEnd = console.groupEnd.bind(console)
    /* eslint-enable no-console */
  }

  return inst
}

/**
 * Default debugger, simple log.
 * @example
 * import debug from 'src/utils/debug'
 * debug('Some message')
 */
export default makeDebugger('log')
