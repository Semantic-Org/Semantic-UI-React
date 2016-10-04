import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * An item can contain extra content meant to be formatted separately from the main content
 * */
function ItemExtra(props) {
  const { children, className, content } = props
  const classes = cx(className, 'extra')
  const rest = getUnhandledProps(ItemExtra, props)
  const ElementType = getElementType(ItemExtra, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

ItemExtra._meta = {
  name: 'ItemExtra',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

ItemExtra.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the ItemExtra. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the ItemExtra className. */
  className: PropTypes.string,

  /** Shorthand for primary content of the ItemExtra. Mutually exclusive with the children. */
  content: customPropTypes.shorthand,
}

export default ItemExtra
