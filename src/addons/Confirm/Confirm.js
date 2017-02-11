import _ from 'lodash'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
} from '../../lib'
import Button from '../../elements/Button'
import Modal from '../../modules/Modal'

/**
 * A Confirm modal gives the user a choice to confirm or cancel an action/
 * @see Modal
 */
class Confirm extends Component {
  static propTypes = {
    /** The cancel button text. */
    cancelButton: customPropTypes.itemShorthand,

    /** The OK button text. */
    confirmButton: customPropTypes.itemShorthand,

    /** The ModalContent text. */
    content: customPropTypes.itemShorthand,

    /** The ModalHeader text. */
    header: customPropTypes.itemShorthand,

    /**
     * Called when the Modal is closed without clicking confirm.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onCancel: PropTypes.func,

    /**
     * Called when the OK button is clicked.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onConfirm: PropTypes.func,

    /** Whether or not the modal is visible. */
    open: PropTypes.bool,
  }

  static defaultProps = {
    cancelButton: 'Cancel',
    confirmButton: 'OK',
    content: 'Are you sure?',
  }

  static _meta = {
    name: 'Confirm',
    type: META.TYPES.ADDON,
  }

  handleCancel = e => {
    const { onCancel } = this.props

    if (onCancel) onCancel(e, this.props)
  }

  handleConfirm = e => {
    const { onConfirm } = this.props

    if (onConfirm) onConfirm(e, this.props)
  }

  render() {
    const {
      cancelButton,
      confirmButton,
      content,
      header,
      open,
    } = this.props
    const rest = getUnhandledProps(Confirm, this.props)

    // `open` is auto controlled by the Modal
    // It cannot be present (even undefined) with `defaultOpen`
    // only apply it if the user provided an open prop
    const openProp = {}
    if (_.has(this.props, 'open')) openProp.open = open

    return (
      <Modal {...rest} {...openProp} size='small' onClose={this.handleCancel}>
        {Modal.Header.create(header)}
        {Modal.Content.create(content)}
        <Modal.Actions>
          {Button.create(cancelButton, { onClick: this.handleCancel })}
          {Button.create(confirmButton, {
            onClick: this.handleConfirm,
            primary: true,
          })}
        </Modal.Actions>
      </Modal>
    )
  }
}

export default Confirm
