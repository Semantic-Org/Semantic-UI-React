import React, { PropTypes } from 'react'
import cx from 'classnames'

import { META } from '../../lib'
import { Label } from '../../elements'

function MenuItem({ __onClick, active, children, className, label, name, onClick, ...rest }) {
  const handleClick = (e) => {
    if (__onClick) __onClick(name)
    if (onClick) onClick(name)
  }

  const classes = cx(
    active && 'active',
    className,
    'item',
  )

  return (
    <a {...rest} className={classes} onClick={handleClick}>
      {name}
      {label && <Label>{label}</Label>}
      {children}
    </a>
  )
}

MenuItem._meta = {
  name: 'MenuItem',
  type: META.TYPES.COLLECTION,
  parent: 'Menu',
}

MenuItem.propTypes = {
  __onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  onClick: PropTypes.func,
}

export default MenuItem
