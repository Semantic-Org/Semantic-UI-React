import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
  SUI,
  getKeyOnly,
} from '../../lib'

/**
 * Comments can be grouped.
 */
const CommentGroup = React.forwardRef(function (props, ref) {
  const { className, children, collapsed, content, minimal, size, threaded } = props

  const classes = cx(
    'ui',
    size,
    getKeyOnly(collapsed, 'collapsed'),
    getKeyOnly(minimal, 'minimal'),
    getKeyOnly(threaded, 'threaded'),
    'comments',
    className,
  )
  const rest = getUnhandledProps(CommentGroup, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

CommentGroup.displayName = 'CommentGroup'
CommentGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Comments can be collapsed, or hidden from view. */
  collapsed: PropTypes.bool,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Comments can hide extra information unless a user shows intent to interact with a comment. */
  minimal: PropTypes.bool,

  /** Comments can have different sizes. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium')),

  /** A comment list can be threaded to showing the relationship between conversations. */
  threaded: PropTypes.bool,
}

export default CommentGroup
