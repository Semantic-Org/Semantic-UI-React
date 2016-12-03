import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  useKeyOnly,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A pushable sub-component for Sidebar.
 */
function SidebarPusher(props) {
  const {
    className,
    dimmed,
    children,
  } = props

  const classes = cx(
    'pusher',
    useKeyOnly(dimmed, 'dimmed'),
    className,
  )
  const rest = getUnhandledProps(SidebarPusher, props)
  const ElementType = getElementType(SidebarPusher, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

SidebarPusher._meta = {
  name: 'SidebarPusher',
  type: META.TYPES.MODULE,
  parent: 'Sidebar',
}

SidebarPusher.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Controls whether or not the dim is displayed. */
  dimmed: PropTypes.bool,
}

export default SidebarPusher
