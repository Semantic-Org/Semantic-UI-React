const GLOBALLY_KNOWN_PROPS = ['as', 'rules', 'styles', 'variables', 'childKey']

const isKnownProp = prop => GLOBALLY_KNOWN_PROPS.some(x => x === prop)

/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */
const getUnhandledProps = (Component, props) => {
  // Note that `handledProps` are generated automatically during build with `babel-plugin-transform-react-handled-props`
  const { handledProps = [] } = Component

  if (process.env.NODE_ENV !== 'production') {
    if (!Array.isArray(handledProps)) {
      const name = Component.displayName || Component.name

      throw new Error(`\`${name}\` is missing static handledProps array.`)
    }
  }

  return Object.keys(props).reduce((acc, prop) => {
    if (isKnownProp(prop)) return acc

    if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop]

    return acc
  }, {})
}

export default getUnhandledProps
