import * as React from 'react';

export interface ModalActionsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const ModalActions: React.StatelessComponent<ModalActionsProps>;

export default ModalActions;
