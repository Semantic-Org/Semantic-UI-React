import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function ListDescription(props) {
  const { children, className } = props
  const classes = cx(className, 'description')

  const ElementType = getElementType(ListDescription, props)
  const rest = getUnhandledProps(ListDescription, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

ListDescription._meta = {
  name: 'ListDescription',
  parent: 'List',
  type: META.TYPES.ELEMENT,
}

ListDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the ListDescription. */
  children: PropTypes.node,

  /** Classes to add to the ListDescription className. */
  className: PropTypes.string,
}

export default ListDescription
