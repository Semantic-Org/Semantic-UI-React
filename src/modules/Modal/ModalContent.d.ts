import * as React from 'react';

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

declare const ModalContent: React.StatelessComponent<ModalContentProps>;

export default ModalContent;
