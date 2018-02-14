import * as React from 'react';

import { SemanticShorthandContent } from '../..';
import { default as CommentAction } from './CommentAction';
import { default as CommentActions } from './CommentActions';
import { default as CommentAuthor } from './CommentAuthor';
import { default as CommentAvatar } from './CommentAvatar';
import { default as CommentContent } from './CommentContent';
import { default as CommentGroup } from './CommentGroup';
import { default as CommentMetadata } from './CommentMetadata';
import { default as CommentText } from './CommentText';

export interface CommentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Comment can be collapsed, or hidden from view. */
  collapsed?: boolean;

  /** Shorthand for primary content. */
  content?: SemanticShorthandContent;
}

interface CommentComponent extends React.StatelessComponent<CommentProps> {
  Action: typeof CommentAction;
  Actions: typeof CommentActions;
  Author: typeof CommentAuthor;
  Avatar: typeof CommentAvatar;
  Content: typeof CommentContent;
  Group: typeof CommentGroup;
  Metadata: typeof CommentMetadata;
  Text: typeof CommentText;
}

declare const Comment: CommentComponent;

export default Comment;
