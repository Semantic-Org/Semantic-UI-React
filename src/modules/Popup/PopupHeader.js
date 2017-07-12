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
 * A PopupHeader displays a header in a Popover.
 */
export default function PopupHeader(props) {
  const { children, className } = props
  const classes = cx('header', className)
  const rest = getUnhandledProps(PopupHeader, props)
  const ElementType = getElementType(PopupHeader, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

PopupHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

PopupHeader._meta = {
  name: 'PopupHeader',
  type: META.TYPES.MODULE,
  parent: 'Popup',
}

PopupHeader.create = createShorthandFactory(PopupHeader, children => ({ children }))
