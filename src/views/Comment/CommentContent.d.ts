import * as React from 'react';

export interface CommentContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const CommentContent: React.StatelessComponent<CommentContentProps>;

export default CommentContent;
