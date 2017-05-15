import * as React from 'react';
import { ButtonProps } from '../../elements/Button';

export interface ModalActionsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** An element type to render as (string or function). */
  actions?: Array<any>;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /**
   * onClick handler for an action. Mutually exclusive with children.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onActionClick?: (event: React.MouseEvent<HTMLAnchorElement>, data: ButtonProps) => void;
}

declare const ModalActions: React.ComponentClass<ModalActionsProps>;

export default ModalActions;
