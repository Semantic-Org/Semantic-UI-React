import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  META,
} from '../../lib'

import DatetimeGrid from './DatetimeGrid'

/**
 * A day cell within a calendar month
 */
export default class Years extends Component {
  static propTypes = {
    // TODO doc
    onClick: PropTypes.func,

    /** Active year **/
    year: PropTypes.number,
  }

  static _meta = {
    name: 'Years',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  getCells() {
    const { onClick, year } = this.props
    const range = 4
    const startYear = year - range
    const endYear = year + range + 1

    return _.range(startYear, endYear).map(thisYear => {
      return {
        content: thisYear,
        onClick: e => onClick(e, thisYear),
      }
    }, 16)
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
