import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'

export default class Buttons extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Buttons',
    type: META.type.element,
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
