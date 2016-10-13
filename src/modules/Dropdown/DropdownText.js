import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * Header content wraps the main content when there is an adjacent Icon or Image.
 */
function DropdownText(props) {
  const { children, className, content } = props
  const classes = cx(className, 'text')
  const rest = getUnhandledProps(DropdownText, props)
  const ElementType = getElementType(DropdownText, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

DropdownText._meta = {
  name: 'DropdownText',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownText.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

DropdownText.create = createShorthandFactory(DropdownText, content => ({ content }))


export default DropdownText
