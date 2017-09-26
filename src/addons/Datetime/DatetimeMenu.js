import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
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
export default class DatetimeMenu extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Current calendar mode */
    mode: PropTypes.oneOf(['minute', 'hour', 'day', 'month', 'year']).isRequired,

    /**
     * Called when the mode is changed (i.e. switching from month view to year selection).
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed mode.
     * @param {object} data.mode - The proposed new mode.
     */
    onChangeMode: PropTypes.func,

    /**
     * Called when changing to the next page.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All Menu.Item props.
     */
    onNextPage: PropTypes.func,

    /**
     * Called when changing to the previous page.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All Menu.Item props.
     */
    onPreviousPage: PropTypes.func,

    /** Current value as a Date object. */
    value: customPropTypes.date.isRequired,
  }

  static defaultProps = {
    as: Menu,
  }

  static _meta = {
    name: 'DatetimeMenu',
    parent: 'Datetime',
    type: META.TYPES.ADDON,
  }

  handleChangeMode = (e, { name }) => {
    _.invokeArgs('onChangeMode', [e, { ...this.props, mode: name }], this.props)
  }

  render() {
    const {
      value,
      mode,
      onNextPage,
      onPreviousPage,
    } = this.props

    const rest = getUnhandledProps(DatetimeMenu, this.props)
    const ElementType = getElementType(DatetimeMenu, this.props)

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
      <ElementType attached='top' fluid text widths={items.length + 2} {...rest}>
        <Menu.Item icon='angle double left' onClick={onPreviousPage} />
        {items}
        <Menu.Item icon='angle double right' onClick={onNextPage} />
      </ElementType>
    )
  }
}
