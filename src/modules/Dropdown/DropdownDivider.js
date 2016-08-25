import cx from 'classnames'
import React, { PropTypes } from 'react'

import { getElementType, getUnhandledProps, META } from '../../lib'

function DropdownDivider(props) {
  const { className } = props
  const classes = cx('divider', className)
  const rest = getUnhandledProps(DropdownDivider, props)
  const ElementType = getElementType(DropdownDivider, props)

  return <ElementType className={classes} {...rest} />
}

DropdownDivider._meta = {
  name: 'DropdownDivider',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Additional classes */
  className: PropTypes.node,
}

export default DropdownDivider
