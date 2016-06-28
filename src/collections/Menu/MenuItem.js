import React, { PropTypes } from 'react'
import cx from 'classnames'
import META from '../../utils/Meta'
import Label from '../../elements/Label/Label'

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
  library: META.library.semanticUI,
  name: 'MenuItem',
  type: META.type.collection,
  parent: 'Menu',
}

MenuItem.propTypes = {
  __onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  name: PropTypes.string,
  onClick: PropTypes.func,
}

export default MenuItem
