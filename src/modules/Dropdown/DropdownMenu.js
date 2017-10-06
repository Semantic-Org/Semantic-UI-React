import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A dropdown menu can contain a menu.
 */
function DropdownMenu(props) {
  const { children, className, content, direction, scrolling } = props
  const classes = cx(
    useKeyOnly(direction, 'left'),
    useKeyOnly(scrolling, 'scrolling'),
    'menu transition',
    className,
  )
  const rest = getUnhandledProps(DropdownMenu, props)
  const ElementType = getElementType(DropdownMenu, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

DropdownMenu._meta = {
  name: 'DropdownMenu',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownMenu.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** A dropdown can be positioned to the left */
  direction: PropTypes.oneOf(['left']),

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** A dropdown menu can scroll. */
  scrolling: PropTypes.bool,
}

export default DropdownMenu
