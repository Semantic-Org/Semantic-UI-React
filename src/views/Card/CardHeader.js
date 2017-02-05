import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A card can contain a header.
 */
function CardHeader(props) {
  const { children, className, content } = props
  const classes = cx(className, 'header')
  const rest = getUnhandledProps(CardHeader, props)
  const ElementType = getElementType(CardHeader, props)

  return (
    <ElementType {...rest} className={classes}>
      {_.isNil(children) ? content : children}
    </ElementType>
  )
}

CardHeader._meta = {
  name: 'CardHeader',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default CardHeader
