import transform from 'lodash/transform'
import has from 'lodash/has'
import isEqual from 'lodash/isEqual'

/**
 * Naive and inefficient object difference, intended for development / debugging use only.
 * Deleted keys are shown as [DELETED].
 * @param {{}} source The source object
 * @param {{}} target The target object.
 * @returns {{}} A new object containing new/modified/deleted keys.
 * @example
 * import { objectDiff } from 'src/lib'
 *
 * const a = { key: 'val', foo: 'bar' }
 * const b = { key: 'val', foo: 'baz' }
 *
 * objectDiff(a, b)
 * //=> { foo: 'baz' }
 */
export default (source, target) =>
  transform(
    source,
    (res, val, key) => {
      // deleted keys
      if (!has(target, key)) res[key] = '[DELETED]'
      // new keys / changed values
      // Note, we tolerate isEqual here as this is a dev only utility and not included in production code
      else if (!isEqual(val, target[key])) res[key] = target[key]
    },
    {},
  )
