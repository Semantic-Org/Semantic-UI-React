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
export default class Months extends Component {
  static propTypes = {
    /** Textual context constants **/
    content: PropTypes.object,

    // TODO doc
    onClick: PropTypes.func,
  }

  static _meta = {
    name: 'Months',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  getCells() {
    const { onClick } = this.props

    return _.times(i => {
      const thisMonth = i
      return {
        content: this.props.content.months[i],
        onClick: e => onClick(e, { value: thisMonth, nextMode: 'day' }),
      }
    }, 12)
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
