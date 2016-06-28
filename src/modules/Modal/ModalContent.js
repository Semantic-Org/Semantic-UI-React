import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'

export default class ModalContent extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'ModalContent',
    type: META.type.module,
    parent: 'Modal',
  }

  render() {
    const classes = classNames(
      this.props.className,
      'content'
    )
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
