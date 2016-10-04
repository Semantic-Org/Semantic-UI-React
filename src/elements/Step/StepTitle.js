import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function StepTitle(props) {
  const { children, className, title } = props
  const classes = cx(className, 'title')
  const rest = getUnhandledProps(StepTitle, props)
  const ElementType = getElementType(StepTitle, props)

  return <ElementType {...rest} className={classes}>{ children || title }</ElementType>
}

StepTitle._meta = {
  name: 'StepTitle',
  parent: 'Step',
  type: META.TYPES.ELEMENT,
}

StepTitle.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Classes that will be added to the StepTitle className. */
  className: PropTypes.string,

  /** Primary content of the StepTitle. Mutually exclusive with title prop. */
  children: customPropTypes.every([
    customPropTypes.disallow(['title']),
    PropTypes.node,
  ]),

  /** Primary content of the StepTitle. Mutually exclusive with children. */
  title: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.node,
  ]),
}

export default StepTitle
