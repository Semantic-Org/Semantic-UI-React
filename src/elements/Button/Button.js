import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { getElementType, getUnhandledProps, META } from '../../lib'

export default class Button extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
  }

  static defaultProps = {
    type: 'button',
    as: 'button',
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
    const rest = getUnhandledProps(Button, this.props)
    const ElementType = getElementType(Button, this.props)
    return (
      <ElementType {...rest} type={this.props.type} className={classes}>
        {this.props.children}
      </ElementType>
    )
  }
}
