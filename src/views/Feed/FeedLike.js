import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenUtils, customPropTypes, getElementType, getUnhandledProps } from '../../lib'
import Icon from '../../elements/Icon'

/**
 * A feed can contain a like element.
 */
const FeedLike = React.forwardRef(function (props, ref) {
  const { children, className, content, icon } = props

  const classes = cx('like', className)
  const rest = getUnhandledProps(FeedLike, props)
  const ElementType = getElementType(FeedLike, props)

  if (!childrenUtils.isNil(children)) {
    return (
      <ElementType {...rest} className={classes} ref={ref}>
        {children}
      </ElementType>
    )
  }

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {Icon.create(icon, { autoGenerateKey: false })}
      {content}
    </ElementType>
  )
})

FeedLike.defaultProps = {
  as: 'a',
}

FeedLike.displayName = 'FeedLike'
FeedLike.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

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
