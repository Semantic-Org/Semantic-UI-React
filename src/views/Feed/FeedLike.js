import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import Icon from '../../elements/Icon'

/**
 * A feed can contain a like element.
 */
function FeedLike(props) {
  const {
    children,
    className,
    content,
    icon,
  } = props

  const classes = cx('like', className)
  const rest = getUnhandledProps(FeedLike, props)
  const ElementType = getElementType(FeedLike, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {Icon.create(icon)}
      {content}
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
}

FeedLike.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Shorthand for icon. Mutually exclusive with children. */
  icon: customPropTypes.itemShorthand,
}

export default FeedLike
