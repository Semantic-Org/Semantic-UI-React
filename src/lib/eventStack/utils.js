/**
 * Heads up! IE doesn't support arguments in constructors, so we should add items to a set manually.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 *
 * @param {Function[]|Set<Function>} items
 * @return {Set<Function>}
 */
export const createSet = (items) => {
  const set = new Set()

  items.forEach(item => set.add(item))

  return set
}

/**
 * Heads up! IE doesn't know that Set is iterable, so we can't you there spread.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 *
 * @param {Set} set
 * @return {*}
 */
export const getLastInSet = (set) => {
  let last = null

  set.forEach((item) => {
    last = item
  })

  return last
}
