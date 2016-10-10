import React, { PropTypes } from 'react'
import cx from 'classnames'
import {
  createShorthandFactory,
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

PopupContent.create = createShorthandFactory(PopupContent, value => ({ children: value }))

PopupContent.propTypes = {
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
