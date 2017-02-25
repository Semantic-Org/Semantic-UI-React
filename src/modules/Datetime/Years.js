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
export default class Years extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

		/** Current year **/
		year: PropTypes.number,

    /** Primary content. */
    children: PropTypes.node,

		onClick: PropTypes.func
  }

  static _meta = {
    name: 'Years',
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
   * Handler for cell hover events.
   * Sets state for currently un/hovered cell index
   */
  onHover(cellIndex, isOver, e) {
      this.setState({
          hovering: isOver ? cellIndex : null
      })
  }

	getYears() {
		const {onClick} = this.props
    const row = [...Array(4).keys()]
    const col = [...Array(4).keys()]
    const cells = []
    const startYear = this.props.year - 8
    let i = startYear
    let children = []
    row.map((yearRow, rowIndex) => {
      let children = []
      col.map((year, yearIndex) => {
        let thisYear = i
        children.push((
          <utils.ItemCell
                key={thisYear}
                value={thisYear}
                name={thisYear}
								active={thisYear == this.state.hovering}
								onMouseOver={this.onHover.bind(this, thisYear, true)}
			          onMouseOut={this.onHover.bind(this, thisYear, false)}
                onClick={(e)=>{onClick(e, thisYear)}}/>
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
					{this.getYears()}
				</tbody>
			</table>
    )
  }
}
