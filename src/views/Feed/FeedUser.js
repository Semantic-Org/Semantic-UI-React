import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { customPropTypes, getUnhandledProps } from '../../utils/propUtils'

function FeedUser(props) {
  const { children, className, user } = props
  const classes = cx(className, 'user')
  const rest = getUnhandledProps(FeedUser, props)

  return <a {...rest} className={classes}>{children || user}</a>
}

FeedUser._meta = {
  name: 'FeedUser',
  parent: 'Feed',
  type: META.type.view,
}

FeedUser.propTypes = {
  /** Primary content of the FeedUser. */
  children: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['user']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedUser className. */
  className: PropTypes.string,

  /** Shorthand for primary content of the FeedUser. Mutually exclusive with the children prop. */
  user: customPropTypes.all([
    customPropTypes.mutuallyExclusive(['children']),
    PropTypes.string,
  ]),
}

export default FeedUser
