import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import { childrenUtils, customPropTypes, getComponentType, getUnhandledProps } from '../../lib'

/**
 * A comment can contain metadata about the comment, an arbitrary amount of metadata may be defined.
 */
const CommentMetadata = React.forwardRef(function (props, ref) {
  const { className, children, content } = props
  const classes = cx('metadata', className)
  const rest = getUnhandledProps(CommentMetadata, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

CommentMetadata.displayName = 'CommentMetadata'
CommentMetadata.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default CommentMetadata
