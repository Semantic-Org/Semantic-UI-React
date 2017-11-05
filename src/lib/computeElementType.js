/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * TODO: Update JSDoc
 * @param {object} props A ReactElement props object
 * @param {function} [computeType] A function that returns a default element type.
 * @returns {string|function} A ReactElement type
 */
const computeElementType = (as, href, defaultType, computeType) => {
  // ----------------------------------------
  // user defined "as" element type

  if (as && as !== defaultType) return as

  // ----------------------------------------
  // computed default element type

  if (computeType) {
    const computedDefault = computeType()
    if (computedDefault) return computedDefault
  }

  // ----------------------------------------
  // infer anchor links

  if (href) return 'a'

  // ----------------------------------------
  // use defaultProp or 'div'

  return defaultType || 'div'
}

export default computeElementType
