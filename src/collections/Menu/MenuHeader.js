import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function MenuHeader(props) {
  const { children, className, content } = props
  const classes = cx(className, 'header')
  const ElementType = getElementType(MenuHeader, props)
  const rest = getUnhandledProps(MenuHeader, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

MenuHeader._meta = {
  name: 'MenuHeader',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
}

MenuHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content */
  children: PropTypes.node,

  /** Additional classes */
  className: PropTypes.string,

  /** Shorthand for primary content */
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

export default MenuHeader
