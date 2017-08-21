import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  META,
} from '../../lib'

import Menu from '../../collections/Menu/Menu'

// `attached` text menus adds borders to the otherwise borderless `text` menu
// remove once this lands: https://github.com/Semantic-Org/Semantic-UI/issues/5205
const style = { border: 'none' }

/**
 * The month and year menu at the top of the calendar.
 */
export default class CalendarMenu extends Component {
  static propTypes = {
    /** Month name **/
    monthName: PropTypes.string,

    // TODO improve description
    /** Year **/
    year: PropTypes.number,

    /** Current day of the month **/
    value: PropTypes.number,

    /** Current calendar mode **/
    mode: PropTypes.oneOf(['minute', 'hour', 'day', 'month', 'year']),

    /**
     * Called when the mode is changed (i.e. switching from month view to year selection).
     *
     * @param {string} mode - The new mode.
     */
    onChangeMode: PropTypes.func,

    /** Called when paginating to the previous month. */
    onPrevious: PropTypes.func,

    /** Called when paginating to the next month. */
    onNext: PropTypes.func,
  }

  static _meta = {
    name: 'CalendarMenu',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  render() {
    const {
      value,
      mode,
      monthName,
      onChangeMode,
      onNext,
      onPrevious,
      year,
    } = this.props

    const items = _.compact([
      mode === 'day' && (
        <Menu.Item key='month' name='month' onClick={onChangeMode}>
          {monthName}
        </Menu.Item>
      ),
      mode === 'year' && (
        <Menu.Item key='year' name='year' onClick={onChangeMode}>
          {year - 8}-{year + 7}
        </Menu.Item>
      ),
      _.includes(mode, ['hour', 'minute']) && (
        <Menu.Item key='hour-minute' name='hour-minute' onClick={onChangeMode}>
          {monthName}&nbsp;{value}
        </Menu.Item>
      ),
      _.includes(mode, ['day', 'month', 'hour', 'minute']) && (
        <Menu.Item key='year' name='year' onClick={onChangeMode}>
          {year}
        </Menu.Item>
      ),
    ])

    return (
      <Menu attached='top' fluid text widths={items.length + 2} style={style}>
        <Menu.Item icon='angle double left' onClick={onPrevious} />
        {items}
        <Menu.Item icon='angle double right' onClick={onNext} />
      </Menu>
    )
  }
}
