import _ from 'lodash'
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

  return <ElementType {...rest} className={classes}>{_.isNil(children) ? content : children}</ElementType>
}

FeedUser._meta = {
  name: 'FeedUser',
  parent: 'Feed',
  type: META.TYPES.VIEW,
}

FeedUser.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

FeedUser.defaultProps = {
  as: 'a',
}

export default FeedUser
