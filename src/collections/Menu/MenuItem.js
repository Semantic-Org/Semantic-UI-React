import React, { PropTypes } from 'react'
import cx from 'classnames'

import { getElementType, META } from '../../lib'
import { Label } from '../../elements'

function MenuItem(props) {
  const { __onClick, active, children, className, label, name, onClick, ...rest } = props
  const handleClick = (e) => {
    if (__onClick) __onClick(name)
    if (onClick) onClick(name)
  }

  const classes = cx(
    active && 'active',
    className,
    'item',
  )

  const ElementType = getElementType(MenuItem, props)

  return (
    <ElementType {...rest} className={classes} onClick={handleClick}>
      {name}
      {label && <Label>{label}</Label>}
      {children}
    </ElementType>
  )
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

  __onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  onClick: PropTypes.func,
}

MenuItem.defaultProps = {
  as: 'a',
}

export default MenuItem
