import { Children } from 'react'
import _ from 'lodash'

/**
 * Selects all of the props specified in pluginPropTypes
 * @param {object} props React.Component props
 * @param {object} pluginPropTypes SemanticUI related plugin props
 * @returns {object} keys are the filtered props, values are the prop values
 */
export const getPluginProps = (props, pluginPropTypes) => {
  return _.pick(props, _.keys(pluginPropTypes))
}

/**
 * Filters out all of the props specified in pluginPropTypes
 * @param {object} props React.Component props
 * @param {object} pluginPropTypes SemanticUI related plugin props
 * @returns {object} keys are the filtered props, values are the prop values
 */
export const getComponentProps = (props, pluginPropTypes) => {
  return _.omit(props, _.keys(pluginPropTypes))
}

/**
 * Returns an object consisting of props not defined in propTypes unless defined in defaultProps.
 * @param {*} instance The `this` keyword in a React Component class.
 * @returns {{}} A shallow copy of the prop object
 */
export const getUnhandledProps = (instance) => {
  return _.omit(instance.props, (val, key) => {
    const inPropTypes = key in instance.constructor.propTypes
    const inDefaultProps = key in instance.constructor.defaultProps
    return inPropTypes && !inDefaultProps
  })
}

export const customPropTypes = {
  /**
   * Ensures children are of a set of types
   * Similar to `oneOfType` built-in validator
   * @param {Array<string>} allowedTypes Collection of allowed Stardust component types
   * @returns {Array} containing children of the specified type
   */
  ofComponentTypes: (allowedTypes) => {
    return (props, propName, componentName) => {
      const { children } = props
      const disallowed = Children.map(children, child => {
        return allowedTypes.includes(_.get(child, 'type._meta.name')) ? null : child
      })
      if (disallowed && disallowed.length !== 0) {
        return new Error(
          `\`${componentName}\` should only have children of type \`${allowedTypes.join(', ')}\`.`
        )
      }
    }
  },

  /**
   * Verifies exclusivity of a given prop
   * @param {string} exclusives property used for exclusivity check
   * @throws {Error} if named prop not mutually exclusive
   * @returns {undefined}
   */
  mutuallyExclusive: (exclusives) => {
    return (props, propName, componentName) => {
      for (const exclusive of exclusives) {
        if (propName in props && exclusive in props) {
          return new Error(
            `\`${componentName}\` should only have one of type \`${propName}\` or \`${exclusive}\` not both.`
          )
        }
      }
    }
  },
}
