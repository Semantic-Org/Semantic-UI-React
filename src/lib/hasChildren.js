/**
 * Tests if children are nil in React and Preact.
 *
 * @param {Object} props A components props
 * @param {Object} props.children The children prop of a component.
 * @returns {Boolean}
 */
const hasChildren = (props) => {
  if (props === null || props === undefined) return false

  const { children } = props

  if (children === null || children === undefined) return false

  return Array.isArray(children) && children.length > 0
}

export default hasChildren
