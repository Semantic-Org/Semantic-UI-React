import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A menu can contain a sub menu.
 */
function MenuMenu(props) {
  const { children, className, position } = props

  const classes = cx(
    position,
    'menu',
    className,
  )
  const rest = getUnhandledProps(MenuMenu, props)
  const ElementType = getElementType(MenuMenu, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

MenuMenu._meta = {
  name: 'MenuMenu',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
}

MenuMenu.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A sub menu can take left or right position. */
  position: PropTypes.oneOf(['left', 'right']),
}

export default MenuMenu
