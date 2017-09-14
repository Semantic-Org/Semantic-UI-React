import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  META,
} from '../../lib'

import DatetimeGrid from './DatetimeGrid'

/**
 * A day cell within a calendar month
 */
export default class Years extends Component {
  static propTypes = {
    /**
     * Called when the user changes the value.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     * @param {object} data.value - The proposed new value.
     */
    onChange: PropTypes.func,

    /** Current value as a Date object. */
    value: customPropTypes.DateValue,
  }

  static _meta = {
    name: 'Years',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
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
    return (
      <DatetimeGrid
        columns={3}
        cells={this.getCells()}
      />
    )
  }
}
