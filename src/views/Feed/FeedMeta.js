import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthand,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import FeedLike from './FeedLike'

/**
 * A feed can contain a meta.
 */
function FeedMeta(props) {
  const {
    children,
    className,
    content,
    like,
  } = props

  const classes = cx('meta', className)
  const rest = getUnhandledProps(FeedMeta, props)
  const ElementType = getElementType(FeedMeta, props)

  if (!childrenUtils.isNil(children)) {
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

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for FeedLike. */
  like: customPropTypes.itemShorthand,
}

export default FeedMeta
