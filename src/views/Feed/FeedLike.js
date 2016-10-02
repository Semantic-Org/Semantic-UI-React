import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import { Icon } from '../../elements'

function FeedLike(props) {
  const { children, className, content, icon } = props
  const classes = cx(className, 'like')
  const rest = getUnhandledProps(FeedLike, props)
  const ElementType = getElementType(FeedLike, props)

  if (children) {
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

  /** Primary content of the FeedLike. Mutually exclusive with content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['content', 'icon']),
    PropTypes.node,
  ]),

  /** Classes that will be added to the FeedLike className. */
  className: PropTypes.string,

  /** Shorthand for children. Mutually exclusive with children. */
  content: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  ]),

  /** Shorthand for icon. Mutually exclusive with children. */
  icon: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
      PropTypes.element,
    ]),
  ]),
}

export default FeedLike
