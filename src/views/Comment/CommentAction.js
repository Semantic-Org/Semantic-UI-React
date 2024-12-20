import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getComponentType,
  getUnhandledProps,
  getKeyOnly,
} from '../../lib'

/**
 * A comment can contain an action.
 */
const CommentAction = React.forwardRef(function (props, ref) {
  const { active, className, children, content } = props

  const classes = cx(getKeyOnly(active, 'active'), className)
  const rest = getUnhandledProps(CommentAction, props)
  const ElementType = getComponentType(props, { defaultAs: 'a' })

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

CommentAction.displayName = 'CommentAction'
CommentAction.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Style as the currently active action. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default CommentAction
