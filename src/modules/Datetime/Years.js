import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  META,
} from '../../lib'

import DateTimeGrid from './DateTimeGrid'

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

  getYears() {
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
      <DateTimeGrid
        headers={['Year']}
        columns={3}
        cells={this.getYears()}
      />
    )
  }
}
