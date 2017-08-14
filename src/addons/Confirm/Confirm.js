import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

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

  handleCancel = (e) => {
    _.invoke(this.props, 'onCancel', e, this.props)
  }

  handleCancelOverrides = predefinedProps => ({
    onClick: (e, buttonProps) => {
      _.invoke(predefinedProps, 'onClick', e, buttonProps)
      this.handleCancel(e)
    },
  })

  handleConfirmOverrides = predefinedProps => ({
    onClick: (e, buttonProps) => {
      _.invoke(predefinedProps, 'onClick', e, buttonProps)
      _.invoke(this.props, 'onConfirm', e, this.props)
    },
  })

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
          {Button.create(cancelButton, { overrideProps: this.handleCancelOverrides })}
          {Button.create(confirmButton, {
            defaultProps: { primary: true },
            overrideProps: this.handleConfirmOverrides,
          })}
        </Modal.Actions>
      </Modal>
    )
  }
}

export default Confirm
