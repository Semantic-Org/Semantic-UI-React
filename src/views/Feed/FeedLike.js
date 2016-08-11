import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps, iconPropRenderer } from '../../utils/propUtils'

function FeedLike(props) {
  const { children, className, icon, like } = props
  const classes = cx(className, 'like')
  const rest = getUnhandledProps(FeedLike, props)

  return (
    <a {...rest} className={classes}>
      {iconPropRenderer(icon)}
      {children || like}
    </a>
  )
}

FeedLike._meta = {
  name: 'FeedLike',
  parent: 'Feed',
  type: META.type.view,
}

FeedLike.defaultProps = {
  icon: 'like',
}

FeedLike.propTypes = {
  /** Primary content of the FeedLike. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['like']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedLike className. */
  className: PropTypes.string,

  /** Name of icon for FeedLike. */
  icon: PropTypes.node,

  /** Primary content of the FeedLike, mutually exclusive with children prop. */
  like: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.string,
  ]),
}

export default FeedLike
