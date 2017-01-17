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
 * An item can contain a header
 */
function ItemHeader(props) {
  const { children, className, content } = props
  const classes = cx(className, 'header')
  const rest = getUnhandledProps(ItemHeader, props)
  const ElementType = getElementType(ItemHeader, props)

  return <ElementType {...rest} className={classes}>{_.isNil(children) ? content : children}</ElementType>
}

ItemHeader._meta = {
  name: 'ItemHeader',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

ItemHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default ItemHeader
