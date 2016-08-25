import _ from 'lodash'
/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */
const getUnhandledProps = (Component, props) => {
  const handledProps = _.union(
    Component.autoControlledProps,
    _.keys(Component.defaultProps),
    _.keys(Component.propTypes),
  )

  return _.omit(props, handledProps)
}

export default getUnhandledProps
