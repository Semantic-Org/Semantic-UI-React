import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function ListHeader(props) {
  const { children, className, content } = props
  const classes = cx(className, 'header')
  const rest = getUnhandledProps(ListHeader, props)
  const ElementType = getElementType(ListHeader, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

ListHeader._meta = {
  name: 'ListHeader',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

ListHeader.create = createShorthandFactory(ListHeader, content => ({ content }))

export default ListHeader
