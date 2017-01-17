import _ from 'lodash'
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
 */
function ItemMeta(props) {
  const { children, className, content } = props
  const classes = cx(className, 'meta')
  const rest = getUnhandledProps(ItemMeta, props)
  const ElementType = getElementType(ItemMeta, props)

  return <ElementType {...rest} className={classes}>{_.isNil(children) ? content : children}</ElementType>
}

ItemMeta._meta = {
  name: 'ItemMeta',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

ItemMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default ItemMeta
