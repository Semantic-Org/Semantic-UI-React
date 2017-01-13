import { SemanticSIZES } from '../..';
import * as React from 'react';

interface ModalProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** A modal can reduce its complexity */
  basic?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Icon */
  closeIcon?:any;

  /** Initial value of open. */
  defaultOpen?:boolean;

  /** A modal can appear in a dimmer */
  dimmer?: boolean | 'blurring' | 'inverted';

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose?: Function;

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount?: Function;

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen?:Function;

  /**
   * Called when the dropdown is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount?: Function;

  open?: boolean;

  /** The node where the modal should mount.. */
  mountNode?: any;

  /** A modal can vary in size */
  size?: SemanticSIZES;

}

interface ModalClass extends React.ComponentClass<ModalProps> {
  Header: typeof ModalHeader;
  Content: typeof ModalContent;
  Description: typeof ModalDescription;
  Actions: typeof ModalActions;
}

export const Modal: ModalClass;

interface ModalHeaderProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const ModalHeader: React.ComponentClass<ModalHeaderProps>;

interface ModalContentProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A modal can contain image content */
  image?: boolean;
}

export const ModalContent: React.ComponentClass<ModalContentProps>;

interface ModalDescriptionProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const ModalDescription: React.ComponentClass<ModalDescriptionProps>;

interface ModalActionsProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const ModalActions: React.ComponentClass<ModalActionsProps>;
