/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @param {Object} [options={}]
 * @param {object|function} [options.passAs=false] Forces a pass of `as` prop to unhandled props
 * @returns {{}} A shallow copy of the prop object
 */
const getUnhandledProps = (Component, props, options = {}) => {
  // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
  const { handledProps = [] } = Component
  const { passAs = false } = options

  return Object.keys(props).reduce((acc, prop) => {
    if (prop === 'childKey') return acc
    if (prop === 'as' && passAs) acc[prop] = props[prop]
    if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop]
    return acc
  }, {})
}

export default getUnhandledProps
