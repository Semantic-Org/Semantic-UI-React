import * as React from 'react';

export interface CommentAuthorProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
    as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

declare const CommentAuthor: React.StatelessComponent<CommentAuthorProps>;

export default CommentAuthor;
