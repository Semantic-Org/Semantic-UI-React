import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'
import { createIcon } from '../../factories'

function FeedLike(props) {
  const { children, className, icon, like } = props
  const classes = cx(className, 'like')
  const rest = getUnhandledProps(FeedLike, props)

  return (
    <a {...rest} className={classes}>
      {createIcon(icon)}
      {children || like}
    </a>
  )
}

FeedLike._meta = {
  name: 'FeedLike',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedLike.defaultProps = {
  icon: 'like',
}

FeedLike.propTypes = {
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
