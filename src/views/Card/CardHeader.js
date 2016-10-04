import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A card can contain a header
 */
function CardHeader(props) {
  const { className, children, content } = props
  const classes = cx(className, 'header')
  const rest = getUnhandledProps(CardHeader, props)
  const ElementType = getElementType(CardHeader, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

CardHeader._meta = {
  name: 'CardHeader',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the CardHeader. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the CardHeader className */
  className: PropTypes.string,

  /** Primary content of the CardHeader. Mutually exclusive with children. */
  content: customPropTypes.shorthand,
}

export default CardHeader
