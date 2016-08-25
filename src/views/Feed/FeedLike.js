import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import { createIcon } from '../../factories'

function FeedLike(props) {
  const { children, className, icon, like } = props
  const classes = cx(className, 'like')
  const rest = getUnhandledProps(FeedLike, props)
  const ElementType = getElementType(FeedLike, props)

  return (
    <ElementType {...rest} className={classes}>
      {createIcon(icon)}
      {children || like}
    </ElementType>
  )
}

FeedLike._meta = {
  name: 'FeedLike',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedLike.defaultProps = {
  as: 'a',
  icon: 'like',
}

FeedLike.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the FeedLike. */
  children: customPropTypes.every([
    customPropTypes.disallow(['like']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedLike className. */
  className: PropTypes.string,

  /** Name of icon for FeedLike. */
  icon: PropTypes.node,

  /** Primary content of the FeedLike, mutually exclusive with children prop. */
  like: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

export default FeedLike
