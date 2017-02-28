import * as React from 'react';

interface MessageListProps {
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

const MessageList: React.StatelessComponent<MessageListProps>;

export default MessageList;
