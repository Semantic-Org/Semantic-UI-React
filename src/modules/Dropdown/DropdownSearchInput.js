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

    /** A name of the input. */
    name: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Custom styles. */
    style: PropTypes.object,

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

    /** A width of an input. */
    width: PropTypes.oneOfType([
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

  computeStyle = () => {
    const { style, width } = this.props

    if (_.isNil(width)) return style
    return { ...style, width }
  }

  handleChange = e => {
    const value = _.get(e, 'target.value')

    _.invoke(this.props, 'onChange', e, { ...this.props, value })
  }

  handleRef = c => _.invoke(this.props, 'inputRef', c)

  render() {
    const {
      className,
      name,
      tabIndex,
      type,
      value,
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
        style={this.computeStyle()}
        tabIndex={tabIndex}
        type={type}
        value={value}
      />
    )
  }
}

DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, type => ({ type }))

export default DropdownSearchInput
