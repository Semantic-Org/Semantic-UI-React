import _ from 'lodash'
import cx from 'classnames'
import React, { Children, cloneElement, PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  createShorthand,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  isBrowser,
  keyboardKey,
  makeDebugger,
  META,
  objectDiff,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'

const debug = makeDebugger('datetime');

const _meta = {
  name: 'Datetime',
  type: META.TYPES.MODULE
}

const _content = {
  daysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  daysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  now: 'Now',
  am: 'AM',
  pm: 'PM'
}

/**
 * A <Datetime/> allows a user to select a calendar date and/or time as well
 * as handle date ranges.
 * @see Form
 */
export default class Datetime extends Component {
	static _meta = _meta

	static PropTypes = {
		/** An element type to render as (string or function). */
	    as: customPropTypes.as,

		/** Primary content. */
	    children: customPropTypes.every([
	      customPropTypes.givenProps(
	        { children: PropTypes.any.isRequired },
	        React.PropTypes.element.isRequired,
	      ),
	    ]),

		/** Additional classes. */
	    className: PropTypes.string,

	    /** Whether or not the menu should close when the dropdown is blurred. */
	    closeOnBlur: PropTypes.bool,

	    /** A compact dropdown has no minimum width. */
	    compact: PropTypes.bool,

        /**
         * Textual content for the various text element of the calendar.
         * {
         *   daysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
         *   daysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
         *   months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
         *   monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
         *   today: 'Today',
         *   now: 'Now',
         *   am: 'AM',
         *   pm: 'PM'
         * }
         * @type {Object}
         */
        content: PropTypes.object,

	    /** Initial value of open. */
	    defaultOpen: PropTypes.bool,

        /** Initial value or value array if multiple. */
        defaultValue: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ])),
        ]),

	    /** A disabled dropdown menu or item does not allow user interaction. */
	    disabled: PropTypes.bool,

	    /** An errored dropdown can alert a user to a problem. */
	    error: PropTypes.bool,

        /** First day of the week. Can be either 0 (Sunday), 1 (Monday) **/
        firstDayOfWeek: PropTypes.number,

	    /** A dropdown menu can contain floated content. */
	    floating: PropTypes.bool,

	    /** A dropdown can take the full width of its parent */
	    fluid: PropTypes.bool,

	    /** A dropdown menu can contain a header. */
	    header: PropTypes.node,

	    /** Shorthand for Icon. */
	    icon: PropTypes.oneOfType([
	      PropTypes.node,
	      PropTypes.object,
	    ]),

	    /** A dropdown can be formatted to appear inline in other content. */
	    inline: PropTypes.bool,

	    /** A dropdown can be labeled. */
	    labeled: PropTypes.bool,

	    // linkItem: PropTypes.bool,

	    /** A dropdown can show that it is currently loading data. */
	    loading: PropTypes.bool,

	    /** A selection dropdown can allow multiple selections. */
	    multiple: PropTypes.bool,

	    /** Name of the hidden input which holds the value. */
	    name: PropTypes.string,

	    /**
	     * Called on blur.
	     *
	     * @param {SyntheticEvent} event - React's original SyntheticEvent.
	     * @param {object} data - All props.
	     */
	    onBlur: PropTypes.func,

	    /**
	     * Called when the user attempts to change the value.
	     *
	     * @param {SyntheticEvent} event - React's original SyntheticEvent.
	     * @param {object} data - All props and proposed value.
	     */
	    onChange: PropTypes.func,

	    /**
	     * Called when a close event happens.
	     *
	     * @param {SyntheticEvent} event - React's original SyntheticEvent.
	     * @param {object} data - All props.
	     */
	    onClose: PropTypes.func,

	    /**
	     * Called when a multi-select label is clicked.
	     *
	     * @param {SyntheticEvent} event - React's original SyntheticEvent.
	     * @param {object} data - All label props.
	     */
	    onLabelClick: PropTypes.func,

	    /**
	     * Called when an open event happens.
	     *
	     * @param {SyntheticEvent} event - React's original SyntheticEvent.
	     * @param {object} data - All props.
	     */
	    onOpen: PropTypes.func,

	    /**
	     * Called on click.
	     *
	     * @param {SyntheticEvent} event - React's original SyntheticEvent.
	     * @param {object} data - All props.
	     */
	    onClick: PropTypes.func,

	    /**
	     * Called on focus.
	     *
	     * @param {SyntheticEvent} event - React's original SyntheticEvent.
	     * @param {object} data - All props.
	     */
	    onFocus: PropTypes.func,

	    /**
	     * Called on mousedown.
	     *
	     * @param {SyntheticEvent} event - React's original SyntheticEvent.
	     * @param {object} data - All props.
	     */
	    onMouseDown: PropTypes.func,

	    /** Controls whether or not the dropdown menu is displayed. */
	    open: PropTypes.bool,

	    /** Whether or not the menu should open when the dropdown is focused. */
	    openOnFocus: PropTypes.bool,

	    /** Placeholder text. */
	    placeholder: PropTypes.string,

		/**
		 * Handle a date range. This will cause the Datetime component to
		 * render two calendar months which represent the start and end
		 * of the range
		 * @type {bool}
		 */
		range: PropTypes.bool,

	    /**
	     * A function that takes (data, index, defaultLabelProps) and returns
	     * shorthand for Label .
	     */
	    renderLabel: PropTypes.func,

	    /** Define whether the highlighted item should be selected on blur. */
	    selectOnBlur: PropTypes.bool,

	    /** A simple dropdown can open without Javascript. */
	    simple: PropTypes.bool,

	    /** A dropdown can receive focus. */
	    tabIndex: PropTypes.oneOfType([
	      PropTypes.number,
	      PropTypes.string,
	    ]),

		/**
		 * Allows time selection. This will cause the component to offer a
		 * time selection as well as the calendar date.
		 * @type {bool}
		 */
		time: PropTypes.bool,

	    /** Current value or value array if multiple. Creates a controlled component. */
	    value: PropTypes.oneOfType([
	      PropTypes.string,
	      PropTypes.number,
	      PropTypes.arrayOf(PropTypes.oneOfType([
	        PropTypes.string,
	        PropTypes.number,
	      ])),
	    ]),
	}

    static autoControlledProps = [
        'open',
        'value',
    ]

    static defaultProps = {
        content: _content
    }

    open = (e) => {
      debug('open()')

      const { disabled, onOpen, search } = this.props
      if (disabled) return
      if (search && this._search) this._search.focus()
      if (onOpen) onOpen(e, this.props)

      this.trySetState({ open: true })
    }

    close = (e) => {
      debug('close()')

      const { onClose } = this.props
      if (onClose) onClose(e, this.props)

      this.trySetState({ open: false })
    }

    toggle = (e) => this.state.open ? this.close(e) : this.open(e)

    handleClick = (e) => {
      debug('handleClick()', e)
      const { onClick } = this.props
      if (onClick) onClick(e, this.props)
      // prevent closeOnDocumentClick()
      e.stopPropagation()
      this.toggle(e)
    }

	render() {
		return (
			<div className={this.props.className}>
				<div as={this.props.as}>
                    <div
                        className="ui input left icon"
                        onClick={this.handleClick}
                        >
                        <i className="calendar icon"></i>
                        <input type="text" /> {this.state.open}
                    </div>
                </div>
			</div>
		)
	}
}
