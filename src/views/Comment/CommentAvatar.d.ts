import { ForwardRefComponent } from '../../generic'

export interface CommentAvatarProps extends StrictCommentAvatarProps {
  [key: string]: any
}

export interface StrictCommentAvatarProps {
  /** An element type to render as (string or function). */
  as?: any

  /** Additional classes. */
  className?: string

  /** Specifies the URL of the image. */
  src?: string
}

declare const CommentAvatar: ForwardRefComponent<CommentAvatarProps, HTMLDivElement>

export default CommentAvatar
