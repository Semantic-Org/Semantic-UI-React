import * as React from 'react';

export interface CommentTextProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const CommentText: React.StatelessComponent<CommentTextProps>;

export default CommentText;
