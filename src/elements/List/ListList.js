import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function ListList(props) {
  const { children, className } = props
  const classes = cx(className, 'list')

  const ElementType = getElementType(ListList, props)
  const rest = getUnhandledProps(ListList, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

ListList._meta = {
  name: 'ListList',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListList.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the ListList. */
  children: PropTypes.node,

  /** Classes to add to the ListList className. */
  className: PropTypes.string,
}

export default ListList
