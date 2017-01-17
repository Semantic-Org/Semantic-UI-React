import * as React from 'react';

interface ConfirmProps {

  /** The cancel button text */
  cancelButton?: string;

  /** The OK button text */
  confirmButton?: string;

  /** The ModalContent text. */
  content?: string;

  /** The ModalHeader text */
  header?: string;

  /** Called when the Cancel button is clicked */
  onCancel?: () => void;

  /** Called when the OK button is clicked */
  onConfirm?: () => void;

  /** Whether or not the modal is visible */
  open?: boolean;
}

export const Confirm: React.ComponentClass<ConfirmProps>;
