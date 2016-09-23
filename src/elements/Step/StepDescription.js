import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function StepDescription(props) {
  const { className, children, description } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(StepDescription, props)
  const ElementType = getElementType(StepDescription, props)

  return <ElementType {...rest} className={classes}>{ children || description }</ElementType>
}

StepDescription._meta = {
  name: 'StepDescription',
  parent: 'Step',
  type: META.TYPES.ELEMENT,
}

StepDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Classes that will be added to the StepDescription className. */
  className: PropTypes.string,

  /** Primary content of the StepDescription. Mutually exclusive with description prop. */
  children: customPropTypes.every([
    customPropTypes.disallow(['description']),
    PropTypes.node,
  ]),

  /** Primary content of the StepDescription. Mutually exclusive with children. */
  description: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),
}

export default StepDescription
