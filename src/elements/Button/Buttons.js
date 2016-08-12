import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { META } from '../../lib'

export default class Buttons extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    name: 'Buttons',
    type: META.TYPES.ELEMENT,
    parent: 'Button',
  }

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      'buttons'
    )
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
