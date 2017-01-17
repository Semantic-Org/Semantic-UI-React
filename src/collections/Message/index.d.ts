import { SemanticCOLORS, SemanticSIZES } from '../..';
import * as React from 'react';

interface MessageProps {
	/** An element type to render as (string or function). */
  as?: any;

  /** A message can be formatted to attach itself to other content. */
  attached?: boolean | 'bottom';

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A message can be formatted to be different colors. */
  color?: SemanticCOLORS;

  /** A message can only take up the width of its content. */
  compact?: boolean;

  /** Shorthand for primary content. */
  content?: any;

  /** A message may be formatted to display a negative message. Same as `negative`. */
  error?: boolean;

  /** A message can float above content that it is related to. */
  floating?: boolean;

  /** Shorthand for MessageHeader. */
  header?: any;

  /** A message can be hidden. */
  hidden?: boolean;

  /** Add an icon by icon name or pass an <Icon /.> */
  icon?: any;

  /** A message may be formatted to display information. */
  info?: boolean;

  /** Array shorthand items for the MessageList. Mutually exclusive with children. */
  list?: any;

  /** A message may be formatted to display a negative message. Same as `error`. */
  negative?: boolean;

  /**
   * A message that the user can choose to hide.
   * Called when the user clicks the "x" icon. This also adds the "x" icon.
   */
  onDismiss?: React.MouseEventHandler<HTMLDivElement>;

  /** A message may be formatted to display a positive message.  Same as `success`. */
  positive?: boolean;

  /** A message can have different sizes. */
  size?: SemanticSIZES;

  /** A message may be formatted to display a positive message.  Same as `positive`. */
  success?: boolean;

  /** A message can be set to visible to force itself to be shown. */
  visible?: boolean;

  /** A message may be formatted to display warning messages. */
  warning?: boolean;
}

interface MessageClass extends React.ComponentClass<MessageProps> {
  Content: typeof MessageContent;
  Header: typeof MessageHeader;
  List: typeof MessageList;
  Item: typeof MessageItem;
}

export const Message: MessageClass;

interface MessageContentProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const MessageContent: React.ComponentClass<MessageContentProps>;

interface MessageHeaderProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const MessageHeader: React.ComponentClass<MessageHeaderProps>;

interface MessageListProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Shorthand Message.Items. */
  items?: Array<any>;
}

export const MessageList: React.ComponentClass<MessageListProps>;

interface MessageItemProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const MessageItem: React.ComponentClass<MessageItemProps>;
