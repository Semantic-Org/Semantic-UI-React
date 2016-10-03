import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A card can contain content metadata
 */
function CardMeta(props) {
  const { className, children, content } = props
  const classes = cx(className, 'meta')
  const rest = getUnhandledProps(CardMeta, props)
  const ElementType = getElementType(CardMeta, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

CardMeta._meta = {
  name: 'CardMeta',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the CardMeta. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the CardMeta className */
  className: PropTypes.string,

  /** Primary content of the CardMeta. Mutually exclusive with children. */
  content: customPropTypes.shorthand,
}

export default CardMeta
