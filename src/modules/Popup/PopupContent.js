import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A PopupContent displays the content body of a Popover.
 */
export default function PopupContent(props) {
  const { children, className } = props
  const classes = cx('content', className)
  const rest = getUnhandledProps(PopupContent, props)
  const ElementType = getElementType(PopupContent, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

PopupContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** The content of the Popup */
  children: PropTypes.node,

  /** Classes to add to the Popup content className. */
  className: PropTypes.string,
}

PopupContent._meta = {
  name: 'PopupContent',
  type: META.TYPES.MODULE,
  parent: 'Popup',
}

PopupContent.create = createShorthandFactory(PopupContent, children => ({ children }))
