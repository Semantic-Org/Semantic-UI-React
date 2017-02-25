import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'
import * as utils from './utils'

import {
  childrenUtils,
  createShorthand,
  customPropTypes,
  META,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'

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

	/**
   * Handler for day cell hover events.
   * Sets state for currently un/hovered cell index
   */
  onHover(cellIndex, isOver, e) {
      this.setState({
          hovering: isOver ? cellIndex : null
      })
  }

	getMonths() {
		const {onClick} = this.props
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
						active={this.state.hovering==thisMonth}
            name={this.props.content.months[i]}
						onMouseOver={this.onHover.bind(this, thisMonth, true)}
	          onMouseOut={this.onHover.bind(this, thisMonth, false)}
            onClick={(e)=>onClick(e, {value: thisMonth, nextMode: 'DAY'})}
          />
        ))
        i += 1
      })
      cells.push(<utils.RowWrapper children={children} key={rowIndex}/>)
    })
    return cells
  }

  render() {
    return (
			<table className="ui table">
				<thead></thead>
				<tbody>
					{this.getMonths()}
				</tbody>
			</table>
    )
  }
}
