import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'

/**
 * A pushable sub-component for Sidebar.
 */
const SidebarPusher = React.forwardRef(function (props, ref) {
  const { className, dimmed, children, content } = props

  const classes = cx('pusher', useKeyOnly(dimmed, 'dimmed'), className)
  const rest = getUnhandledProps(SidebarPusher, props)
  const ElementType = getElementType(SidebarPusher, props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

SidebarPusher.displayName = 'SidebarPusher'
SidebarPusher.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Controls whether or not the dim is displayed. */
  dimmed: PropTypes.bool,
}

export default SidebarPusher
