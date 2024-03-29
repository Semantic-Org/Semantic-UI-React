import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'

import { childrenUtils, customPropTypes, getComponentType, getUnhandledProps } from '../../lib'

/**
 * A pushable sub-component for Sidebar.
 */
const SidebarPushable = React.forwardRef(function (props, ref) {
  const { className, children, content } = props
  const classes = cx('pushable', className)
  const rest = getUnhandledProps(SidebarPushable, props)
  const ElementType = getComponentType(props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

SidebarPushable.displayName = 'SidebarPushable'
SidebarPushable.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default SidebarPushable
