import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A pushable sub-component for Sidebar.
 */
function SidebarPushable(props) {
  const {
    className,
    children,
  } = props

  const classes = cx(
    'pushable',
    className,
  )
  const rest = getUnhandledProps(SidebarPushable, props)
  const ElementType = getElementType(SidebarPushable, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

SidebarPushable._meta = {
  name: 'SidebarPushable',
  type: META.TYPES.MODULE,
  parent: 'Sidebar',
}

SidebarPushable.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default SidebarPushable
