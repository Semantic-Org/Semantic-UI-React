import * as React from 'react';

export interface CommentActionsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const CommentActions: React.StatelessComponent<CommentActionsProps>;

export default CommentActions;
