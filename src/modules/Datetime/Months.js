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
export default class Months extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Textual context constants **/
    content: PropTypes.object,

    /** Primary content. */
    children: PropTypes.node,

    onClick: PropTypes.func,
  }

  static _meta = {
    name: 'Months',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  getMonths() {
    const { onClick } = this.props

    return _.times(i => {
      const thisMonth = i
      return {
        content: this.props.content.months[i],
        onClick: e => onClick(e, { value: thisMonth, nextMode: 'DAY' }),
      }
    }, 12)
  }

  render() {
    return (
      <DateTimeGrid
        headers={['Month']}
        columns={3}
        cells={this.getMonths()}
      />
    )
  }
}
