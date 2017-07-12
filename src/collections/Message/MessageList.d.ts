import * as React from 'react';

export interface MessageListProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand Message.Items. */
  items?: Array<any>;
}

declare const MessageList: React.StatelessComponent<MessageListProps>;

export default MessageList;
