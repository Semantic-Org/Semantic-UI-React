import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function DropdownDivider(props) {
  const { className } = props
  const classes = cx('divider', className)
  const rest = getUnhandledProps(DropdownDivider, props)
  const ElementType = getElementType(DropdownDivider, props)

  return <ElementType {...rest} className={classes} />
}

DropdownDivider._meta = {
  name: 'DropdownDivider',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownDivider.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,
}

export default DropdownDivider
