import _ from 'lodash'
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

import Menu from '../../collections/Menu/Menu'

/**
 * A day cell within a calendar month
 */
export default class CalendarHeader extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

    /** Month name **/
    monthName: PropTypes.string,

    /** Month number **/
    month: PropTypes.number,

    /** Year **/
    year: PropTypes.number,

    /** Current date **/
    date: PropTypes.any,

    /** Current calendar mode **/
    mode: PropTypes.string,
    /**
     * Called when a mode switch is performed (like switching from month view to
     * month or year selection)
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onChangeMode: PropTypes.func,
    /**
     * Called when paginating across months
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onPrevious: PropTypes.func,
    onNext: PropTypes.func,
  }

  static _meta = {
    name: 'CalendarHeader',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  handleClick = (e) => {

    e.stopPropagation()
  }

  render() {
    const {
      className,
      monthName,
      month,
      year,
      onPrevious,
      onNext,
      onChangeMode,
      mode,
      date
    } = this.props

    const items = _.compact([
      mode === 'DAY' && (
        <Menu.Item key='month' onClick={onChangeMode.bind(null, 'MONTH')}>
          {monthName}
        </Menu.Item>
      ),
      mode === 'YEAR' && (
        <Menu.Item key='year' onClick={onChangeMode.bind(null, 'YEAR')}>
          {year - 8}-{year + 7}
        </Menu.Item>
      ),
      ['HOUR', 'MINUTE'].indexOf(mode) > -1 && (
        <Menu.Item key='month' onClick={onChangeMode.bind(null, 'MONTH')}>
          {monthName}&nbsp;{date.getDate()}
        </Menu.Item>
      ),
      ['DAY', 'MONTH', 'HOUR', 'MINUTE'].indexOf(mode) > -1 && (
        <Menu.Item key='year' onClick={onChangeMode.bind(null, 'YEAR')}>
          {year}
        </Menu.Item>
      ),
    ])

    // allow the popup to define the borders
    // keep the bottom border between the calendar and the menu
    const style = {
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none',
    }

    return (
      <Menu attached='top' fluid secondary widths={items.length + 2} style={style}>
        <Menu.Item icon='angle double left' onClick={onPrevious} />
        {items}
        <Menu.Item icon='angle double right' onClick={onNext} />
      </Menu>
    )
  }
}
