import React, { PropTypes } from 'react'

import { getUnhandledProps, META, customPropTypes } from '../../lib'
import Button from '../../elements/Button'
import Modal from '../../modules/Modal'

/**
 * A Confirm modal gives the user a choice to confirm or cancel an action
 * @see Modal
 */
function Confirm(props) {
  const { active, open, cancelButton, confirmButton, header, content, onConfirm, onCancel } = props
  const rest = getUnhandledProps(Confirm, props)

  return (
    <Modal open={active || open} size='small' onClose={onCancel} {...rest}>
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
  /** Deprecated in favor of open */
  active: customPropTypes.deprecated(
    PropTypes.bool,
    'use open prop instead.'
  ),

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

  /** Whether or not the modal is visible */
  open: PropTypes.bool,
}

Confirm.defaultProps = {
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?',
}

export default Confirm
