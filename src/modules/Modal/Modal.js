import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'
import ModalContent from './ModalContent'
import ModalHeader from './ModalHeader'
import ModalFooter from './ModalFooter'

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    settings: PropTypes.object,
  }

  state = { isShown: false }

  static Content = ModalContent
  static Header = ModalHeader
  static Footer = ModalFooter

  showModal = () => {
    this.setState({ isShown: true })
  }

  hideModal = () => {
    this.setState({ isShown: false })
  }

  static _meta = {
    library: META.library.semanticUI,
    name: 'Modal',
    type: META.type.module,
  }

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      'modal',
      { 'transition visible active': this.state.isShown },
    )

    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    )
  }
}
