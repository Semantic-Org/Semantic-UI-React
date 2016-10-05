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

  return <ElementType {...rest} className={classes}>{children || title}</ElementType>
}

StepTitle._meta = {
  name: 'StepTitle',
  parent: 'Step',
  type: META.TYPES.ELEMENT,
}

StepTitle.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.node,

  /** Shorthand for primary content. */
  title: customPropTypes.contentShorthand,
}

export default StepTitle
