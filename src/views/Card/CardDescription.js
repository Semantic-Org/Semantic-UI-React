import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A card can contain a description with one or more paragraphs
 */
function CardDescription(props) {
  const { className, children, content } = props
  const classes = cx(className, 'description')
  const rest = getUnhandledProps(CardDescription, props)
  const ElementType = getElementType(CardDescription, props)

  return <ElementType {...rest} className={classes}>{ children || content }</ElementType>
}

CardDescription._meta = {
  name: 'CardDescription',
  parent: 'Card',
  type: META.TYPES.VIEW,
}

CardDescription.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the CardDescription. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the CardDescription className. */
  className: PropTypes.string,

  /** Primary content of the CardDescription. Mutually exclusive with children. */
  content: customPropTypes.shorthand,
}

export default CardDescription
