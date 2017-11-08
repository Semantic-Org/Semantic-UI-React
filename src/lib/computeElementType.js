/**
 * Returns a createElement() type based on the passed props.
 * Useful for calculating what type a component should render as.
 *
 * @param {object} props A ReactElement props object
 * @param {object} defaultProps A default ReactElement props object
 * @param {function} [computeType] A function that returns a default element type.
 * @returns {string|function} A ReactElement type
 */
const computeElementType = (props, defaultProps = {}, computeType) => {
  const { as, href } = props

  // ----------------------------------------
  // user defined "as" element type

  if (as && as !== defaultProps.as) return props.as

  // ----------------------------------------
  // computed default element type

  if (computeType) {
    const computedDefault = computeType(props)
    if (computedDefault) return computedDefault
  }

  // ----------------------------------------
  // infer anchor links

  if (href) return 'a'

  // ----------------------------------------
  // use defaultProp or 'div'

  return defaultProps.as || 'div'
}

export default computeElementType
