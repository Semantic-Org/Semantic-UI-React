import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  dateUtils,
  META,
} from '../../lib'

import DatetimeGrid from './DatetimeGrid'

/**
 * A day cell within a calendar month
 */
export default class Months extends Component {
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
    name: 'Months',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  getCells = () => _.times(thisMonth => ({
    content: dateUtils.labels.months[thisMonth],
    onClick: this.handleCellClick(thisMonth),
  }), 12)

  handleCellClick = month => (e) => {
    const value = new Date(this.props.value)
    value.setMonth(month)

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
