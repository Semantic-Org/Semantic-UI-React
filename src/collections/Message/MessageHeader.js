import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
} from '../../lib'

/**
 * A message can contain a header.
 */
const MessageHeader = React.forwardRef(function (props, ref) {
  const { children, className, content } = props

  const classes = cx('header', className)
  const rest = getUnhandledProps(MessageHeader, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

MessageHeader.displayName = 'MessageHeader'
MessageHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

MessageHeader.create = createShorthandFactory(MessageHeader, (val) => ({ content: val }))

export default MessageHeader
