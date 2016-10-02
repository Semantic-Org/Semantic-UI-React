import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function FeedUser(props) {
  const { children, className, content } = props
  const classes = cx(className, 'user')
  const rest = getUnhandledProps(FeedUser, props)
  const ElementType = getElementType(FeedUser, props)

  return <ElementType {...rest} className={classes}>{children || content}</ElementType>
}

FeedUser._meta = {
  name: 'FeedUser',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedUser.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the FeedUser. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedUser className. */
  className: PropTypes.string,

  /** Shorthand for children. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),
}

FeedUser.defaultProps = {
  as: 'a',
}

export default FeedUser
