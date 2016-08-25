import React, { PropTypes } from 'react'
import cx from 'classnames'

import { getElementType, getUnhandledProps, META } from '../../lib'

function DropdownMenu(props) {
  const { children, className } = props
  const classes = cx('menu transition', className)
  const rest = getUnhandledProps(DropdownMenu, props)
  const ElementType = getElementType(DropdownMenu, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

DropdownMenu._meta = {
  name: 'DropdownMenu',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownMenu.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Should be <Dropdown.Item /> components. */
  children: PropTypes.node,

  /** Classes to add to the className. */
  className: PropTypes.string,
}

export default DropdownMenu
