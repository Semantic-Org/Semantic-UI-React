import React, { PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'

const MenuItem = ({ __onClick, active, children, className, label, name, onClick, ...rest }) => {
  const handleClick = (e) => {
    __onClick(name)
    if (onClick) onClick(name)
  }

  const menuLabel = label && <div className='sd-menu-label ui blue label'>{label}</div>
  const classes = classNames(
    'sd-menu-item',
    active && 'active',
    className,
    'item',
  )

  return (
    <a {...rest} className={classes} onClick={handleClick}>
      {name}
      {menuLabel}
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
