import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
   customPropTypes,
   getUnhandledProps,
   META,
} from '../../lib'

function FeedUser(props) {
  const { children, className, user } = props
  const classes = cx(className, 'user')
  const rest = getUnhandledProps(FeedUser, props)

  return <a {...rest} className={classes}>{children || user}</a>
}

FeedUser._meta = {
  name: 'FeedUser',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedUser.propTypes = {
  /** Primary content of the FeedUser. */
  children: customPropTypes.every([
    customPropTypes.disallow(['user']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedUser className. */
  className: PropTypes.string,

  /** Shorthand for primary content of the FeedUser. Mutually exclusive with the children prop. */
  user: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.string,
  ]),
}

export default FeedUser
