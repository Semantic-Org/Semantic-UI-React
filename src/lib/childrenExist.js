/**
 * Tests if children are nil in React and Preact.
 *
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */
const childrenExist = (children) => {
  if (children === null || children === undefined) return false

  if (typeof children === 'number') return !isNaN(children)

  if (Array.isArray(children)) return children.length > 0

  return !!children
}

export default childrenExist
