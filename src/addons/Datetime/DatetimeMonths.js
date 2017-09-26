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
export default class DatetimeMonths extends Component {
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
    value: customPropTypes.date.isRequired,
  }

  static defaultProps = {
    as: DatetimeGrid,
  }

  static _meta = {
    name: 'DatetimeMonths',
    parent: 'Datetime',
    type: META.TYPES.ADDON,
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
    const rest = getUnhandledProps(DatetimeMonths, this.props)
    const ElementType = getElementType(DatetimeMonths, this.props)

    return (
      <ElementType
        {...rest}
        columns={3}
        cells={this.getCells()}
      />
    )
  }
}
