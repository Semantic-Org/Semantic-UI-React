import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  dateUtils,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

import DatetimeGrid from './DatetimeGrid'

/**
 * A day cell within a calendar month
 */
export default class DatetimeMinutes extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** DatetimeMinutes interval between each item. */
    interval: PropTypes.number,

    /**
     * Formats a Date object as a minute string.
     *
     * @param {date} - A date object.
     * @returns {string} - A formatted minute string.
     */
    formatter: PropTypes.func,

    /**
     * Called when the user changes the value.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     * @param {object} data.value - The proposed new value.
     */
    onDateChange: PropTypes.func,

    /** Current value as a Date object. */
    value: customPropTypes.date.isRequired,
  }

  static defaultProps = {
    as: DatetimeGrid,
  }

  static _meta = {
    name: 'DatetimeMinutes',
    parent: 'Datetime',
    type: META.TYPES.ADDON,
  }

  static defaultProps = {
    formatter: dateUtils.defaultMinuteFormatter,
    interval: 5,
  }

  getCells() {
    const { interval } = this.props
    return _.times((i) => {
      const thisMinute = i * interval
      return {
        content: this.getMinuteLabel(thisMinute),
        onClick: this.handleCellClick(thisMinute),
      }
    }, Math.round(60 / interval))
  }

  getMinuteLabel(minute) {
    const { formatter, interval, value } = this.props
    const date = new Date(value)

    date.setMinutes(minute * interval)

    return formatter(date)
  }

  handleCellClick = minutes => (e) => {
    const value = new Date(this.props.value)
    value.setMinutes(minutes)

    _.invokeArgs('onDateChange', [e, { ...this.props, value }], this.props)
  }

  render() {
    const rest = getUnhandledProps(DatetimeMinutes, this.props)
    const ElementType = getElementType(DatetimeMinutes, this.props)

    return (
      <ElementType
        {...rest}
        headers={['Minute']}
        columns={3}
        cells={this.getCells()}
      />
    )
  }
}
