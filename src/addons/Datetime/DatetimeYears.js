import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

import DatetimeGrid from './DatetimeGrid'

/**
 * A day cell within a calendar month
 */
export default class DatetimeYears extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /**
     * Called when the user changes the value.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     * @param {object} data.value - The proposed new value.
     */
    onChange: PropTypes.func,

    /** Current value as a Date object. */
    value: customPropTypes.date,
  }

  static defaultProps = {
    as: DatetimeGrid,
  }

  static _meta = {
    name: 'DatetimeYears',
    parent: 'Datetime',
    type: META.TYPES.ADDON,
  }

  getCells = () => {
    const { value } = this.props
    const year = value.getFullYear()
    const range = 4
    const startYear = year - range
    const endYear = year + range + 1

    return _.range(startYear, endYear).map(thisYear => ({
      content: thisYear,
      onClick: this.handleCellClick(thisYear),
    }), 9)
  }

  handleCellClick = year => (e) => {
    const value = new Date(this.props.value)
    value.setYear(year)

    _.invokeArgs('onChange', [e, { ...this.props, value }], this.props)
  }

  render() {
    const rest = getUnhandledProps(DatetimeYears, this.props)
    const ElementType = getElementType(DatetimeYears, this.props)

    return (
      <ElementType
        {...rest}
        columns={3}
        cells={this.getCells()}
      />
    )
  }
}
