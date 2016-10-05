import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function CommentGroup(props) {
  const {
    className,
    children,
    collapsed,
    minimal,
    threaded,
  } = props

  const classes = cx(
    'ui',
    useKeyOnly(collapsed, 'collapsed'),
    useKeyOnly(minimal, 'minimal'),
    useKeyOnly(threaded, 'threaded'),
    'comments',
    className,
  )
  const rest = getUnhandledProps(CommentGroup, props)
  const ElementType = getElementType(CommentGroup, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentGroup._meta = {
  name: 'CommentGroup',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Comments can be collapsed, or hidden from view. */
  collapsed: PropTypes.bool,

  /** Comments can hide extra information unless a user shows intent to interact with a comment */
  minimal: PropTypes.bool,

  /** A comment list can be threaded to showing the relationship between conversations */
  threaded: PropTypes.bool,
}

export default CommentGroup
