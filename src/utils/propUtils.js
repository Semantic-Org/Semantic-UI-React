import _ from 'lodash'
import React, { Children } from 'react'

import Icon from '../elements/Icon/Icon'
import Image from '../elements/Image/Image'

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

export const customPropTypes = {
  /*
   * Ensures children are of a set of types
   * Similar to `oneOfType` built-in validator
   * @param {Array<string>} allowedTypes Collection of allowed Stardust component types
   * @returns {Array} containing children of the specified type
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
  /*
   * Verifies exclusivity of a given prop
   * @param {string} exclusives property used for exclusivity check
   * @throws {Error} if named prop not mutually exclusive
   * @returns no-op
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

// ------------------------------------
// Prop Renderers
// ------------------------------------
export const iconPropRenderer = (val) => _.isString(val) ? <Icon className={val} /> : val
export const imagePropRenderer = (val) => _.isString(val) ? <Image src={val} /> : val

// ------------------------------------
// Prop To Class Name
// ------------------------------------
// There are 4 prop patterns used to build up the className for a component.
// Each utility here is meant for use in a classnames() argument.
//
// There is no util for valueOnly() because it would simply return val.
// Use the prop value inline instead.
//   <Label size='big' />
//   <div class="ui big label"></div>

/**
 * Props where only the prop key is used in the className.
 * @param {*} val A props value
 * @param {string} key A props key
 *
 * @example
 * <Label tag />
 * <div class="ui tag label"></div>
 *
 * @returns {false|string}
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
 *
 * @returns {false|string}
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
 *
 * @returns {false|string}
 */
export const useKeyOrValueAndKey = (val, key) => val && (val === true ? key : `${val} ${key}`)
