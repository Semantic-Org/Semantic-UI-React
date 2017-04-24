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

    /** A name of the input . */
    name: PropTypes.string,

    /** Custom styles. */
    style: PropTypes.object,

    /** An input can receive focus. */
    tabIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Stored value. */
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** A width of an input. */
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }

  static _meta = {
    name: 'DropdownSearchInput',
    parent: 'Dropdown',
    type: META.TYPES.MODULE,
  }

  handleChange = e => _.invoke(this.props, 'onChange', e)

  handleRef = c => {
    _.invoke(this.props, 'inputRef', c)
    this.ref = c
  }

  render() {
    const {
      className,
      name,
      style,
      tabIndex,
      value,
      width,
    } = this.props
    const classes = cx('search', className)
    const rest = getUnhandledProps(DropdownSearchInput, this.props)

    return (
      <input
        {...rest}
        aria-autocomplete='list'
        autoComplete='off'
        className={classes}
        name={[name, 'search'].join('-')}
        onChange={this.handleChange}
        ref={this.handleRef}
        style={{ ...style, width }}
        tabIndex={tabIndex}
        type='text'
        value={value}
      />
    )
  }
}

DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, type => ({ type }))

export default DropdownSearchInput
