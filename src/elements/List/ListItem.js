import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function ListItem(props) {
  const {
    active,
    children,
    className,
    value,
  } = props
  const classes = cx(
    useKeyOnly(active, 'active'),
    className,
    'item'
  )

  const ElementType = getElementType(ListItem, props)
  const rest = getUnhandledProps(ListItem, props)
  const valueProp = ElementType === 'li' ? { value } : { dataValue: value }

  return <ElementType {...rest} {...valueProp} className={classes}>{children}</ElementType>
}

ListItem._meta = {
  name: 'ListItem',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListItem.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  active: PropTypes.bool,

  /** Primary content of the ListItem. */
  children: PropTypes.node,

  /** Classes to add to the ListItem className. */
  className: PropTypes.string,

  /** A value for an ordered list. */
  value: PropTypes.string,
}

export default ListItem
