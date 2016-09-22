import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import FeedLike from './FeedLike'

function FeedMeta(props) {
  const { children, className, like, meta } = props
  const classes = cx(className, 'meta')
  const rest = getUnhandledProps(FeedMeta, props)
  const ElementType = getElementType(FeedMeta, props)

  return (
    <ElementType {...rest} className={classes}>
      {like && <FeedLike like={like} />}
      {children || meta}
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
    customPropTypes.disallow(['meta']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedMeta className. */
  className: PropTypes.string,

  /** Shorthand for FeedLike. */
  like: PropTypes.node,

  /** Primary content of the FeedMeta. Mutually exclusive with children. */
  meta: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

export default FeedMeta
