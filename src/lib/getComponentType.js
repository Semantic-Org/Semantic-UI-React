/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {object} props A ReactElement props object
 * @param {object} [options={}]
 * @param {string|Function} [options.defaultAs] A default element type.
 * @param {Function} [options.getDefault] A function that returns a default element type.
 * @returns {string|Function} A ReactElement type
 */
function getComponentType(props, options = {}) {
  const { defaultAs, getDefault } = options

  // ----------------------------------------
  // user defined "as" element type

  if (props.as && props.as !== defaultAs) return props.as

  // ----------------------------------------
  // computed default element type

  if (getDefault) {
    const computedDefault = getDefault()
    if (computedDefault) return computedDefault
  }

  // ----------------------------------------
  // infer anchor links

  if (props.href) return 'a'

  // ----------------------------------------
  // use defaultProp or 'div'

  return defaultAs || 'div'
}

export default getComponentType
