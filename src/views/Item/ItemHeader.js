import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * An item can contain a header
 * */
function ItemHeader(props) {
  const { children, className, content } = props
  const classes = cx(className, 'header')
  const rest = getUnhandledProps(ItemHeader, props)
  const ElementType = getElementType(ItemHeader, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

ItemHeader._meta = {
  name: 'ItemHeader',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

ItemHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the ItemHeader. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the ItemHeader className. */
  className: PropTypes.string,

  /** Primary content of the ItemHeader. Mutually exclusive with the children prop. */
  content: customPropTypes.shorthand,
}

export default ItemHeader
