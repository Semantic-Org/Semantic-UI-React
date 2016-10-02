import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  createShorthand,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import FeedLike from './FeedLike'

function FeedMeta(props) {
  const { children, className, content, like } = props
  const classes = cx(className, 'meta')
  const rest = getUnhandledProps(FeedMeta, props)
  const ElementType = getElementType(FeedMeta, props)

  if (children) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {createShorthand(FeedLike, val => ({ content: val }), like)}
      {content}
    </ElementType>
  )
}

FeedMeta._meta = {
  name: 'FeedMeta',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedMeta.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the FeedMeta. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content', 'like']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedMeta className. */
  className: PropTypes.string,

  /** Shorthand for children. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),

  /** Shorthand for the FeedLike component. Mutually exclusive with children. */
  like: FeedLike.propTypes.content,
}

export default FeedMeta
