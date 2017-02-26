import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'
import * as utils from '../../lib/dateUtils'

import {
  childrenUtils,
  createShorthand,
  customPropTypes,
  META,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'

import Table from '../../collections/Table/Table'

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

    onClick: PropTypes.func
  }

  static _meta = {
    name: 'Months',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  constructor() {
    super()
    this.state = {
      hovering: null
    }
  }

  getMonths() {
    const { onClick } = this.props
    const row = [...Array(4).keys()]
    const col = [...Array(3).keys()]
    const cells = []
    let i = 0
    row.map((monthRow, rowIndex) => {
      let children = []
      col.map((month, monthIndex) => {
        let thisMonth = i
        children.push((
          <utils.ItemCell
            key={i}
            value={i}
            name={this.props.content.months[i]}
            onClick={(e) => onClick(e, { value: thisMonth, nextMode: 'DAY' })}
          />
        ))
        i += 1
      })
      cells.push(<utils.RowWrapper children={children} key={rowIndex} />)
    })
    return cells
  }

  render() {
    return (
      <Table fixed unstackable attached='bottom' size='small' compact='very' className='center aligned'>
        <Table.Header></Table.Header>
        <Table.Body>
          {this.getMonths()}
        </Table.Body>
      </Table>
    )
  }
}
