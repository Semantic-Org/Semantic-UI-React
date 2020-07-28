import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { createShorthandFactory, getUnhandledProps } from '../../lib'

/**
 * A search item sub-component for Dropdown component.
 */
class DropdownSearchInput extends Component {
  handleChange = (e) => {
    const value = _.get(e, 'target.value')

    _.invoke(this.props, 'onChange', e, { ...this.props, value })
  }

  render() {
    const { autoComplete, className, tabIndex, type, value } = this.props
    const classes = cx('search', className)
    const rest = getUnhandledProps(DropdownSearchInput, this.props)

    return (
      <input
        {...rest}
        aria-autocomplete='list'
        autoComplete={autoComplete}
        className={classes}
        onChange={this.handleChange}
        tabIndex={tabIndex}
        type={type}
        value={value}
      />
    )
  }
}

DropdownSearchInput.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** An input can have the auto complete. */
  autoComplete: PropTypes.string,

  /** Additional classes. */
  className: PropTypes.string,

  /** An input can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The HTML input type. */
  type: PropTypes.string,

  /** Stored value. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

DropdownSearchInput.defaultProps = {
  autoComplete: 'off',
  type: 'text',
}

DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, (type) => ({ type }))

export default DropdownSearchInput
