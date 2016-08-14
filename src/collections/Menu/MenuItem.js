import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function MenuItem(props) {
  const { active, children, className, header } = props
  const classes = cx(
    className,
    useKeyOnly(active, 'active'),
    useKeyOnly(header, 'header'),
    'item',
  )
  const rest = getUnhandledProps(MenuItem, props)
  const ElementType = getElementType(MenuItem, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

MenuItem._meta = {
  name: 'MenuItem',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
}

MenuItem.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** A menu item can be active. */
  active: PropTypes.bool,

  /** Primary content of the MenuItem. */
  children: PropTypes.node,

  /** Classes that will be added to the MenuItem className. */
  className: PropTypes.string,

  /** A menu item may include a header or may itself be a header. */
  header: PropTypes.bool,
}

MenuItem.defaultProps = {
  as: 'a',
}

export default MenuItem
