import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  META,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'

import Table from '../../collections/Table/Table'

/**
 * A day cell within a calendar month
 */
export default class DayCell extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Style as the currently chosen item. */
    active: PropTypes.bool,

    /** Style as the currently hovered item. */
    hovered: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** A dropdown item can be disabled. */
    disabled: PropTypes.bool,

    /**
     * The item currently selected by keyboard shortcut.
     * This is not the active item.
     */
    selected: PropTypes.bool,

    /** The date behind this day cell **/
    date: customPropTypes.DateValue,

    /** Stored value. */
    day: PropTypes.number,

    /** The index of this day cell in the calendar month (0-42) */
    index: PropTypes.number,

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,
  }

  static _meta = {
    name: 'DayCell',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  handleClick = (e) => {
    const { onClick } = this.props

    if (onClick) onClick(e, this.props)
    e.stopPropagation()
  }

  render() {
    const {
      active,
      className,
      disabled,
      selected,
    } = this.props
    // TODO: make sense of active/selected. Hovered was meant as active but
    // active is used instead.  need to find a class for selected days (different
    // background?)
    const classes = cx(
      useKeyOnly(active, 'active'),
      useKeyOnly(disabled, 'disabled'),
      useKeyOnly(selected, 'selected'),
      'item',
      className,
    )
    const rest = getUnhandledProps(DayCell, this.props)
    const ariaOptions = {
      role: 'option',
      'aria-disabled': disabled,
      'aria-checked': active,
      'aria-selected': selected,
    }

    return (
      <Table.Cell
        {...rest}
        {...ariaOptions}
        className={classes}
        onClick={this.handleClick}
        selectable
        positive={selected}
        style={{ border: 'none' }}
      >
        <a style={{ cursor: 'pointer' }}>{this.props.day}</a>
      </Table.Cell>
    )
  }
}
