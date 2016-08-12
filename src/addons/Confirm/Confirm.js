import React, { Component, PropTypes } from 'react'
import Promise from 'bluebird'

import { getUnhandledProps, META } from '../../lib'
import { Modal } from '../../modules'

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
    active: true,
  }

  show = (message) => new Promise((resolve, reject) => {
    this.setState({ message })

    this.handleAbort = () => resolve(false)
    this.handleConfirm = () => resolve(true)
  })
    .then(isConfirmed => {
      this.setState({ active: false })
      return isConfirmed
    })

  static _meta = {
    name: 'Confirm',
    type: META.TYPES.ADDON,
  }

  render() {
    const { header, abortLabel, confirmLabel } = this.props
    const rest = getUnhandledProps(Confirm, this.props)
    return (
      <Modal active={this.state.active} {...rest}>
        <Modal.Header>
          {header}
        </Modal.Header>
        <Modal.Content>
          {this.state.message}
        </Modal.Content>
        <Modal.Actions>
          <div className='ui button' onClick={this.handleAbort}>{abortLabel}</div>
          <div className='ui blue button' onClick={this.handleConfirm}>{confirmLabel}</div>
        </Modal.Actions>
      </Modal>
    )
  }
}
