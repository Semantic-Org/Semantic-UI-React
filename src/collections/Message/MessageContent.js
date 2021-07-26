import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenUtils, customPropTypes, getElementType, getUnhandledProps } from '../../lib'

/**
 * A message can contain a content.
 */
const MessageContent = React.forwardRef(function (props, ref) {
  const { children, className, content } = props
  const classes = cx('content', className)
  const rest = getUnhandledProps(MessageContent, props)
  const ElementType = getElementType(MessageContent, props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

MessageContent.displayName = 'MessageContent'
MessageContent.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default MessageContent
