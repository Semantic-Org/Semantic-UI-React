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

		/** Current date **/
		date: PropTypes.any,

		/** Current calendar mode **/
		mode: PropTypes.string,
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
    onPrevious: PropTypes.func,
		onNext: PropTypes.func,
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
			year,
			onPrevious,
			onNext,
			onChangeMode,
			mode,
			date
    } = this.props

    const classes = cx(
      'ui four item compact top attached text menu',
      className,
    )

    return (
			<div className={classes}>
				<a className="item" onClick={onPrevious}>
					<i className="angle double left icon"></i>
				</a>
				{mode == 'DAY' ?
					<a className="item" onClick={onChangeMode.bind(null, 'MONTH')}>
						{monthName}
					</a> : false }
				{ mode == 'YEAR' ?
					<a className="item" onClick={onChangeMode.bind(null, 'YEAR')}>
						{year-8}-{year + 7}
					</a>
				: false}
				{ ['HOUR', 'MINUTE'].indexOf(mode) > -1 ?
					<a className="item" onClick={onChangeMode.bind(null, 'MONTH')}>
						{monthName}&nbsp;{date.getDate()}
					</a> : false }
				{ ['DAY', 'MONTH', 'HOUR', 'MINUTE'].indexOf(mode) > -1 ?
					<a className="item" onClick={onChangeMode.bind(null, 'YEAR')}>
						{year}
					</a> : false }
				<a className="item" onClick={onNext}>
					<i className="angle double right icon"></i>
				</a>
			</div>
    )
  }
}
