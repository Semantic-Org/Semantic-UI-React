import React, { Component, PropTypes } from 'react'

import { getUnhandledProps, META } from '../../lib'
import Button from '../../elements/Button'
import Modal from '../../modules/Modal'

const _meta = {
  name: 'Confirm',
  type: META.TYPES.ADDON,
}

/**
 * A Confirm modal gives the user a choice to confirm or cancel an action
 * @see Modal
 */
class Confirm extends Component {
  static propTypes = {
    /** Whether or not the modal is visible */
    open: PropTypes.bool,

    /** The cancel button text */
    cancelButton: PropTypes.string,

    /** The OK button text */
    confirmButton: PropTypes.string,

    /** The ModalHeader text */
    header: PropTypes.string,

    /** The ModalContent text. */
    content: PropTypes.string,

    /** Called when the Cancel button is clicked */
    onCancel: PropTypes.func,

    /** Called when a close event happens */
    onClose: PropTypes.func,

    /** Called when the OK button is clicked */
    onConfirm: PropTypes.func,

    /** Called when an open event happens */
    onOpen: PropTypes.func,
  }

  static _meta = _meta

  static defaultProps = {
    cancelButton: 'Cancel',
    confirmButton: 'OK',
    content: 'Are you sure?',
  }

  handleCancel = (e) => {
    this.clicked = true

    const { onCancel } = this.props
    if (onCancel) onCancel(e, this.props)
  }

  handleOpen = (e) => {
    this.clicked = undefined

    const { onOpen } = this.props
    if (onOpen) onOpen(e, this.props)
  }

  handleClose = (e) => {
    const { onCancel, onClose } = this.props
    if (onClose) onClose(e, this.props)

    // Only call onCancel if this was closed was some other way besides an
    // explicit click of confirm/cancel (e.g. a click-away).
    if (!this.clicked && onCancel) onCancel(e, this.props)
  }

  handleConfirm = (e) => {
    this.clicked = true

    const { onConfirm } = this.props
    if (onConfirm) onConfirm(e, this.props)
  }

  render() {
    const { open, cancelButton, confirmButton, header, content } = this.props
    const rest = getUnhandledProps(Confirm, this.props)

    return (
      <Modal open={open} size='small' onOpen={this.handleOpen} onClose={this.handleClose} {...rest}>
        {header && <Modal.Header>{header}</Modal.Header>}
        {content && <Modal.Content>{content}</Modal.Content>}
        <Modal.Actions>
          <Button data-close onClick={this.handleCancel}>{cancelButton}</Button>
          <Button data-close primary onClick={this.handleConfirm}>{confirmButton}</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default Confirm
