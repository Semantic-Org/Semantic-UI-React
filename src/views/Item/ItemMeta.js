import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * An item can contain content metadata.
 * */
function ItemMeta(props) {
  const { children, className, content } = props
  const classes = cx(className, 'meta')
  const rest = getUnhandledProps(ItemMeta, props)
  const ElementType = getElementType(ItemMeta, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

ItemMeta._meta = {
  name: 'ItemMeta',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

ItemMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the ItemMeta. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the ItemMeta className. */
  className: PropTypes.string,

  /** Primary content of the ItemMeta. Mutually exclusive with the children prop. */
  content: customPropTypes.shorthand,
}

export default ItemMeta
