/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */
const getUnhandledProps = (Component, props) => {
  return Object.keys(props).reduce((acc, prop) => {
    if (prop === 'childKey') return acc
    if (!Component.propTypes[prop]) acc[prop] = props[prop]
    return acc
  }, {})
}

export default getUnhandledProps
