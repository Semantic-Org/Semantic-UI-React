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

/**
 * A day cell within a calendar month
 */
export default class Hours extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

		onClick: PropTypes.func,
		/**
     * A function that will return the time image of a Date object as a formatted
     * string in the current locale. By default the time will be formatted as HH:MM
     * @type {function}
     */
    timeFormatter: PropTypes.func
  }

  static _meta = {
    name: 'Hours',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

	static defaultProps = {
		timeFormatter: utils.timeFormatter,
		firstHourOfDay: 0,
		LastHourOfDay: 23
	}

	constructor() {
    super()
    this.state = {
        hovering: null
    }
  }

	/**
   * Handler for cell hover events.
   * Sets state for currently un/hovered cell index
   */
  onHover(cellIndex, isOver, e) {
      this.setState({
          hovering: isOver ? cellIndex : null
      })
  }

	/**
   * Return the ordered labels for days of the week,
   * accounting for the locale's first day of the week
   */
  getHourLabels() {
		const {timeFormatter} = this.props
		const date = new Date()
    return [...Array(24).keys()].map((hour) => {
			date.setHours(hour)
			date.setMinutes(0)
      return timeFormatter(date)
    })
  }

	getHours() {
		const {onClick} = this.props
		const {firstHourOfDay, LastHourOfDay} = this.props
		const labels = this.getHourLabels()
		const hours = labels.slice(firstHourOfDay, LastHourOfDay)
		const rows = [...Array(6).keys()]
		const cols = [...Array(4).keys()]
		const cells = []
		let i = 0
		rows.map((row) => {
			let children = []
			cols.map((col) => {
				let thisHour = i
				children.push((
					<utils.ItemCell
						key={i}
						name={labels[i]}
						value={labels[i]}
						active={i == this.state.hovering}
						onMouseOver={this.onHover.bind(this, thisHour, true)}
						onMouseOut={this.onHover.bind(this, thisHour, false)}
						onClick={(e)=>{onClick(e, thisHour)}}/>
				))
				i += 1
			})
			cells.push(<utils.RowWrapper children={children} key={row}/>)
		})
		return cells
	}

  render() {
    return (
			<table className="ui table">
				<thead></thead>
				<tbody>
					{this.getHours()}
				</tbody>
			</table>
    )
  }
}
