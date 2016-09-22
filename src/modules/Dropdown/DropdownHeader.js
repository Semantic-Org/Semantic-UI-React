import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import { createIcon } from '../../factories'

function DropdownHeader(props) {
  const { className, children, content, icon } = props
  const classes = cx('header', className)
  const rest = getUnhandledProps(DropdownHeader, props)
  const ElementType = getElementType(DropdownHeader, props)

  if (children) {
    return (
      <ElementType className={classes} {...rest}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType className={classes} {...rest}>
      {createIcon(icon)}
      {content}
    </ElementType>
  )
}

DropdownHeader._meta = {
  name: 'DropdownHeader',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownHeader.propTypes = {
  /** An element type to render as (string or function) */
  as: customPropTypes.as,

  /** Primary content of the header, same as content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content', 'icon']),
    PropTypes.node,
  ]),

  /** Additional classes */
  className: PropTypes.node,

  /** Primary content of the header, same as children. */
  content: PropTypes.node,

  /** Add an icon by icon name or pass an <Icon /> */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
  ]),
}

export default DropdownHeader
