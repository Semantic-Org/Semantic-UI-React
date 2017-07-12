import * as React from 'react';

export interface ModalDescriptionProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const ModalDescription: React.StatelessComponent<ModalDescriptionProps>;

export default ModalDescription;
