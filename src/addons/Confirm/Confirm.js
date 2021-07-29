import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { customPropTypes, getUnhandledProps } from '../../lib'
import Button from '../../elements/Button'
import Modal from '../../modules/Modal'

/**
 * A Confirm modal gives the user a choice to confirm or cancel an action.
 * @see Modal
 */
const Confirm = React.forwardRef(function (props, ref) {
  const { cancelButton, confirmButton, content, header, open, size } = props
  const rest = getUnhandledProps(Confirm, props)

  const handleCancel = (e) => {
    _.invoke(props, 'onCancel', e, props)
  }

  const handleCancelOverrides = (predefinedProps) => ({
    onClick: (e, buttonProps) => {
      _.invoke(predefinedProps, 'onClick', e, buttonProps)
      handleCancel(e)
    },
  })

  const handleConfirmOverrides = (predefinedProps) => ({
    onClick: (e, buttonProps) => {
      _.invoke(predefinedProps, 'onClick', e, buttonProps)
      _.invoke(props, 'onConfirm', e, props)
    },
  })

  // `open` is auto controlled by the Modal
  // It cannot be present (even undefined) with `defaultOpen`
  // only apply it if the user provided an open prop
  const openProp = {}
  if (_.has(props, 'open')) {
    openProp.open = open
  }

  return (
    <Modal {...rest} {...openProp} size={size} onClose={handleCancel} ref={ref}>
      {Modal.Header.create(header, { autoGenerateKey: false })}
      {Modal.Content.create(content, { autoGenerateKey: false })}
      <Modal.Actions>
        {Button.create(cancelButton, {
          autoGenerateKey: false,
          overrideProps: handleCancelOverrides,
        })}
        {Button.create(confirmButton, {
          autoGenerateKey: false,
          defaultProps: { primary: true },
          overrideProps: handleConfirmOverrides,
        })}
      </Modal.Actions>
    </Modal>
  )
})

Confirm.displayName = 'Confirm'
Confirm.propTypes = {
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

  /** A Confirm can vary in size */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'fullscreen']),
}

Confirm.defaultProps = {
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?',
  size: 'small',
}

export default Confirm
