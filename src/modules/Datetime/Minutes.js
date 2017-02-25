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
export default class Minutes extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,
		/** Current hour */
    hour: PropTypes.number,
		/** Minutes interval between each item. */
    interval: PropTypes.number,
		/** Click handler */
		onClick: PropTypes.func,
		/**
     * A function that will return the time image of a Date object as a formatted
     * string in the current locale. By default the time will be formatted as HH:MM
     * @type {function}
     */
    timeFormatter: PropTypes.func
  }

  static _meta = {
    name: 'Minutes',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

	static defaultProps = {
		timeFormatter: utils.timeFormatter,
		interval: 5
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
  getMinuteLabels() {
		const {timeFormatter, interval, hour} = this.props
		const count = parseInt(60 / interval)
		const date = new Date()
		date.setHours(hour)
    return [...Array(count).keys()].map((minute) => {
			date.setMinutes(minute * interval)
      return timeFormatter(date)
    })
  }

	getMinutes() {
		const {onClick, interval} = this.props
		const labels = this.getMinuteLabels()
		const rows = [...Array(3).keys()]
		const cols = [...Array(4).keys()]
		const cells = []
		let i = 0
		rows.map((row) => {
			let children = []
			cols.map((col) => {
				let thisMinute = i * interval
				children.push((
					<utils.ItemCell
						key={i}
						name={labels[i]}
						value={labels[i]}
						active={i == this.state.hovering}
						onMouseOver={this.onHover.bind(this, i, true)}
						onMouseOut={this.onHover.bind(this, i, false)}
						onClick={(e)=>{onClick(e, thisMinute)}}/>
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
					{this.getMinutes()}
				</tbody>
			</table>
    )
  }
}
