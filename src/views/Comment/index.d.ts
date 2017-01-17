import * as React from 'react';

interface CommentProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** Comment can be collapsed, or hidden from view. */
  collapsed?: boolean;
}

interface CommentClass extends React.ComponentClass<CommentProps> {
  Author: typeof CommentAuthor;
  Action: typeof CommentAction;
  Actions: typeof CommentActions;
  Avatar: typeof CommentAvatar;
  Content: typeof CommentContent;
  Group: typeof CommentGroup;
  Metadata: typeof CommentMetadata;
  Text: typeof CommentText;
}

export const Comment: CommentClass;

interface CommentAuthorProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentAuthor: React.ComponentClass<CommentAuthorProps>;

interface CommentActionProps {
  /** Style as the currently active action. */
  active?: boolean;

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentAction: React.ComponentClass<CommentActionProps>;

interface CommentActionsProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentActions: React.ComponentClass<CommentActionsProps>;

interface CommentAvatarProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Additional classes. */
  className?: string;

  /** Specifies the URL of the image. */
  src?: string;
}

export const CommentAvatar: React.ComponentClass<CommentAvatarProps>;

interface CommentContentProps {
  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentContent: React.ComponentClass<CommentContentProps>;

interface CommentGroupProps {
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

export const CommentGroup: React.ComponentClass<CommentGroupProps>;

interface CommentMetadataProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentMetadata: React.ComponentClass<CommentMetadataProps>;

interface CommentTextProps {

  /** An element type to render as (string or function). */
  as?: any;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;
}

export const CommentText: React.ComponentClass<CommentTextProps>;
