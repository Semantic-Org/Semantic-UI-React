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
  const { children, className, content } = props
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

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default CardMeta
