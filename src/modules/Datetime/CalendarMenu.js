import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
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

    // TODO consider using `value` instead
    /** Current date **/
    date: PropTypes.any,

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
      date,
      mode,
      monthName,
      onChangeMode,
      onNext,
      onPrevious,
      year,
    } = this.props

    const items = _.compact([
      mode === 'day' && (
        <Menu.Item key='month' onClick={onChangeMode.bind(null, 'month')}>
          {monthName}
        </Menu.Item>
      ),
      mode === 'year' && (
        <Menu.Item key='year' onClick={onChangeMode.bind(null, 'year')}>
          {year - 8}-{year + 7}
        </Menu.Item>
      ),
      _.includes(mode, ['hour', 'minute']) && (
        <Menu.Item key='hour-minute' onClick={onChangeMode.bind(null, 'month')}>
          {monthName}&nbsp;{date.getDate()}
        </Menu.Item>
      ),
      _.includes(mode, ['day', 'month', 'hour', 'minute']) && (
        <Menu.Item key='year' onClick={onChangeMode.bind(null, 'year')}>
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
