import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static defaultProps = {
    type: 'button',
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Button',
    type: META.type.element,
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
