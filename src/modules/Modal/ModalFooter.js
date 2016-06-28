import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'

export default class ModalFooter extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'ModalFooter',
    type: META.type.module,
    parent: 'Modal',
  }

  render() {
    const classes = classNames(
      this.props.className,
      'actions'
    )
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
