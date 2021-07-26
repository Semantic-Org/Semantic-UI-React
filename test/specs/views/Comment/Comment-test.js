import Comment from 'src/views/Comment/Comment'
import CommentAction from 'src/views/Comment/CommentAction'
import CommentActions from 'src/views/Comment/CommentActions'
import CommentAuthor from 'src/views/Comment/CommentAuthor'
import CommentAvatar from 'src/views/Comment/CommentAvatar'
import CommentContent from 'src/views/Comment/CommentContent'
import CommentGroup from 'src/views/Comment/CommentGroup'
import CommentMetadata from 'src/views/Comment/CommentMetadata'
import CommentText from 'src/views/Comment/CommentText'
import * as common from 'test/specs/commonTests'

describe('Comment', () => {
  common.isConformant(Comment)
  common.forwardsRef(Comment)
  common.hasSubcomponents(Comment, [
    CommentAction,
    CommentActions,
    CommentAuthor,
    CommentAvatar,
    CommentAvatar,
    CommentContent,
    CommentGroup,
    CommentMetadata,
    CommentText,
  ])
  common.rendersChildren(Comment)
})
