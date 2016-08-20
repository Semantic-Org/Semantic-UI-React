import _ from 'lodash'

/**
 * Returns a createElement() type based on the props of the Component.
 * Useful for calculating what type a component should render as.
 *
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @param {object} [typeMap] Maps props (keys) to element types (values).
 * @returns {string|function} A ReactElement type
 */
function getElementType(Component, props, typeMap) {
  const { defaultProps = {} } = Component

  // ----------------------------------------
  // user defined element type

  if (props.as && props.as !== defaultProps.as) return props.as

  // ----------------------------------------
  // prop to type mappings
  if (typeMap) {
    const mappedType = _.find(typeMap, (type, propName) => {
      const propValue = props[propName]
      return !(propValue === undefined || propValue === null || propValue === '')
    })
    if (mappedType) return mappedType
  }

  // ----------------------------------------
  // infer anchor links

  if (props.href) return 'a'

  // ----------------------------------------
  // use defaultProp or 'div'

  return defaultProps.as || 'div'
}

export default getElementType
