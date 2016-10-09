import _ from 'lodash'
import React, { PropTypes } from 'react'

import { getUnhandledProps, META } from '../../lib'
import Button from '../../elements/Button'
import Modal from '../../modules/Modal'

/**
 * A Confirm modal gives the user a choice to confirm or cancel an action
 * @see Modal
 */
function Confirm(props) {
  const { open, cancelButton, confirmButton, header, content, onConfirm, onCancel } = props
  const rest = getUnhandledProps(Confirm, props)

  // `open` is auto controlled by the Modal
  // It cannot be present (even undefined) with `defaultOpen`
  // only apply it if the user provided an open prop
  const openProp = {}
  if (_.has(props, 'open')) openProp.open = open

  return (
    <Modal {...openProp} size='small' onClose={onCancel} {...rest}>
      {header && <Modal.Header>{header}</Modal.Header>}
      {content && <Modal.Content>{content}</Modal.Content>}
      <Modal.Actions>
        <Button onClick={onCancel}>{cancelButton}</Button>
        <Button primary onClick={onConfirm}>{confirmButton}</Button>
      </Modal.Actions>
    </Modal>
  )
}

Confirm._meta = {
  name: 'Confirm',
  type: META.TYPES.ADDON,
}

Confirm.propTypes = {
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

  /** Called when the OK button is clicked */
  onConfirm: PropTypes.func,

  /** Called when the Cancel button is clicked */
  onCancel: PropTypes.func,
}

Confirm.defaultProps = {
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?',
}

export default Confirm
