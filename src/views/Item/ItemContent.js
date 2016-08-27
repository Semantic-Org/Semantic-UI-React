import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function ItemContent(props) {
  const { children, className, content } = props
  const classes = cx(className, 'content')
  const rest = getUnhandledProps(ItemContent, props)
  const ElementType = getElementType(ItemContent, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

ItemContent._meta = {
  name: 'ItemContent',
  parent: 'Item',
  type: META.TYPES.VIEW,
}

ItemContent.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the ItemContent. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the ItemContent className. */
  className: PropTypes.string,

  /** Primary content of the ItemContent. Mutually exclusive with the children prop. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

export default ItemContent
