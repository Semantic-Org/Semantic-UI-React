import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

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
export default class CalendarHeader extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

		/** Month name **/
		monthName: PropTypes.string,

		/** Month number **/
		month: PropTypes.number,

		/** Year **/
		year: PropTypes.number,

    /**
     * Called when a mode switch is performed (like switching from month view to
     * month or year selection)
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onChangeMode: PropTypes.func,
		/**
     * Called when paginating across months
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onChangeMonth: PropTypes.func,
  }

  static _meta = {
    name: 'CalendarHeader',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  handleClick = (e) => {

    e.stopPropagation()
  }

  render() {
    const {
      className,
			monthName,
			month,
			year
    } = this.props

    const classes = cx(
      'ui fluid four item compact text menu',
      className,
    )

    return (
			<div className={classes}>
				<a className="item" onClick={this.onChangeMonth.bind(null, -1)}>
					<i className="angle double left icon"></i>
				</a>
				<a className="item">
					{monthName}
				</a>
				<a className="item">
					{year}
				</a>
				<a className="item" onClick={this.onChangeMonth.bind(null, 1)}>
					<i className="angle double right icon"></i>
				</a>
			</div>
    )
  }
}
