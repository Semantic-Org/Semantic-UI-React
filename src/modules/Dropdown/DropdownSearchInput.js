import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  META,
  getUnhandledProps,
} from '../../lib'

/**
 * A search item sub-component for Dropdown component.
 */
class DropdownSearchInput extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

    /** A ref handler for input. */
    inputRef: PropTypes.func,

    /** An input can receive focus. */
    tabIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** The HTML input type. */
    type: PropTypes.string,

    /** Stored value. */
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    type: 'text',
  }

  static _meta = {
    name: 'DropdownSearchInput',
    parent: 'Dropdown',
    type: META.TYPES.MODULE,
  }

  handleChange = e => {
    const value = _.get(e, 'target.value')

    _.invoke(this.props, 'onChange', e, { ...this.props, value })
  }

  handleRef = c => _.invoke(this.props, 'inputRef', c)

  render() {
    const { className, tabIndex, type, value } = this.props
    const classes = cx('search', className)
    const rest = getUnhandledProps(DropdownSearchInput, this.props)

    return (
      <input
        {...rest}
        aria-autocomplete='list'
        autoComplete='off'
        className={classes}
        onChange={this.handleChange}
        ref={this.handleRef}
        tabIndex={tabIndex}
        type={type}
        value={value}
      />
    )
  }
}

DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, type => ({ type }))

export default DropdownSearchInput
