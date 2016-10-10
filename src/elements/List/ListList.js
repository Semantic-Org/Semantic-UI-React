import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function ListList(props) {
  const { children, className } = props

  const rest = getUnhandledProps(ListList, props)
  const ElementType = getElementType(ListList, props)
  const classes = cx(
    useKeyOnly(ElementType !== 'ul' && ElementType !== 'ol', 'list'),
    className,
  )

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

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default ListList
