import React, { PropTypes } from 'react'
import cx from 'classnames'

import {
  childrenUtils,
  customPropTypes,
  META,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'
import { Icon } from '../../elements'

function DropdownItem(props) {
  const {
    active,
    children,
    className,
    disabled,
    description,
    icon,
    onClick,
    selected,
    text,
    value,
  } = props

  const handleClick = (e) => {
    if (onClick) onClick(e, value)
  }

  const classes = cx(
    useKeyOnly(active, 'active'),
    useKeyOnly(disabled, 'disabled'),
    useKeyOnly(selected, 'selected'),
    'item',
    className,
  )
  // add default dropdown icon if item contains another menu
  const iconName = icon || childrenUtils.someByType(children, 'DropdownMenu') && 'dropdown'
  const iconClasses = cx(iconName, 'icon')
  const ElementType = getElementType(DropdownItem, props)
  const rest = getUnhandledProps(DropdownItem, props)

  return (
    <ElementType {...rest} className={classes} onClick={handleClick}>
      {description && <span className='description'>{description}</span>}
      {iconName && <Icon name={iconClasses} />}
      {text}
      {children}
    </ElementType>
  )
}

DropdownItem._meta = {
  name: 'DropdownItem',
  parent: 'Dropdown',
  type: META.TYPES.MODULE,
}

DropdownItem.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Style as the currently chosen item. */
  active: PropTypes.bool,

  /** Primary content. */
  children: customPropTypes.every([
    customPropTypes.disallow(['text']),
    PropTypes.node,
  ]),

  /** Additional className. */
  className: PropTypes.string,

  /** Additional text with less emphasis. */
  description: PropTypes.string,

  /** A dropdown item can be disabled. */
  disabled: PropTypes.bool,

  /** Add an icon to the item. */
  icon: PropTypes.string,

  /**
   * The item currently selected by keyboard shortcut.
   * This is not the active item.
   */
  selected: PropTypes.bool,

  /** Display text. */
  text: customPropTypes.every([
    customPropTypes.disallow(['children']),
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ]),

  /** Stored value */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  /** Called on click with (event, value, text). */
  onClick: PropTypes.func,
}

export default DropdownItem
