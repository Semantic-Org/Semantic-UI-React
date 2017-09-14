import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  dateUtils,
  META,
} from '../../lib'

import Menu from '../../collections/Menu'

// `attached` text menus adds borders to the otherwise borderless `text` menu
// remove once this lands: https://github.com/Semantic-Org/Semantic-UI/issues/5205
// const style = { border: 'none' }

/**
 * The month and year menu at the top of the calendar.
 */
export default class CalendarMenu extends Component {
  static propTypes = {
    /** Current day of the month */
    value: PropTypes.number,

    /** Current calendar mode */
    mode: PropTypes.oneOf(['minute', 'hour', 'day', 'month', 'year']),

    /**
     * Called when the mode is changed (i.e. switching from month view to year selection).
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed mode.
     * @param {object} data.mode - The proposed new mode.
     */
    onChangeMode: PropTypes.func,

    /**
     * Called when changing to the previous page.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All Menu.Item props.
     */
    onPreviousPage: PropTypes.func,

    /**
     * Called when changing to the next page.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All Menu.Item props.
     */
    onNextPage: PropTypes.func,
  }

  static _meta = {
    name: 'CalendarMenu',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  handleChangeMode = (e, { name }) => {
    _.invokeArgs('onChangeMode', [e, { ...this.props, mode: name }], this.props)
  }

  handlePreviousPage = (e, { name }) => {
    _.invokeArgs('onChangeMode', [e, { ...this.props, mode: name }], this.props)
  }

  render() {
    const {
      value,
      mode,
      onNextPage,
      onPreviousPage,
    } = this.props

    const year = value.getFullYear()
    const monthName = dateUtils.getMonthName(value)

    const items = _.compact([
      mode === 'day' && (
        <Menu.Item key='month' name='month' onClick={this.handleChangeMode}>
          {monthName}
        </Menu.Item>
      ),
      mode === 'year' && (
        <Menu.Item as='div' header key='year' name='year' onClick={this.handleChangeMode}>
          {year - 4} - {year + 4}
        </Menu.Item>
      ),
      _.includes(mode, ['hour', 'minute']) && (
        <Menu.Item key='hour-minute' name='hour-minute' onClick={this.handleChangeMode}>
          {monthName}&nbsp;{value}
        </Menu.Item>
      ),
      _.includes(mode, ['day', 'month', 'hour', 'minute']) && (
        <Menu.Item key='year' name='year' onClick={this.handleChangeMode}>
          {year}
        </Menu.Item>
      ),
    ])

    return (
      <Menu attached='top' fluid text widths={items.length + 2}>
        <Menu.Item icon='angle double left' onClick={onPreviousPage} />
        {items}
        <Menu.Item icon='angle double right' onClick={onNextPage} />
      </Menu>
    )
  }
}
