import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A comment can contain an action.
 */
function CommentAction(props) {
  const { active, className, children } = props

  const classes = cx(
    useKeyOnly(active, 'active'),
    className
  )
  const rest = getUnhandledProps(CommentAction, props)
  const ElementType = getElementType(CommentAction, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

CommentAction._meta = {
  name: 'CommentAction',
  parent: 'Comment',
  type: META.TYPES.VIEW,
}

CommentAction.defaultProps = {
  as: 'a',
}

CommentAction.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Style as the currently active action. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default CommentAction
