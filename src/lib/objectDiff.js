import _ from 'lodash'

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
export const objectDiff = (source, target) => _.transform(source, (res, val, key) => {
  // deleted keys
  if (!_.has(target, key)) res[key] = '[DELETED]'
  // new keys / changed values
  else if (!_.isEqual(val, target[key])) res[key] = target[key]
}, {})
