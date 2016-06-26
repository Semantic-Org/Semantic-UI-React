/* eslint-disable react/no-multi-comp */
import _ from 'lodash'
import React, { Children } from 'react'

import Icon from '../elements/Icon/Icon'
import Image from '../elements/Image/Image'

// ===============================================================
// Custom PropTypes
// ===============================================================
export const customPropTypes = {
  /**
   * Ensures children are of a set of types.
   * Similar to `oneOfType` built-in validator
   * @param {String[]} allowedTypes Collection of allowed Stardust component types
   */
  ofComponentTypes: (allowedTypes) => {
    return (props, propName, componentName) => {
      const { children } = props
      const disallowed = Children.map(children, child => {
        return _.includes(allowedTypes, _.get(child, 'type._meta.name')) ? null : child
      })
      if (disallowed && disallowed.length !== 0) {
        return new Error(
          `\`${componentName}\` should only have children of type \`${allowedTypes}\`.`
        )
      }
    }
  },
  /**
   * Verifies exclusivity of a given prop
   * @param {string} exclusives property used for exclusivity check
   */
  mutuallyExclusive: exclusives => {
    return (props, propName, componentName) => {
      _.forEach(exclusives, exclusiveProp => {
        if (props[propName] && props[exclusiveProp]) {
          return new Error(
            `\`${componentName}\` should only have one of type \`${propName}\` or \`${exclusiveProp}\` not both.`
          )
        }
      })
    }
  },
}

// ===============================================================
// Instance Utils
// ===============================================================
/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {*} Component A React.Component.
 * @param {*} props Props from a React.Component instance.
 * @returns {{}} A shallow copy of the prop object
 */
export const getUnhandledProps = (Component, props) => {
  const handledProps = _.union(
    Component.autoControlledProps,
    _.keys(Component.defaultProps),
    _.keys(Component.propTypes),
  )

  return _.omit(props, handledProps)
}

// ----------------------------------------
// Prop Renderers
//
// Many components share many props. Some of those props should be smart.
// These give all our components props consistent smart capabilities.
// ----------------------------------------
export const iconPropRenderer = (val) => _.isString(val) ? <Icon className={val} /> : val
export const imagePropRenderer = (val) => _.isString(val) ? <Image src={val} /> : val

// ----------------------------------------
// Prop to className
//
// There are 4 prop patterns used to build up the className for a component.
// Each utility here is meant for use in a classnames() argument.
//
// There is no util for valueOnly() because it would simply return val.
// Use the prop value inline instead.
//   <Label size='big' />
//   <div class="ui big label"></div>
// ----------------------------------------

/**
 * Props where only the prop key is used in the className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label tag />
 * <div class="ui tag label"></div>
 */
export const useKeyOnly = (val, key) => val && key

/**
 * Props that require both a key and value to create a className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label corner='left' />
 * <div class="ui left corner label"></div>
 */
export const useValueAndKey = (val, key) => val && val !== true && `${val} ${key}`

/**
 * Props whose key will be used in className, or value and key.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example Key Only
 * <Label pointing />
 * <div class="ui pointing label"></div>
 *
 * @example Key and Value
 * <Label pointing='left' />
 * <div class="ui left pointing label"></div>
 */
export const useKeyOrValueAndKey = (val, key) => val && (val === true ? key : `${val} ${key}`)

//
// Prop to className exceptions
//

/**
 * The "aligned" prop follows the useValueAndKey except when the value is "justified'.
 * In this case, only the class "justified" is used, ignoring the "aligned" class.
 * @param {*} val The value of the "aligned" prop
 *
 * @example
 * <Container aligned='justified' />
 * <div class="ui justified container"></div>
 *
 * @example
 * <Container aligned='left' />
 * <div class="ui left aligned container"></div>
 */
export const useAlignedProp = val => val === 'justified' ? 'justified' : useValueAndKey(val, 'aligned')
