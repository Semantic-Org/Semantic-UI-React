import React, { Component, PropTypes } from 'react'
import Promise from 'bluebird'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

import Modal from '../../modules/Modal/Modal'
import ModalContent from '../../modules/Modal/ModalContent'
import ModalFooter from '../../modules/Modal/ModalFooter'
import ModalHeader from '../../modules/Modal/ModalHeader'

export default class Confirm extends Component {
  static propTypes = {
    abortLabel: PropTypes.string,
    confirmLabel: PropTypes.string,
    header: PropTypes.string,
  }

  static defaultProps = {
    abortLabel: 'Cancel',
    confirmLabel: 'Yes',
  }

  state = {
    message: 'Are you sure?',
  }

  show = (message) => new Promise((resolve, reject) => {
    this.setState({ message })

    this.handleAbort = () => resolve(false)
    this.handleConfirm = () => resolve(true)

    this.refs.modal.showModal()
  })
    .then(isConfirmed => {
      this.refs.modal.hideModal()
      return isConfirmed
    })

  static _meta = {
    library: META.library.stardust,
    name: 'Confirm',
    type: META.type.addon,
  }

  render() {
    const { header, abortLabel, confirmLabel } = this.props
    const rest = getUnhandledProps(Confirm, this.props)
    return (
      <Modal {...rest} ref='modal'>
        <ModalHeader>
          {header}
        </ModalHeader>
        <ModalContent>
          {this.state.message}
        </ModalContent>
        <ModalFooter>
          <div className='ui button' onClick={this.handleAbort}>{abortLabel}</div>
          <div className='ui blue button' onClick={this.handleConfirm}>{confirmLabel}</div>
        </ModalFooter>
      </Modal>
    )
  }
}
