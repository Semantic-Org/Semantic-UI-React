import React, { PropTypes } from 'react'

import { Button } from '../../elements'
import { Modal } from '../../modules'
import { getElementType, getUnhandledProps, META } from '../../lib'

/**
 * A Confirm modal gives the user a choice to confirm or cancel an action
 * @see Modal
 */
function Confirm(props) {
  const { active, cancelButton, confirmButton, header, content, onConfirm, onCancel } = props
  const rest = getUnhandledProps(Confirm, props)
  const ElementType = getElementType(Confirm, props)

  return (
    <ElementType active={active} size='small' onHide={onCancel} {...rest}>
      {header && <Modal.Header>{header}</Modal.Header>}
      {content && <Modal.Content>{content}</Modal.Content>}
      <Modal.Actions>
        <Button onClick={onCancel}>{cancelButton}</Button>
        <Button className='primary' onClick={onConfirm}>{confirmButton}</Button>
      </Modal.Actions>
    </ElementType>
  )
}

Confirm._meta = {
  name: 'Confirm',
  type: META.TYPES.ADDON,
}

Confirm.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Whether or not the modal is visible */
  active: PropTypes.bool,

  /** The cancel button text */
  cancelButton: PropTypes.string,

  /** The OK button text */
  confirmButton: PropTypes.string,

  /** The ModalHeader text */
  header: PropTypes.string,

  /** The ModalContent text. Mutually exclusive with children. */
  content: PropTypes.string,

  /** Called when the OK button is clicked */
  onConfirm: PropTypes.func,

  /** Called when the Cancel button is clicked */
  onCancel: PropTypes.func,
}

Confirm.defaultProps = {
  as: Modal,
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?',
}

export default Confirm
