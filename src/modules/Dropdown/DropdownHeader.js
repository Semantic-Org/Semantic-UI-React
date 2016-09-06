import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'

function DropdownHeader(props) {
  const { className, children } = props
  const classes = cx('header', className)
  const rest = getUnhandledProps(DropdownHeader, props)
  const ElementType = getElementType(DropdownHeader, props)

  return <ElementType className={classes} {...rest}>{children}</ElementType>
}

DropdownHeader._meta = {
  name: 'DropdownHeader',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownHeader.propTypes = {
  /** An element type to render as (string or function) */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content */
  children: PropTypes.node,

  /** Additional classes */
  className: PropTypes.node,
}

export default DropdownHeader
