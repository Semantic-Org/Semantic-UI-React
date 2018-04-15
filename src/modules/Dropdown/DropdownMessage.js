import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { cloneElement, Component, isValidElement } from 'react'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
 * A message sub-component for Dropdown component.
 */
class DropdownMessage extends Component {
  static _meta = {
    name: 'DropdownMessage',
    parent: 'Dropdown',
    type: META.TYPES.MODULE,
  }

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

    /** Message to display when the maximum selection limit has been reached. */
    maxSelectionsMessage: customPropTypes.contentShorthand,

    /** Message to display when there are no results. */
    noResultsMessage: customPropTypes.contentShorthand,

    /** The message type. */
    type: PropTypes.oneOf(['maxSelectionsMessage', 'noResultsMessage']).isRequired,

    /** The maxSelections value. */
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    noResultsMessage: 'No results found.',
    maxSelectionsMessage: 'Max {value} selection{suffix}.',
  }

  /**
   * Method to create the message depending on the type prop
   */
  createMessage = () => {
    const message = this.props[this.props.type]

    if (isValidElement(message)) {
      return cloneElement(message, { type: this.props.type, value: this.props.value })
    }

    if (typeof message !== 'string') {
      return message
    }

    // Return if we have a string that differs from our default, i.e. we only do replace on default string
    if (message !== DropdownMessage.defaultProps.maxSelectionsMessage) {
      return message
    }

    const suffix = this.props.value > 1 ? 's' : ''

    return message
      .replace('{value}', this.props.value)
      .replace('{suffix}', suffix)
  }

  render() {
    const { className } = this.props

    const classes = cx('message', className)

    const message = this.createMessage()

    const rest = getUnhandledProps(DropdownMessage, this.props)
    const ElementType = getElementType(DropdownMessage, this.props)

    return (
      <ElementType {...rest} className={classes}>{message}</ElementType>
    )
  }
}

DropdownMessage.create = createShorthandFactory(DropdownMessage, type => ({ type }))

export default DropdownMessage
