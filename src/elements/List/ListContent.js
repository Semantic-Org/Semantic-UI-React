import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function ListContent(props) {
  const { children, className } = props
  const classes = cx(className, 'content')

  const ElementType = getElementType(ListContent, props)
  const rest = getUnhandledProps(ListContent, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

ListContent._meta = {
  name: 'ListContent',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListContent.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the ListContent. */
  children: PropTypes.node,

  /** Classes to add to the ListContent className. */
  className: PropTypes.string,
}

export default ListContent
