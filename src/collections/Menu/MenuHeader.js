import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function MenuHeader(props) {
  const { children, className, content } = props
  const classes = cx(className, 'header')
  const rest = getUnhandledProps(MenuHeader, props)
  const ElementType = getElementType(MenuHeader, props)

  return <ElementType {...rest} className={classes}>{_.isNil(children) ? content : children}</ElementType>
}

MenuHeader._meta = {
  name: 'MenuHeader',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
}

MenuHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default MenuHeader
