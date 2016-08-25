import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function FeedUser(props) {
  const { children, className, user } = props
  const classes = cx(className, 'user')
  const rest = getUnhandledProps(FeedUser, props)
  const ElementType = getElementType(FeedUser, props)

  return <ElementType {...rest} className={classes}>{children || user}</ElementType>
}

FeedUser._meta = {
  name: 'FeedUser',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedUser.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

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

FeedUser.defaultProps = {
  as: 'a',
}

export default FeedUser
