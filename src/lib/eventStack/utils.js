/**
 * An IE11-compatible function.
 *
 * @see https://jsperf.com/suir-clone-map
 */
export const cloneMap = (map) => {
  const newMap = new Map()

  map.forEach((value, key) => {
    newMap.set(key, value)
  })

  return newMap
}

export const normalizeHandlers = handlers => (Array.isArray(handlers) ? handlers : [handlers])

/**
 * Normalizes `target` for EventStack, because `target` can be passed as `boolean` or `string`.
 *
 * @param {boolean|string|HTMLElement|Window} target Value for normalization.
 * @return {HTMLElement|Window} A DOM node.
 */
export const normalizeTarget = (target) => {
  if (target === 'document') return document
  if (target === 'window') return window
  return target || document
}
