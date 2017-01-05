import React, { PropTypes } from 'react'
import cx from 'classnames'
import {
  createShorthandFactory,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A PopupHeader displays a header in a Popover.
 */
export default function PopupHeader(props) {
  const { children, className } = props
  const classes = cx('header', className)
  const rest = getUnhandledProps(PopupHeader, props)
  const ElementType = getElementType(PopupHeader, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

PopupHeader.create = createShorthandFactory(PopupHeader, value => ({ children: value }))

PopupHeader.propTypes = {
  /** The header of the Popup */
  children: PropTypes.node,

  /** Classes to add to the Popup header className. */
  className: PropTypes.string,
}

PopupHeader._meta = {
  name: 'PopupHeader',
  type: META.TYPES.MODULE,
  parent: 'Popup',
}
