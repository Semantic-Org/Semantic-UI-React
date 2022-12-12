import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenUtils, customPropTypes, getElementType, getUnhandledProps } from '../../lib'

/**
 * A placeholder segment can be inline.
 */
const SegmentInline = React.forwardRef(function (props, ref) {
  const { children, className, content } = props
  const classes = cx('inline', className)
  const rest = getUnhandledProps(SegmentInline, props)
  const ElementType = getElementType(SegmentInline, props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

SegmentInline.displayName = 'SegmentInline'
SegmentInline.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default SegmentInline
