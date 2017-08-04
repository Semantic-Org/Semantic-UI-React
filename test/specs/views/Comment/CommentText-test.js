import CommentText from 'src/views/Comment/CommentText'
import * as common from 'test/specs/commonTests'

describe('CommentText', () => {
  common.isConformant(CommentText)
  common.rendersChildren(CommentText)
})
