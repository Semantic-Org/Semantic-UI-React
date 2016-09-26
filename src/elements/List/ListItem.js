import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function ListItem(props) {
  const { children, className } = props
  const classes = cx(className, 'item')

  const ElementType = getElementType(ListItem, props)
  const rest = getUnhandledProps(ListItem, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

ListItem._meta = {
  name: 'ListItem',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListItem.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the ListItem */
  children: PropTypes.node,

  /** Classes to add to the ListItem className. */
  className: PropTypes.string,
}

export default ListItem
