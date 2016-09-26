import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function List(props) {
  const { children, className } = props
  const classes = cx('ui', className, 'item')

  const ElementType = getElementType(List, props)
  const rest = getUnhandledProps(List, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

List._meta = {
  name: 'List',
  type: META.TYPES.ELEMENT,
}

List.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the List */
  children: PropTypes.node,

  /** Classes to add to the List className. */
  className: PropTypes.string,
}

export default List
