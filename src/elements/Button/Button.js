import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { META } from '../../lib'

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static defaultProps = {
    type: 'button',
  }

  static _meta = {
    name: 'Button',
    type: META.TYPES.ELEMENT,
  }

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      'button'
    )
    return (
      <button {...this.props} className={classes}>
        {this.props.children}
      </button>
    )
  }
}
