import _ from 'lodash'
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
export default class DatetimeHours extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /**
     * Formats a Date object as an hour string.
     *
     * @param {date} - A date object.
     * @returns {string} - A formatted hour string.
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
    formatter: dateUtils.defaultHourFormatter,
  }

  static _meta = {
    name: 'DatetimeHours',
    parent: 'Datetime',
    type: META.TYPES.ADDON,
  }

  getCells = () => _.map(_.range(0, 12), hour => ({
    content: this.getHourLabel(hour),
    onClick: this.handleCellClick(hour),
  }))

  getHourLabel = (hour) => {
    const { formatter, value } = this.props
    const date = new Date(value)

    date.setMinutes(0)
    date.setHours(hour)

    return `${formatter(date)}:00`
  }

  handleCellClick = hours => (e) => {
    const value = new Date(this.props.value)
    value.setHours(hours)

    _.invokeArgs('onDateChange', [e, { ...this.props, value }], this.props)
  }

  render() {
    const rest = getUnhandledProps(DatetimeHours, this.props)
    const ElementType = getElementType(DatetimeHours, this.props)

    return (
      <ElementType
        {...rest}
        headers={['Hour']}
        columns={4}
        cells={this.getCells()}
      />
    )
  }
}
