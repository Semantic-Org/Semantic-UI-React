import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  childrenUtils,
  createShorthand,
  customPropTypes,
  META,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'
import Icon from '../../elements/Icon'

/**
 * An item sub-component for Dropdown component
 */
export default class DropdownItem extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

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

  static _meta = {
    name: 'DropdownItem',
    parent: 'Dropdown',
    type: META.TYPES.MODULE,
  }

  handleClick = (e) => {
    const { onClick, value } = this.props

    if (onClick) onClick(e, value)
  }

  render() {
    const {
      active,
      children,
      className,
      disabled,
      description,
      icon,
      selected,
      text,
    } = this.props

    const classes = cx(
      useKeyOnly(active, 'active'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(selected, 'selected'),
      'item',
      className,
    )
    // add default dropdown icon if item contains another menu
    const iconName = icon || childrenUtils.someByType(children, 'DropdownMenu') && 'dropdown'
    const rest = getUnhandledProps(DropdownItem, this.props)
    const ElementType = getElementType(DropdownItem, this.props)

    return (
      <ElementType {...rest} className={classes} onClick={this.handleClick}>
        {createShorthand('span', val => ({ className: 'description', children: val }), description)}
        {Icon.create(iconName)}
        {text}
        {children}
      </ElementType>
    )
  }
}
