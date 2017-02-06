import * as React from 'react';

interface CommentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Comment can be collapsed, or hidden from view. */
  collapsed?: boolean;
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

export const Comment: CommentComponent;

interface CommentActionProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Style as the currently active action. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentAction: React.ComponentClass<CommentActionProps>;

interface CommentActionsProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentActions: React.StatelessComponent<CommentActionsProps>;

interface CommentAuthorProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
    as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentAuthor: React.StatelessComponent<CommentAuthorProps>;

interface CommentAvatarProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** Specifies the URL of the image. */
  src?: string;
}

export const CommentAvatar: React.StatelessComponent<CommentAvatarProps>;

interface CommentContentProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentContent: React.StatelessComponent<CommentContentProps>;

interface CommentGroupProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Comments can be collapsed, or hidden from view. */
  collapsed?: boolean;

  /** Comments can hide extra information unless a user shows intent to interact with a comment */
  minimal?: boolean;

  /** A comment list can be threaded to showing the relationship between conversations */
  threaded?: boolean;
}

export const CommentGroup: React.StatelessComponent<CommentGroupProps>;

interface CommentMetadataProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentMetadata: React.StatelessComponent<CommentMetadataProps>;

interface CommentTextProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentText: React.StatelessComponent<CommentTextProps>;
