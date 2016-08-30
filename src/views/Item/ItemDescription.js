import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * An item can contain a description with a single or multiple paragraphs
 * */
function ItemDescription(props) {
  const { children, className, content } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(ItemDescription, props)
  const ElementType = getElementType(ItemDescription, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

ItemDescription._meta = {
  name: 'ItemDescription',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

ItemDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the ItemDescription. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the ItemDescription className. */
  className: PropTypes.string,

  /** Primary content of the ItemDescription. Mutually exclusive with the children prop. */
  content: customPropTypes.shorthand,
}

export default ItemDescription
