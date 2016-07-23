import React, { PropTypes } from 'react'
import cx from 'classnames'

import Icon from '../../elements/Icon/Icon'
import { someChildType } from '../../utils/childrenUtils'
import { useKeyOnly } from '../../utils/propUtils'
import META from '../../utils/Meta'

function DropdownItem(props) {
  const {
    active,
    children,
    className,
    description,
    icon,
    onClick,
    selected,
    text,
    value,
    ...rest,
  } = props

  const handleClick = (e) => {
    if (onClick) onClick(e, value)
  }

  const classes = cx(
    useKeyOnly(active, 'active'),
    useKeyOnly(selected, 'selected'),
    'item',
    className,
  )
  // add default dropdown icon if item contains another menu
  const iconName = icon || someChildType(children, 'DropdownMenu') && 'dropdown'
  const iconClasses = cx('sd-dropdown-item-icon', iconName, 'icon')

  return (
    <div {...rest} className={classes} onClick={handleClick}>
      {description && <span className='description'>{description}</span>}
      {iconName && <Icon name={iconClasses} />}
      {text}
      {children}
    </div>
  )
}

DropdownItem._meta = {
  library: META.library.semanticUI,
  name: 'DropdownItem',
  parent: 'Dropdown',
  type: META.type.module,
}

DropdownItem.propTypes = {
  /** Style as the currently chosen item. */
  active: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional className. */
  className: PropTypes.string,

  /** Additional text with less emphasis. */
  description: PropTypes.string,

  /** Add an icon to the item. */
  icon: PropTypes.string,

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: PropTypes.bool,

  /** Display text. */
  text: PropTypes.string,

  /** Stored value */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  /** Called on click with (event, value, text). */
  onClick: PropTypes.func,
}

export default DropdownItem
