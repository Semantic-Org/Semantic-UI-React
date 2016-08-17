import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function MenuHeader(props) {
  const { children, className } = props
  const classes = cx(className, 'header')
  const ElementType = getElementType(MenuHeader, props)
  const rest = getUnhandledProps(MenuHeader, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

MenuHeader._meta = {
  name: 'MenuItem',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
}

MenuHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the MenuItem. */
  children: PropTypes.node,

  /** Classes that will be added to the MenuItem className. */
  className: PropTypes.string,
}

export default MenuHeader
