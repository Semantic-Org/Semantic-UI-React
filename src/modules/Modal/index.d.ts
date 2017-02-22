import * as React from 'react';
import {PortalProps} from '../../addons/Portal';

interface ModalProps extends PortalProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A modal can reduce its complexity */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Icon. */
  closeIcon?: any;

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick?: boolean;

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick?: boolean;

  /** Initial value of open. */
  defaultOpen?: boolean;

  /** A modal can appear in a dimmer. */
  dimmer?: boolean | 'blurring' | 'inverted';

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode?: any;

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose?: (event: React.MouseEvent<HTMLElement>, data: ModalProps) => void;

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount?: (nothing: null, data: ModalProps) => void;

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen?: (event: React.MouseEvent<HTMLElement>, data: ModalProps) => void;

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount?: (nothing: null, data: ModalProps) => void;

  /** Controls whether or not the Modal is displayed. */
  open?: boolean;

  /** A modal can vary in size. */
  size?: 'fullscreen' | 'large' | 'small';
}

interface ModalComponent extends React.ComponentClass<ModalProps> {
  Actions: typeof ModalActions;
  Content: typeof ModalContent;
  Description: typeof ModalDescription;
  Header: typeof ModalHeader;
}

export const Modal: ModalComponent;

interface ModalActionsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const ModalActions: React.StatelessComponent<ModalActionsProps>;

interface ModalContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A modal can contain image content. */
  image?: boolean;
}

export const ModalContent: React.StatelessComponent<ModalContentProps>;

interface ModalDescriptionProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const ModalDescription: React.StatelessComponent<ModalDescriptionProps>;

interface ModalHeaderProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand for primary content. */
  content?: React.ReactNode;
}

export const ModalHeader: React.StatelessComponent<ModalHeaderProps>;

