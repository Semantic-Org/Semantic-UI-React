import { Children } from 'react'
import _ from 'lodash'

const type = (...args) => Object.prototype.toString.call(...args)

/**
 * Ensures children are of a set of types. Matches are made against the component _meta.name property.
 * @param {String[]} allowedTypes Collection of allowed component types.
 */
export const ofComponentTypes = (allowedTypes) => {
  return (props, propName, componentName) => {
    if (propName !== 'children') {
      throw new Error(`ofComponentTypes can only be used on the \`children\` prop, not ${propName}.`)
    }
    if (!_.isArray(allowedTypes)) {
      throw new Error([
        'Invalid argument supplied to ofComponentTypes, expected an instance of array.'
          ` See ${componentName} prop \`${propName}\`.`,
      ].join(''))
    }
    const disallowed = _.compact(Children.map(props.children, child => {
      return _.includes(allowedTypes, _.get(child, 'type._meta.name')) ? null : child
    }))
    if (!_.isEmpty(disallowed)) {
      return new Error(
        `\`${componentName}\` should only have children of type \`${allowedTypes}\`.`
      )
    }
  }
}

/**
 * Verifies exclusivity of a given prop.
 * @param {string[]} disallowedProps An array of props that cannot be used with this prop.
 */
export const disallow = disallowedProps => {
  return (props, propName, componentName) => {
    if (!_.isArray(disallowedProps)) {
      throw new Error([
        'Invalid argument supplied to mutuallyExclusive, expected an instance of array.'
          ` See ${componentName} prop \`${propName}\`.`,
      ].join(''))
    }

    // mutually exclusive
    const disallowed = disallowedProps.reduce((acc, exclusive) => {
      if (!_.isUndefined(props[propName]) && !_.isUndefined(props[exclusive])) {
        return [...acc, exclusive]
      }
      return acc
    }, [])

    if (!_.isEmpty(disallowed)) {
      return new Error([
        `\`${componentName}\` prop \`${propName}\` conflicts with props: \`${disallowed.join('`, `')}\`.`,
        'They cannot be defined together, choose one or the other.',
      ].join(' '))
    }
  }
}

/**
 * Ensure a prop adherers to multiple prop type validators.
 * @param {function[]} validators An array of propType functions.
 */
export const every = (validators) => {
  return (props, propName, componentName, ...rest) => {
    if (!_.isArray(validators)) {
      throw new Error([
        'Invalid argument supplied to all, expected an instance of array.',
        `See ${componentName} prop \`${propName}\`.`,
      ].join(' '))
    }

    const errors = _.compact(_.map(validators, validator => {
      if (!_.isFunction(validator)) {
        throw new Error(
          `all() argument "validators" should contain functions, found: ${type(validator)}.`
        )
      }
      return validator(props, propName, componentName, ...rest)
    }))

    // we can only return one error at a time
    return errors[0]
  }
}

/**
 * Ensure a prop adherers to at least one of the given prop type validators.
 * @param {function[]} validators An array of propType functions.
 */
export const some = (validators) => {
  return (props, propName, componentName, ...rest) => {
    if (!_.isArray(validators)) {
      throw new Error([
        'Invalid argument supplied to all, expected an instance of array.',
        `See ${componentName} prop \`${propName}\`.`,
      ].join(' '))
    }

    const errors = _.map(validators, validator => {
      if (!_.isFunction(validator)) {
        throw new Error(
          `any() argument "validators" should contain functions, found: ${type(validator)}.`
        )
      }
      return validator(props, propName, componentName, ...rest)
    })

    // if no validator passed return the first error found
    if (!_.some(errors, _.overSome(_.isNull, _.isUndefined))) {
      return _.find(errors, error => !_.isUndefined(error))
    }
  }
}

/**
 * Ensure a validator passes only when a component has a given propsShape.
 * @param {object} propsShape An object describing the prop shape.
 * @param {function} validator A propType function.
 */
export const givenProps = (propsShape, validator) => {
  return (props, propName, componentName, ...rest) => {
    // only validate if all propsShape validators pass
    if (!_.every(propsShape, (val, key) => !val(props, key, componentName, ...rest))) return

    if (!_.isPlainObject(propsShape)) {
      throw new Error(
        `Invalid argument supplied to whenShape, expected an object. See ${componentName} prop \`${propName}\`.`,
      )
    }

    if (!_.isFunction(validator)) {
      throw new Error(
        `Invalid argument supplied to whenShape, expected a function. See ${componentName} prop \`${propName}\`.`,
      )
    }

    const error = validator(props, propName, componentName, ...rest)

    if (error) {
      // poor mans shallow pretty print, prevents JSON circular reference errors
      const prettyProps = `{ ${_.map(_.pick(props, _.keys(propsShape)), (val, key) => {
        let value = val
        if (_.isString(val)) value = `"${val}"`
        else if (_.isArray(val)) value = `[${val.join(', ')}]`
        else if (_.isObject(val)) value = '{...}'

        return `${key}: ${value}`
      }).join(', ')} }`

      error.message = `Given props ${prettyProps}: ${error.message}`
      return error
    }
  }
}

/**
 * Define prop dependencies by requiring other props.
 * @param {string[]} requiredProps An array of required prop names.
 */
export const demand = (requiredProps) => {
  return (props, propName, componentName) => {
    if (!_.isArray(requiredProps)) {
      throw new Error([
        'Invalid `requiredProps` argument supplied to require, expected an instance of array.'
          ` See ${componentName} prop \`${propName}\`.`,
      ].join(''))
    }

    // do not require requiredProps if the prop does not exist in props
    if (!_.has(props, propName)) return

    const missingRequired = requiredProps.filter(required => !_.has(props, required))
    if (!_.isEmpty(missingRequired)) {
      return new Error(
        `\`${componentName}\` prop \`${propName}\` requires props: \`${missingRequired.join('`, `')}\`.`,
      )
    }
  }
}
